import { nodes, Tag } from '@markdoc/markdoc';

export default {
  render: nodes.td.render,
  children: nodes.td.children,
  attributes: Object.assign({}, nodes.td.attributes, {
    className: {
      type: String,
      default: 'euiTableRowCell euiTableRowCell--middle'
    },
    style: {
      type: Object,
      default: {
        padding: '5px 10px',
      }
    },
  }),
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
