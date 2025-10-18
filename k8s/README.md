# Kubernetes Deployment Guide

Deploy ClaudeKit Documentation to Kubernetes cluster.

## Prerequisites

- Kubernetes cluster (v1.24+)
- kubectl configured
- cert-manager installed (for TLS certificates)
- nginx-ingress-controller installed

## Quick Start

1. **Build and Push Docker Image**

```bash
# Build image
docker build -t ghcr.io/claudekit/claudekit-docs:latest .

# Push to registry
docker push ghcr.io/claudekit/claudekit-docs:latest
```

2. **Create GitHub Registry Secret**

```bash
kubectl create secret docker-registry github-registry \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_TOKEN \
  --docker-email=YOUR_EMAIL
```

3. **Deploy to Kubernetes**

```bash
# Apply all configurations
kubectl apply -f k8s/

# Or apply individually
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

4. **Verify Deployment**

```bash
# Check pods
kubectl get pods -l app=claudekit-docs

# Check service
kubectl get svc claudekit-docs

# Check ingress
kubectl get ingress claudekit-docs

# View logs
kubectl logs -l app=claudekit-docs --follow
```

## Configuration

### Environment Variables

Edit `k8s/configmap.yaml`:

```yaml
SITE_URL: "https://docs.claudekit.cc"
NODE_ENV: "production"
```

### Resource Limits

Edit `k8s/deployment.yaml` resources:

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

### Replicas

For high availability, adjust replicas:

```yaml
spec:
  replicas: 3  # Change from 2 to 3
```

## SSL/TLS Certificates

Using cert-manager with Let's Encrypt:

```bash
# Install cert-manager (if not already installed)
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# Create ClusterIssuer
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@claudekit.cc
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

## Monitoring

### Health Checks

```bash
# Manual health check
kubectl port-forward svc/claudekit-docs 8080:80
curl http://localhost:8080
```

### Logs

```bash
# Stream logs from all pods
kubectl logs -l app=claudekit-docs -f

# Logs from specific pod
kubectl logs claudekit-docs-<pod-id>
```

## Scaling

```bash
# Manual scaling
kubectl scale deployment claudekit-docs --replicas=5

# Auto-scaling (HPA)
kubectl autoscale deployment claudekit-docs \
  --cpu-percent=70 \
  --min=2 \
  --max=10
```

## Rolling Updates

```bash
# Update image
kubectl set image deployment/claudekit-docs \
  claudekit-docs=ghcr.io/claudekit/claudekit-docs:v2.0.0

# Check rollout status
kubectl rollout status deployment/claudekit-docs

# Rollback if needed
kubectl rollout undo deployment/claudekit-docs
```

## Troubleshooting

### Pods Not Starting

```bash
kubectl describe pod claudekit-docs-<pod-id>
kubectl logs claudekit-docs-<pod-id>
```

### Image Pull Errors

```bash
# Verify secret
kubectl get secret github-registry -o yaml

# Recreate secret
kubectl delete secret github-registry
kubectl create secret docker-registry github-registry \
  --docker-server=ghcr.io \
  --docker-username=... \
  --docker-password=... \
  --docker-email=...
```

### Ingress Not Working

```bash
# Check ingress
kubectl describe ingress claudekit-docs

# Check nginx-ingress logs
kubectl logs -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx

# Check cert-manager
kubectl get certificate
kubectl describe certificate claudekit-docs-tls
```

## Cleanup

```bash
# Delete all resources
kubectl delete -f k8s/

# Or delete individually
kubectl delete deployment claudekit-docs
kubectl delete service claudekit-docs
kubectl delete ingress claudekit-docs
kubectl delete configmap claudekit-docs-config
```

## CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Deploy to Kubernetes

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build -t ghcr.io/claudekit/claudekit-docs:${{ github.sha }} .

      - name: Push to GHCR
        run: |
          echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u $ --password-stdin
          docker push ghcr.io/claudekit/claudekit-docs:${{ github.sha }}

      - name: Deploy to Kubernetes
        uses: azure/k8s-deploy@v4
        with:
          manifests: |
            k8s/deployment.yaml
            k8s/service.yaml
            k8s/ingress.yaml
          images: ghcr.io/claudekit/claudekit-docs:${{ github.sha }}
```
