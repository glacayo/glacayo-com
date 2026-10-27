/**
 * Wraps every highlighted <pre> in a figure.code-box with a caption carrying
 * the language and a copy button, so the box title can sit on the top rule.
 */
export function rehypeCodeBox() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'pre') {
      return wrap(child);
    }
    walk(child);
    return child;
  });
}

function wrap(pre) {
  const props = pre.properties ?? {};
  const language = String(props.dataLanguage ?? props['data-language'] ?? 'text');
  return {
    type: 'element',
    tagName: 'figure',
    properties: { className: ['code-box'] },
    children: [
      {
        type: 'element',
        tagName: 'figcaption',
        properties: { dataPagefindIgnore: 'all' },
        children: [
          { type: 'element', tagName: 'span', properties: { className: ['code-lang'] }, children: [{ type: 'text', value: language }] },
          {
            type: 'element',
            tagName: 'button',
            properties: { type: 'button', className: ['code-copy'], dataCopy: 'true' },
            children: [{ type: 'text', value: '[COPY]' }],
          },
        ],
      },
      pre,
    ],
  };
}
