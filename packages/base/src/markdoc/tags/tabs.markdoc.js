import {
  EuiTabbedContent,
} from '@elastic/eui';
import { Tag } from '@markdoc/markdoc';

const Tabs = (props) => {
  return (
    <EuiTabbedContent tabs={props.tabs} />
  )
};

export default {
  render: Tabs,
  attributes: {},
  transform(node, config) {
    var tabs = []
    node
      .transformChildren(config)
      .filter((child) => child && child.name === 'Tab')
      .map((tab) => {
        tabs.push({
          id: tab.attributes.name,
          name: tab.attributes.name,
          content: tab.children,
        })
      });

    return new Tag(this.render, { tabs }, node.transformChildren(config));
  },
};
