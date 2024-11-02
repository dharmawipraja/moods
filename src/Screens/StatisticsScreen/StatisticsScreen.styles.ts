import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    marginHorizontal: 16,
    gap: 24,
  },
  emptyDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartCard: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 235,
    borderRadius: 4,
  },
  barChart: {
    width: '100%',
    height: '100%',
    marginTop: '15%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  },
  dataCard: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.44 - 2,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  topLabel: {
    height: 40,
    width: 20,
  },
});
