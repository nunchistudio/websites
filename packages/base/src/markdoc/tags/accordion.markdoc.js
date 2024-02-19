import {
  EuiFlexGroup, EuiFlexItem,
  EuiAccordion,
  EuiTitle, EuiText, EuiTextColor,
  useGeneratedHtmlId,
} from '@elastic/eui';

const Callout = (props) => {
  const buttonContent = (
    <>
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
        <EuiFlexItem>
          <EuiTitle size="xs">
            <span>{props.title}</span>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiText size="s">
        <p>
          <EuiTextColor color="subdued">
            {props.description}
          </EuiTextColor>
        </p>
      </EuiText>
    </>
  );

  return (
    <>
      <EuiAccordion id={useGeneratedHtmlId()}
        className="euiAccordionForm"
        buttonClassName="euiAccordionForm__button"
        buttonContent={buttonContent}
        paddingSize="l"
      >
        {props.children}
      </EuiAccordion>
    </>
  )
};

export default {
  render: Callout,
  attributes: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
