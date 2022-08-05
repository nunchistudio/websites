import { nodes, Tag } from '@markdoc/markdoc';

export default {
  render: nodes.th.render,
  children: nodes.th.children,
  attributes: Object.assign({}, nodes.th.attributes, {
    className: {
      type: String,
      default: 'euiTableRowCell euiTableRowCell--enlargeForMobile euiTableRowCell--middle'
    },
    style: {
      type: Object,
      default: {
        padding: '10px',
        fontWeight: 'bold'
      }
    },
  }),
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
