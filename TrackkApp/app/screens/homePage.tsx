import React from 'react';
import { Text, TextInputBase, View } from 'react-native'; 
import { summaryStyles } from '../styles/homePageStyle';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const HomePage = () => {

  const styles = summaryStyles();

  return (
  <SafeAreaView className={styles.mainClass}>
    <View 
      className={styles.summaryClass} style={styles.summaryStyle}>
    </View>
  </SafeAreaView>
  );
}

export default HomePage;