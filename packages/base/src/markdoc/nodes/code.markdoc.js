import React from 'react';

import { nodes, Tag } from '@markdoc/markdoc';
import { EuiCode } from '@elastic/eui';

const Code = (props) => {
  return (
    <EuiCode>{props.content}</EuiCode>
  );
};

export default {
  render: Code,
  children: nodes.fence.children,
  attributes: nodes.fence.attributes,
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const content = node.attributes['content'];

    return new Tag(this.render, { ...attributes, content }, children);
  },
};
