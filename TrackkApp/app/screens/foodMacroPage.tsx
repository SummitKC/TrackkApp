import React from 'react';
import { Text, View, Image, StyleSheet, Button, FlatList } from 'react-native'; 
import { macroDiaplay } from '../styles/foodMacroPageStyles';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import FireIcon from '../components/FireIcon';
import ProgressBar from '../components/progressBar';

const MacroPage = () => {

      const style = macroDiaplay();
      return ( 
      <SafeAreaView className={style.mainContainer}>
          <View className = {style.subContainerTop}>
            <View className={style.topContainerLeft}>
              <Text>Calories</Text>
              <FireIcon 
                width={100}
                height={100}
                innerFlameColor="#FF3300"
                outerFlameColor="#FFA500"
                strokeColor="#FF0000"
              />
            </View>
            <View className={style.topContainerRight}>

              <Text> Protein </Text>

              <ProgressBar 
                progress={40}
                height={20}
                fillColor="#2196F3"
                showPercentage={true}/> 

              <Text> Carbs </Text>

              <ProgressBar 
                progress={40}
                height={20}
                fillColor="#2196F3"
                showPercentage={true}/> 

              <Text> Fats </Text>

              <ProgressBar 
                progress={40}
                height={20}
                fillColor="#2196F3"
                showPercentage={true}/> 
            </View>
          </View>
          <View className = {style.subContainerBottom}>
            <View>
              <Text> Food </Text>
              <Button title="Add Food" onPress={() => {}}/>
            </View>
            <View>
              <Text> Today's Meals </Text>
              {/* <FlatList
            data={"TEst"}
            renderItem={renderFoodItem}
            keyExtractor={item => item.id}
            className="w-full px-4"
            showsVerticalScrollIndicator={false}/> */}
          </View>
        </View>
      </SafeAreaView>
    );
}

export default MacroPage;