import {
  EuiTabs, EuiTab,
  EuiSpacer,
} from '@elastic/eui';

const Tab = (props) => {
  return (
    <>
      <EuiTabs>
        <EuiTab id={props.name} name={props.name} isSelected={true}>
          {props.name}
        </EuiTab>
      </EuiTabs>

      <EuiSpacer size="l" />
      {props.children}
      <EuiSpacer size="m" />
    </>
  )
};

export default {
  render: Tab,
  attributes: {
    name: {
      type: String,
    },
  },
};
