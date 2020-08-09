import React from 'react';
import styles from './styles';

import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
    </View>
  );
}

export default Favorites;