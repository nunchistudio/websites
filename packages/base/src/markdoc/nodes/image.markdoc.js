import React from 'react';
import { nodes } from '@markdoc/markdoc';

import { EuiImage, EuiSpacer } from '@elastic/eui'

import { useTheme } from '../../components/Theme';

const Image = (props) => {
  const { colorMode } = useTheme();
  const src = props.src.replace('%7Btheme%7D', colorMode);

  return (
    <>
      <EuiSpacer size="l" />
      <EuiImage src={src} alt={props.alt} />
    </>
  );
};

export default {
  render: Image,
  children: nodes.image.children,
  attributes: nodes.image.attributes,
};
