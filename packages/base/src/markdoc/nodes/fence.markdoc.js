import React from 'react';

import { nodes, Tag } from '@markdoc/markdoc';
import { EuiCodeBlock, EuiSpacer } from '@elastic/eui';

const CodeBlock = (props) => {

  // Sometimes, code is not passed as a string but as an array of strings. This
  // happens because Markdoc splits the code when it encounters a variable in
  // a code block. If this happens, join them together.
  let content = props.children;
  if (Array.isArray(props.children)) {
    content = props.children.join('');
  }

  return (
    <>
      <EuiCodeBlock language={props['data-language']} isCopyable>
        {content}
      </EuiCodeBlock>
      <EuiSpacer size="l" />
    </>
  );
};

export default {
  render: CodeBlock,
  children: nodes.fence.children,
  attributes: nodes.fence.attributes,
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
