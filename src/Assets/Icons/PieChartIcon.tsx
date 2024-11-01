import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.71 14.89A10 10 0 1 1 7.5 1.83m13.24 5.343a10 10 0 0 1 .728 3.028c.021.257.031.385-.02.5a.525.525 0 0 1-.22.239c-.11.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218c-.055-.107-.055-.247-.055-.527V1.8c0-.278 0-.417.06-.528a.525.525 0 0 1 .239-.22c.115-.05.244-.04.5-.02a10 10 0 0 1 8.44 6.141Z"
    />
  </Svg>
);

export default SvgComponent;
