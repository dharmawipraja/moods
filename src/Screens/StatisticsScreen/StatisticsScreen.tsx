import { View } from 'react-native';
import React from 'react';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import { Colors } from '../../Assets/Colors';
import { useGetMoods } from '../../Hooks/useGetMoods';
import { CHART_TYPE, MOOD_TYPE, TEXT_VARIANT } from '../../Constants';
import Typhography from '../../Components/Typhography/Typhography';
import Card from '../../Components/Card/Card';
import { styles } from './StatisticsScreen.styles';
import { useGetChartType } from '../../Hooks/useGetChartType';

type MoodData = {
  mood: string;
  timestamp: string;
};
type Data = Record<string, number>;

const { WHITE, GOLDEN_SUN, SKY_BLUE, BRIGHT_BLUE, VIBRANT_RED } = Colors;
const { HAPPY, NEUTRAL, SAD, STRESS } = MOOD_TYPE;

const renderPieChart = (data: Data) => {
  const pieData = [
    { id: STRESS, value: data[STRESS], color: VIBRANT_RED },
    { id: NEUTRAL, value: data[NEUTRAL], color: SKY_BLUE },
    { id: HAPPY, value: data[HAPPY], color: GOLDEN_SUN },
    { id: SAD, value: data[SAD], color: BRIGHT_BLUE },
  ];

  return (
    <PieChart
      data={pieData}
      strokeWidth={2}
      strokeColor={WHITE}
      radius={187 / 2}
    />
  );
};

const renderBarChart = (data: Data) => {
  const barData = [
    { id: HAPPY, value: data[HAPPY], frontColor: GOLDEN_SUN },
    { id: NEUTRAL, value: data[NEUTRAL], frontColor: SKY_BLUE },
    { id: SAD, value: data[SAD], frontColor: BRIGHT_BLUE },
    { id: STRESS, value: data[STRESS], frontColor: VIBRANT_RED },
  ];

  return (
    <View style={styles.barChart}>
      <BarChart
        data={barData}
        barBorderTopLeftRadius={10}
        barBorderTopRightRadius={10}
        barWidth={70}
        initialSpacing={20}
        spacing={0}
        yAxisThickness={0}
        xAxisThickness={0}
        hideYAxisText
        hideRules
        disablePress
        disableScroll
      />
    </View>
  );
};

const renderChart = (chartType: string, data: Data) => (
  <Card>
    <View style={styles.chartCard}>
      {chartType === CHART_TYPE.PIE
        ? renderPieChart(data)
        : renderBarChart(data)}
    </View>
  </Card>
);

const summarizeMoods = (data: MoodData[]): Data => {
  const totalMoods = data.length;
  const moodCounts = data.reduce((acc: Record<string, number>, { mood }) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});

  const moodPercentages: Record<string, number> = {};
  for (const mood in moodCounts) {
    moodPercentages[mood] = Math.round((moodCounts[mood] / totalMoods) * 100);
  }

  return moodPercentages;
};

const renderStatsCard = (data: Data) => {
  const stats = [
    {
      title: 'Happy',
      color: GOLDEN_SUN,
      value: data[HAPPY],
    },
    {
      title: 'Neutral',
      color: SKY_BLUE,
      value: data[NEUTRAL],
    },
    {
      title: 'Sad',
      color: BRIGHT_BLUE,
      value: data[SAD],
    },
    {
      title: 'Stress',
      color: VIBRANT_RED,
      value: data[STRESS],
    },
  ];

  return (
    <View style={styles.statsContainer}>
      {stats.map(({ color, title, value }) => (
        <Card key={title}>
          <View style={styles.dataCard}>
            <Typhography
              color={color}
              text={title}
              variant={TEXT_VARIANT.SUBTITLE}
            />
            <Typhography text={`${value}%`} />
          </View>
        </Card>
      ))}
    </View>
  );
};

const Stats = () => {
  const { chartType, loading: chartLoading } = useGetChartType();
  const { loading, moodData } = useGetMoods();
  const data = summarizeMoods(moodData);

  if (loading || chartLoading) {
    return;
  }

  if (moodData.length === 0) {
    return (
      <View style={styles.emptyDataContainer}>
        <Typhography
          text="Data empty, choose your mood first"
          variant={TEXT_VARIANT.TITLE}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderChart(chartType, data)}
      {renderStatsCard(data)}
    </View>
  );
};

export default Stats;
