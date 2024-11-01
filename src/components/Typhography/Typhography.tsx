import React from 'react';
import { Text, type TextStyle } from 'react-native';
import { TEXT_VARIANT } from '../../Constants';

const { HEADER_TITLE, REGULAR, TITLE, SUBTITLE } = TEXT_VARIANT;

type Props = {
  text: string;
  color?: string;
  variant?: TEXT_VARIANT;
};
type TextStyles = Record<TEXT_VARIANT, TextStyle>;

const getStylesByVariant = (variant: TEXT_VARIANT = REGULAR) => {
  const styles: TextStyles = {
    [HEADER_TITLE]: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 20,
    },
    [TITLE]: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
    },
    [SUBTITLE]: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 12,
    },
    [REGULAR]: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
    },
  };

  return styles[variant];
};

const Typhography = ({ text, color, variant }: Props) => {
  const textStyles = getStylesByVariant(variant);

  return <Text style={[textStyles, { color }]}>{text}</Text>;
};

export default Typhography;
