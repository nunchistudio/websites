import { nodes, Tag } from '@markdoc/markdoc';

export default {
  render: nodes.table.render,
  children: nodes.table.children,
  attributes: Object.assign({}, nodes.table.attributes, {
    className: {
      type: String,
      default: 'euiTable euiTable--responsive'
    },
    tabIndex: {
      type: Number,
      default: -1
    },
    style: {
      type: Object,
      default: {
        marginBottom: '48px',
      }
    },
  }),
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
