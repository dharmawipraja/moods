import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#7DE4EA"
      fillRule="evenodd"
      d="M.333 17C.333 7.795 7.795.333 17 .333 26.205.333 33.667 7.795 33.667 17c0 9.205-7.462 16.667-16.667 16.667C7.795 33.667.333 26.205.333 17ZM12 10.333a2.5 2.5 0 0 0-2.5 2.5v.017a2.5 2.5 0 0 0 2.5 2.5h.017a2.5 2.5 0 0 0 2.5-2.5v-.017a2.5 2.5 0 0 0-2.5-2.5H12Zm10 0a2.5 2.5 0 0 0-2.5 2.5v.017a2.5 2.5 0 0 0 2.5 2.5h.017a2.5 2.5 0 0 0 2.5-2.5v-.017a2.5 2.5 0 0 0-2.5-2.5H22ZM10.333 22A1.667 1.667 0 0 1 12 20.333h10a1.667 1.667 0 1 1 0 3.334H12A1.667 1.667 0 0 1 10.333 22Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
