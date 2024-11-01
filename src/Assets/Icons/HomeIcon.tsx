import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.167 20v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C7.927 11 8.207 11 8.767 11h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054V20M9.184 1.764 2.402 7.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65c-.074.265-.074.552-.074 1.126V16.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.988.218 2.108.218h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.565c0-.574 0-.861-.074-1.126a2 2 0 0 0-.318-.65c-.164-.22-.39-.397-.844-.75L11.15 1.764c-.351-.273-.527-.41-.721-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.72.462Z"
    />
  </Svg>
);
export default SvgComponent;
