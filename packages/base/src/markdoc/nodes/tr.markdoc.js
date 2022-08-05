import { nodes, Tag } from '@markdoc/markdoc';

export default {
  render: nodes.tr.render,
  children: nodes.tr.children,
  attributes: Object.assign({}, nodes.tr.attributes, {
    className: {
      type: String,
      default: 'euiTableRow euiTableRow-isClickable'
    },
  }),
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
