import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Fragment, useState } from 'react';
import { CHART_KEY, CHART_TYPE, TEXT_VARIANT } from '../../Constants';
import Typhography from '../../Components/Typhography/Typhography';
import { Colors } from '../../Assets/Colors';
import { saveStorageData } from '../../Utils/Storage.utils';

const { PIE, BAR } = CHART_TYPE;
const { TITLE, SUBTITLE } = TEXT_VARIANT;

const renderChartSelector = (selectedChart: string, setSelectedChart: any) => {
  return (
    <Fragment>
      <Typhography text="Default Chart Type" variant={TITLE} />
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setSelectedChart(PIE)}>
        <View style={styles.radioCircle}>
          {selectedChart === PIE && <View style={styles.selectedCircle} />}
        </View>
        <Typhography text="Pie Chart" variant={SUBTITLE} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setSelectedChart(BAR)}>
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
  const [selectedChart, setSelectedChart] = useState(PIE);

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
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
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
