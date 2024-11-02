import React from 'react';
import { View } from 'react-native';
import { styles } from './Header.styles';
import Typhography from '../Typhography/Typhography';
import { TEXT_VARIANT } from '../../Constants';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => (
  <View style={styles.container}>
    <Typhography variant={TEXT_VARIANT.HEADER_TITLE} text={title} />
  </View>
);

export default Header;
