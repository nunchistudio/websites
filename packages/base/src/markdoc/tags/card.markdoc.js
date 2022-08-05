import { EuiCard, EuiIcon, EuiSpacer } from '@elastic/eui';

import { useTheme } from '../../components/Theme';

const Card = (props) => {
  const { colorMode } = useTheme();

  if (!props.iconType) {
    return (
      <>
        <EuiCard layout={props.layout} paddingSize="l"
          title={props.title}
          titleElement="span"
          titleSize="xs"
          href={props.href}
          description={props.children.props.children} />
        <EuiSpacer size="l" />
      </>
    )
  }

  return (
    <>
      <EuiCard layout={props.layout} paddingSize="l"
        icon={<EuiIcon size="xxl" type={`/icons/${props.iconType}-${colorMode}.svg`} />}
        title={props.title}
        titleElement="span"
        titleSize="xs"
        href={props.href}
        description={props.children.props.children} />
      <EuiSpacer size="l" />
    </>
  )
};

export default {
  render: Card,
  attributes: {
    layout: {
      type: String,
      default: 'horizontal',
    },
    title: {
      type: String,
    },
    iconType: {
      type: String,
    },
    href: {
      type: String,
    },
  },
};
