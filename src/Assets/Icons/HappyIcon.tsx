import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#FFCF30"
      d="M30.374 5.626A17.5 17.5 0 1 0 5.626 30.374 17.5 17.5 0 1 0 30.374 5.626ZM12.375 14.25a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75Zm13.1 8.294C24.536 25.694 21.551 28 18.003 28c-3.549 0-6.533-2.307-7.478-5.456a.625.625 0 0 1 .611-.794h13.726a.624.624 0 0 1 .611.794ZM23.624 18a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z"
    />
  </Svg>
);

export default SvgComponent;
