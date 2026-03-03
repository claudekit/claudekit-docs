---
lang: vi
title: "ckm:frontend-development"
description: "React/TypeScript frontend với Suspense, lazy loading"
section: marketing
kit: marketing
category: skills
order: 80
---

# Frontend Development

> Xây dựng frontend marketing applications hiệu suất cao với React, TypeScript và modern patterns.

## Skill Này Làm Gì

**Thách thức**: Marketing frontends cần tải nhanh (mỗi 100ms thêm giảm 1% conversion), hiển thị đúng trên mọi thiết bị, và xử lý real-time data từ analytics. Thiếu performance optimization dẫn đến bounce rate cao.

**Giải pháp**: Skill frontend-development cung cấp React/TypeScript patterns tối ưu, code splitting với Suspense, lazy loading strategies, state management và integration với marketing APIs.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi xây dựng React components, pages hoặc frontend features.

**Tường minh**: Kích hoạt qua prompt:
```
Activate frontend-development skill to build [component/feature]
```

## Tính Năng

### 1. Component Architecture

**Smart/Dumb component pattern**:
```typescript
// Container component (smart — xử lý logic)
function CampaignDashboardContainer() {
  const { data: campaigns, isLoading, error } = useCampaigns();

  if (isLoading) return <DashboardSkeleton />;
  if (error) return <ErrorState error={error} />;

  return <CampaignDashboard campaigns={campaigns} />;
}

// Presentational component (dumb — chỉ render)
function CampaignDashboard({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <div className="grid gap-4">
      {campaigns.map(campaign => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}
```

### 2. React Suspense và Lazy Loading

**Code splitting cho marketing pages**:
```typescript
// Lazy load heavy components
const AnalyticsDashboard = lazy(() => import('./AnalyticsDashboard'));
const CampaignEditor = lazy(() => import('./CampaignEditor'));
const ReportGenerator = lazy(() => import('./ReportGenerator'));

// Route-level splitting với Suspense
function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/campaigns/edit/:id" element={<CampaignEditor />} />
        <Route path="/reports" element={<ReportGenerator />} />
      </Routes>
    </Suspense>
  );
}
```

**Data fetching với Suspense** (React 18+):
```typescript
// Suspense-compatible data fetching
async function fetchCampaignData(id: string): Promise<Campaign> {
  const response = await fetch(`/api/campaigns/${id}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}

function CampaignPage({ id }: { id: string }) {
  const campaign = use(fetchCampaignData(id)); // React 19 use() hook

  return <CampaignDetail campaign={campaign} />;
}

// Parent wraps với Suspense + ErrorBoundary
<ErrorBoundary fallback={<ErrorPage />}>
  <Suspense fallback={<Skeleton />}>
    <CampaignPage id={campaignId} />
  </Suspense>
</ErrorBoundary>
```

### 3. Performance Optimization

**Image optimization**:
```typescript
// Next.js Image component
import Image from 'next/image';

function ProductBanner({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={630}
      priority     // LCP image — load ngay
      placeholder="blur"
      blurDataURL={blurHash}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

**Virtual scrolling cho danh sách dài**:
```typescript
import { useVirtualizer } from '@tanstack/react-virtual';

function LeadsList({ leads }: { leads: Lead[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: leads.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72, // Row height estimate
  });

  return (
    <div ref={parentRef} className="h-96 overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              transform: `translateY(${virtualRow.start}px)`,
              height: `${virtualRow.size}px`,
            }}
          >
            <LeadRow lead={leads[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 4. State Management

**Zustand cho global marketing state**:
```typescript
import { create } from 'zustand';

interface MarketingStore {
  selectedCampaign: string | null;
  dateRange: { start: Date; end: Date };
  filters: CampaignFilter[];

  setSelectedCampaign: (id: string) => void;
  setDateRange: (range: { start: Date; end: Date }) => void;
  addFilter: (filter: CampaignFilter) => void;
  removeFilter: (id: string) => void;
}

export const useMarketingStore = create<MarketingStore>((set) => ({
  selectedCampaign: null,
  dateRange: { start: subDays(new Date(), 30), end: new Date() },
  filters: [],

  setSelectedCampaign: (id) => set({ selectedCampaign: id }),
  setDateRange: (range) => set({ dateRange: range }),
  addFilter: (filter) => set(state => ({
    filters: [...state.filters, filter]
  })),
  removeFilter: (id) => set(state => ({
    filters: state.filters.filter(f => f.id !== id)
  })),
}));
```

### 5. API Integration

**TanStack Query cho server state**:
```typescript
// Campaign hooks
function useCampaigns() {
  return useQuery({
    queryKey: ['campaigns'],
    queryFn: () => api.getCampaigns(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

function useCreateCampaign() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCampaignInput) => api.createCampaign(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
    },
  });
}
```

## Điều Kiện Tiên Quyết

- Node.js 18+, npm hoặc bun
- React 18+, TypeScript 5+
- Next.js 14+ (App Router)
- Tailwind CSS

## Cấu Hình

**TypeScript strict config**:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## Thực Hành Tốt Nhất

**1. Core Web Vitals First**
LCP < 2.5s, FID < 100ms, CLS < 0.1. Đây là thứ Google và users cần thấy.

**2. Error Boundaries Mọi Nơi**
Wrap mọi async component với ErrorBoundary. Lỗi ở một component không nên crash toàn bộ app.

**3. Skeleton Loading, Không Phải Spinner**
Skeleton screens giảm perceived loading time và tránh layout shift.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Marketing Analytics Dashboard
**Tình huống**: Dashboard hiển thị realtime KPIs từ nhiều sources.

**Key patterns**:
- SWR/TanStack Query với polling mỗi 30s
- Recharts/Chart.js cho visualizations
- Skeleton loading cho chart placeholders
- Virtual scrolling cho large data tables

### Trường Hợp 2: Campaign Management UI
**Tình huống**: CRUD interface cho campaigns với rich editor.

**Key patterns**:
- Optimistic updates với TanStack Query
- Form với React Hook Form + Zod validation
- Lazy load rich text editor

## Xử Lý Sự Cố

**Vấn đề**: Re-renders quá nhiều, performance kém
**Giải pháp**: React DevTools Profiler để identify. `React.memo`, `useMemo`, `useCallback` có chọn lọc.

**Vấn đề**: Bundle size quá lớn (> 300KB initial JS)
**Giải pháp**: Analyze với `next build --analyze`. Code split aggressively.

## Skill Liên Quan

- [Frontend Design](/vi/docs/marketing/skills/frontend-design) - UI/UX implementation
- [Backend Development](/vi/docs/marketing/skills/backend-development) - API integration
- [Design System](/vi/docs/marketing/skills/design-system) - Component library

## Lệnh Liên Quan

- `/ckm:frontend-development` - Xây dựng frontend
- `/ckm:frontend-design` - Implement UI từ design
- `/ckm:debugging` - Debug frontend issues
