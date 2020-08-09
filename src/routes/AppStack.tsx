import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Landing from '../pages/Landing';
import giveClasses from '../pages/giveClasses';
import StudyTabs from './StudyTabs';

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Landing" component={Landing}/>
            <Screen name="GiveClasses" component={giveClasses}/>
            <Screen name="Study" component={StudyTabs}/>
        </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;