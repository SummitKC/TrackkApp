import React from 'react';
import { Text, TextInputBase, View } from 'react-native'; 
import { summaryStyles } from '../styles/homePageStyle';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import FireIcon from '../components/FireIcon';

const HomePage = () => {

  const styles = summaryStyles();

  return (
  <SafeAreaView className={styles.mainClass}>
    <View 
      className={styles.summaryClass} style={styles.summaryStyle}>
        <FireIcon 
          width={180}
          height={180}
          innerFlameColor="#FF3300"
          outerFlameColor="#FFA500"
          strokeColor="#FF0000"
        />
    </View>
  </SafeAreaView>
  );
}

export default HomePage;