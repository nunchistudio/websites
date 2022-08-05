import { EuiCallOut, EuiSpacer } from '@elastic/eui';

const Callout = (props) => {
  let defaultLevel = 'primary';
  let level = props.level;
  if (level == null) {
    level = defaultLevel;
  }

  let defaultTitle = 'Note';
  let title = props.title;
  if (title == null) {
    title = defaultTitle;
  }

  let defaultIconType = 'help';
  let iconType = props.iconType;
  if (iconType == null) {
    iconType = defaultIconType;
  }

  return (
    <>
      <EuiCallOut color={level} title={title} iconType={iconType}>
        {props.children}
      </EuiCallOut>
      <EuiSpacer size="xl" />
    </>
  )
};

export default {
  render: Callout,
  attributes: {
    level: {
      type: String,
    },
    title: {
      type: String,
    },
    iconType: {
      type: String,
    },
  },
};
