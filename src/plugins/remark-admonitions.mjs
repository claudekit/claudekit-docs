import { visit } from 'unist-util-visit';

export function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type !== 'containerDirective' &&
        node.type !== 'leafDirective' &&
        node.type !== 'textDirective'
      ) {
        return;
      }

      if (
        !['tip', 'info', 'warning', 'danger', 'note'].includes(node.name)
      ) {
        return;
      }

      const data = node.data || (node.data = {});
      const tagName = node.type === 'textDirective' ? 'span' : 'div';

      data.hName = tagName;
      data.hProperties = {
        class: `admonition admonition-${node.name}`,
        ...node.attributes,
      };

      // Handle label (title)
      const firstChild = node.children[0];
      if (firstChild && firstChild.data && firstChild.data.directiveLabel) {
        firstChild.data.hName = 'div';
        firstChild.data.hProperties = {
          class: 'admonition-title',
        };
      }
    });
  };
}
