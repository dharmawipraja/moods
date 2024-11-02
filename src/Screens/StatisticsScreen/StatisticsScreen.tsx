import { View, Text, Dimensions } from 'react-native';
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
    <View style={{ alignItems: 'center', width: '100%', backgroundColor: 'green' }}>
      <PieChart
        data={data}
        strokeWidth={2}
        strokeColor={WHITE}
      />
    </View>
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
    <View style={{ alignItems: 'center', width: '100%', backgroundColor: 'green' }}>
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

const Stats = () => {
  return (
    <View style={{ alignItems: 'center', gap: 10, paddingHorizontal: 16 }}>
      {renderPieChart()}
      {renderBarChart()}
    </View>
  );
};

export default Stats;
