import NextRedirect from 'nextjs-redirect';

import {
  EuiEmptyPrompt, EuiImage,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

const Redirect = NextRedirect('https://temporal.land');

function Blacksmith(props) {
  const { colorMode } = useTheme();

  return (
    <Redirect>
      <EuiEmptyPrompt titleSize="m" title={<h2>Redirecting to Temporal Land...</h2>}
        layout="vertical"
        icon={<EuiImage alt="Redirecting..." size="fullWidth" src={`/images/404-${colorMode}.png`} />}
      />
    </Redirect>
  );
};

export default Blacksmith;
