import { View } from 'react-native';
import React from 'react';
import MoodCard from '../../Components/MoodCard/MoodCard';
import { styles } from './HomeScreen.styles';
import { MOOD_TYPE, TEXT_VARIANT } from '../../Constants';
import Typhography from '../../Components/Typhography/Typhography';
import { saveStorageData } from '../../Utils/Storage.utils';

const { HAPPY, NEUTRAL, SAD, STRESS } = MOOD_TYPE;

const handlePress = (mood: MOOD_TYPE) => async () => {
  const timestamp = new Date().toISOString();
  const moodData = { mood, timestamp };

  try {
    await saveStorageData(`mood_${timestamp}`, JSON.stringify(moodData));
  } catch (error) {
    console.error(error);
  }
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Typhography
        text="How are you feeling right now?"
        variant={TEXT_VARIANT.TITLE}
      />
      <MoodCard type={HAPPY} title="Happy" onPress={handlePress(HAPPY)} />
      <MoodCard type={NEUTRAL} title="Neutral" onPress={handlePress(NEUTRAL)} />
      <MoodCard type={SAD} title="Sad" onPress={handlePress(SAD)} />
      <MoodCard type={STRESS} title="Stress" onPress={handlePress(STRESS)} />
    </View>
  );
};

export default Home;
