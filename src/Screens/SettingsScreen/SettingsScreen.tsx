import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { CHART_KEY, CHART_TYPE, TEXT_VARIANT } from '../../Constants';
import Typhography from '../../Components/Typhography/Typhography';
import { Colors } from '../../Assets/Colors';
import { saveStorageData } from '../../Utils/Storage.utils';
import { useGetChartType } from '../../Hooks/useGetChartType';

const { PIE, BAR } = CHART_TYPE;
const { TITLE, SUBTITLE } = TEXT_VARIANT;

const handleSelect = (type: CHART_TYPE, setSelectedChart: any) => () => {
  setSelectedChart(type);
};

const renderChartSelector = (selectedChart: string, setSelectedChart: any) => {
  return (
    <Fragment>
      <Typhography text="Default Chart Type" variant={TITLE} />
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={handleSelect(PIE, setSelectedChart)}>
        <View style={styles.radioCircle}>
          {selectedChart === PIE && <View style={styles.selectedCircle} />}
        </View>
        <Typhography text="Pie Chart" variant={SUBTITLE} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={handleSelect(BAR, setSelectedChart)}>
        <View style={styles.radioCircle}>
          {selectedChart === BAR && <View style={styles.selectedCircle} />}
        </View>
        <Typhography text="Bar Chart" variant={SUBTITLE} />
      </TouchableOpacity>
    </Fragment>
  );
};

const onSave = (selectedChart: CHART_TYPE) => async () => {
  try {
    await saveStorageData(CHART_KEY, selectedChart);
  } catch (error) {
    console.error(error);
  }
};

const Settings = () => {
  const { loading, chartType, isFocused } = useGetChartType();
  const [selectedChart, setSelectedChart] = useState(chartType);

  useEffect(() => {
    setSelectedChart(chartType);
  }, [loading, isFocused, chartType]);

  if (loading) {
    return;
  }

  return (
    <View style={styles.container}>
      {renderChartSelector(selectedChart, setSelectedChart)}
      <TouchableOpacity style={styles.button} onPress={onSave(selectedChart)}>
        <Typhography color={Colors.WHITE} text="Save" variant={SUBTITLE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.BLACK,
  },
  button: {
    alignItems: 'center',
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.BRIGHT_BLUE,
    backgroundColor: Colors.BRIGHT_BLUE,
  },
});

export default Settings;
