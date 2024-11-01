import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.229 18.371.584 1.315a2.212 2.212 0 0 0 4.044 0l.585-1.315a2.426 2.426 0 0 1 2.47-1.423l1.43.152a2.212 2.212 0 0 0 2.022-3.502l-.847-1.164a2.429 2.429 0 0 1-.46-1.434c0-.513.163-1.014.465-1.429l.847-1.163a2.21 2.21 0 0 0-.786-3.274 2.212 2.212 0 0 0-1.237-.228l-1.43.152a2.433 2.433 0 0 1-1.47-.312 2.426 2.426 0 0 1-1-1.117l-.589-1.315a2.212 2.212 0 0 0-4.044 0L7.229 3.63c-.208.468-.558.86-1 1.117-.445.256-.96.365-1.47.312l-1.435-.152a2.212 2.212 0 0 0-2.022 3.502l.847 1.163a2.429 2.429 0 0 1 0 2.858l-.847 1.163a2.211 2.211 0 0 0 2.022 3.502l1.43-.152a2.434 2.434 0 0 1 2.475 1.43Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.833 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);

export default SvgComponent;
