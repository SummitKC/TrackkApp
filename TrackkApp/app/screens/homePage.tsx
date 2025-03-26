import React from 'react';
import { Text, TextInputBase, View } from 'react-native'; 
import { summaryStyles, toDoTodayStyles } from '../styles/homePageStyle';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import FireIcon from '../components/FireIcon';
import ProgressBar from '../components/progressBar';

const HomePage = () => {

  const sumStyles = summaryStyles();
  const toDoStyle = toDoTodayStyles();

  return (
  <SafeAreaView className={sumStyles.mainContainer}>
    <View className={sumStyles.summaryClass} style={sumStyles.summaryStyle}>
        <View className={sumStyles.subContainerLeft}>
          <Text>Calories</Text>
          <FireIcon 
            width={sumStyles.svgStyle.width}
            height={sumStyles.svgStyle.height}
            innerFlameColor="#FF3300"
            outerFlameColor="#FFA500"
            strokeColor="#FF0000"
          />
        </View>
        <View className={sumStyles.subContainerRight}>
          <View className={sumStyles.progressBar} style={sumStyles.progressBarStyle}>
            <ProgressBar 
              progress={40}
              height={20}
              fillColor="#2196F3"
              showPercentage={true}/> 
          </View>
          <View className={sumStyles.progressBar} style={sumStyles.progressBarStyle}>
            <ProgressBar 
              progress={40}
              height={20}
              fillColor="#2196F3"
              showPercentage={true}/> 
          </View>
          <View className={sumStyles.progressBar} style={sumStyles.progressBarStyle}>
            <ProgressBar 
              progress={40}
              height={20}
              fillColor="#2196F3"
              showPercentage={true}/> 
          </View>
        </View>
    </View>
    
    <View className={toDoStyle.mainContainerr}>
      <View className={toDoStyle.section}>
        {/* Section 1 content */}
        <Text> Add Today's Workout (Summary of the week if it fits, if not yesterday) </Text>
    </View>
    <View className={toDoStyle.section}>
        {/* Section 2 content */}
        <Text>Add Snapshot of Today's Meals and goals (Summary of the week if it fits, if not yesterday)</Text>
    </View>
    <View className={toDoStyle.section}>
        {/* Section 3 content */}
        <Text>Steps graph </Text>
    </View>
    <View className={toDoStyle.section}>
        {/* Section 4 content */}
        <Text>Weight Graph</Text>
    </View>
    </View>

  </SafeAreaView>
  );
}

export default HomePage;