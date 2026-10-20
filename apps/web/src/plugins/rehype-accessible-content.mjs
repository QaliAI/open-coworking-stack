// Markdown renders task-list checkboxes with no accessible name and tables that scroll on narrow
// screens with no keyboard access. Both fail WCAG (axe: label, scrollable-region-focusable).
// This plugin names each checkbox from its list item text and makes every table focusable.

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function classNames(node) {
  const value = node.properties?.className;
  return Array.isArray(value) ? value : typeof value === 'string' ? value.split(/\s+/) : [];
}

function walk(node) {
  if (node.type === 'element') {
    if (node.tagName === 'li' && classNames(node).includes('task-list-item')) {
      const label = textOf(node).replace(/\s+/g, ' ').trim().slice(0, 140);
      for (const child of node.children ?? []) {
        if (
          child.type === 'element' &&
          child.tagName === 'input' &&
          child.properties?.type === 'checkbox'
        ) {
          child.properties.ariaLabel = label || 'Checklist item';
        }
      }
    }
    if (node.tagName === 'table') {
      node.properties = { ...node.properties, tabIndex: 0 };
    }
  }
  for (const child of node.children ?? []) walk(child);
}

export default function rehypeAccessibleContent() {
  return (tree) => walk(tree);
}
