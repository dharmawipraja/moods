import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { BarChart, PieChart } from "react-native-gifted-charts";
import { Colors } from '../../Assets/Colors';

const {
  WHITE,
  GOLDEN_SUN,
  SKY_BLUE,
  BRIGHT_BLUE,
  VIBRANT_RED
} = Colors

const renderPieChart = () => {
  const data = [
    {id: 'stress', value: 45, color: VIBRANT_RED},
    {id: 'neutral', value: 10, color: SKY_BLUE},
    {id: 'happy', value: 20, color: GOLDEN_SUN},
    {id: 'sad', value: 25, color: BRIGHT_BLUE},
  ];

  return (
    <PieChart
      data={data}
      strokeWidth={2}
      strokeColor={WHITE}
      radius={187 / 2}
    />
  );
};

const renderBarChart = () => {
  const barData = [
    {id: 'happy', value: 20, frontColor: GOLDEN_SUN},
    {id: 'neutral', value: 10, frontColor: SKY_BLUE},
    {id: 'sad', value: 25, frontColor: BRIGHT_BLUE},
    {id: 'stress', value: 45, frontColor: VIBRANT_RED},
  ];

  return (
    <View style={styles.barChart}>
      <BarChart
        data={barData}
        barBorderRadius={5}
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

const renderChart = (chartType: string) => (
  <View style={styles.card}>
    {
      chartType === 'pie'
        ? renderPieChart()
        : renderBarChart()
    }
  </View>
)

const Stats = () => {
  const chartType = 'bar'

  return (
    <View style={styles.container}>
      {renderChart(chartType)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#ffffff',
    borderRadius: 4,
    marginHorizontal: 16,
    height: 235,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
  },
  barChart: { width: '100%', height: '100%', marginTop: 45 }
});

export default Stats;
