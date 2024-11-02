import { useEffect, useState } from 'react';
import { getStorageData } from '../Utils/Storage.utils';
import { useIsFocused } from '@react-navigation/native';
import { CHART_KEY, CHART_TYPE } from '../Constants';

export const useGetChartType = () => {
  const isFocused = useIsFocused();
  const [chartType, setChartType] = useState(CHART_TYPE.PIE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartType = async () => {
      try {
        const type = await getStorageData(CHART_KEY);

        if (!type) {return;}

        setChartType(type);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (isFocused) {
      fetchChartType();
    }
  }, [isFocused]);

  return {
    chartType,
    loading,
  };
};
