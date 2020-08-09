import React from 'react';
import styles from './styles';

import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackground from '../../assets/images/give-classes-background.png';

const giveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  }

  return (
      <View style={styles.container}>
          <ImageBackground resizeMode="contain" source={giveClassesBackground} style={styles.content}>
            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
          </ImageBackground>

          <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>Tudo bem</Text>
          </RectButton>
      </View>
  );
}

export default giveClasses;