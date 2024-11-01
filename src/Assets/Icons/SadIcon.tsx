import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#4370F2"
      d="M25.333 2.567A16.667 16.667 0 1 1 .342 17.54L.333 17l.009-.54A16.667 16.667 0 0 1 25.333 2.567ZM17 19a7.5 7.5 0 0 0-5.357 2.25 1.668 1.668 0 1 0 2.38 2.333 4.168 4.168 0 0 1 5.954 0 1.667 1.667 0 0 0 2.38-2.333A7.501 7.501 0 0 0 17 19Zm-4.983-7-.212.012a1.666 1.666 0 0 0 0 3.31l.195.011.212-.011a1.667 1.667 0 0 0 0-3.31L12.017 12Zm10 0-.212.012a1.666 1.666 0 0 0 0 3.31l.195.011.212-.011a1.667 1.667 0 0 0 0-3.31L22.017 12Z"
    />
  </Svg>
);

export default SvgComponent;
