import React, { type Dispatch, type SetStateAction, useState } from 'react';
import { Pressable, type ViewStyle } from 'react-native';
import { styles } from './MoodCard.styles';
import Typhography from '../Typhography/Typhography';
import { Colors } from '../../Assets/Colors';
import { HappyIcon, NeutralIcon, SadIcon, StressIcon } from '../../Assets';
import { MOOD_TYPE, TEXT_VARIANT } from '../../Constants';

const {
  LIGHT_CREAM,
  SOFT_AQUA,
  PALE_BLUE,
  BLUSH_PINK,
  GOLDEN_SUN,
  SKY_BLUE,
  BRIGHT_BLUE,
  VIBRANT_RED,
} = Colors;
const { HAPPY, NEUTRAL, SAD, STRESS } = MOOD_TYPE;

type Type = MOOD_TYPE;
type Props = {
  type: Type;
  title: string;
  onPress: () => void;
};
type AdditionalStyles = Record<Type, ViewStyle>;
type SetPress = Dispatch<SetStateAction<boolean>>;

const getStylesByType = (type: Type, isPressed: boolean) => {
  const additionalStyles: AdditionalStyles = {
    [HAPPY]: {
      backgroundColor: LIGHT_CREAM,
      borderWidth: isPressed ? 1 : 0,
      borderColor: isPressed ? GOLDEN_SUN : undefined,
    },
    [NEUTRAL]: {
      backgroundColor: SOFT_AQUA,
      borderWidth: isPressed ? 1 : 0,
      borderColor: isPressed ? SKY_BLUE : undefined,
    },
    [SAD]: {
      backgroundColor: PALE_BLUE,
      borderWidth: isPressed ? 1 : 0,
      borderColor: isPressed ? BRIGHT_BLUE : undefined,
    },
    [STRESS]: {
      backgroundColor: BLUSH_PINK,
      borderWidth: isPressed ? 1 : 0,
      borderColor: isPressed ? VIBRANT_RED : undefined,
    },
  };

  return additionalStyles[type];
};

const getTextColorByType = (type: Type) => {
  const color = {
    [HAPPY]: GOLDEN_SUN,
    [NEUTRAL]: SKY_BLUE,
    [SAD]: BRIGHT_BLUE,
    [STRESS]: VIBRANT_RED,
  };

  return color[type];
};

const getIconByType = (type: Type) => {
  const icon = {
    [HAPPY]: <HappyIcon height={40} width={40} />,
    [NEUTRAL]: <NeutralIcon height={40} width={40} />,
    [SAD]: <SadIcon height={40} width={40} />,
    [STRESS]: <StressIcon height={40} width={40} />,
  };

  return icon[type];
};

const handlePressIn = (setIsPressed: SetPress) => () => {
  setIsPressed(true);
};

const handlePressOut = (setIsPressed: SetPress) => () => {
  setIsPressed(false);
};

const MoodCard = ({ type, title, onPress }: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const additionalStyles = getStylesByType(type, isPressed);
  const textColor = getTextColorByType(type);

  return (
    <Pressable
      style={[styles.container, additionalStyles]}
      onPressIn={handlePressIn(setIsPressed)}
      onPressOut={handlePressOut(setIsPressed)}
      onPress={onPress}>
      {getIconByType(type)}
      <Typhography
        text={title}
        color={textColor}
        variant={TEXT_VARIANT.TITLE}
      />
    </Pressable>
  );
};

export default MoodCard;
