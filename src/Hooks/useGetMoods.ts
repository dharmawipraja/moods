import { useEffect, useState } from 'react';
import { getAllStorageData, getAllStorageKeys } from '../Utils/Storage.utils';
import { useIsFocused } from '@react-navigation/native';

type MoodData = {
  mood: string;
  timestamp: string;
};

export const useGetMoods = () => {
  const isFocused = useIsFocused();
  const [moodData, setMoodData] = useState<MoodData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const keys = await getAllStorageKeys();

        if (!keys) {return;}

        const moodKeys = keys.filter((key) => key.startsWith('mood_'));
        const moodEntries = await getAllStorageData(moodKeys);

        if (!moodEntries) {return;}

        const moods = moodEntries.map(
          ([_, value]) => value && JSON.parse(value),
        );

        setMoodData(moods);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (isFocused) {
      fetchMoodData();
    }
  }, [isFocused]);

  return {
    moodData,
    loading,
  };
};
