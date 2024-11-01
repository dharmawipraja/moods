import { View } from 'react-native';
import React from 'react';
import MoodCard from '../../Components/MoodCard/MoodCard';
import { styles } from './HomeScreen.styles';
import { MOOD_TYPE, TEXT_VARIANT } from '../../Constants';
import Typhography from '../../Components/Typhography/Typhography';

const { HAPPY, NEUTRAL, SAD, STRESS } = MOOD_TYPE;

const Home = () => {
  return (
    <View style={styles.container}>
      <Typhography
        text="How are you feeling right now?"
        variant={TEXT_VARIANT.TITLE}
      />
      <MoodCard type={HAPPY} title="Happy" />
      <MoodCard type={NEUTRAL} title="Neutral" />
      <MoodCard type={SAD} title="Sad" />
      <MoodCard type={STRESS} title="Stress" />
    </View>
  );
};

export default Home;
