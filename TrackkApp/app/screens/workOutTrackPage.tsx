import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView} from 'react-native'; 
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { workOutTrackPageStyles } from '../styles/workOutTrackPageStyles';

const WorkoutsPage = () => {

    const style = workOutTrackPageStyles();

      return (
        <SafeAreaView className={style.mainContainer}>
          <View className={style.subContainerTop}>
            <Text> Weekly Workout Summary</Text>
          </View>

          <View className={style.subContainerBottom}>
            <Text> Today's Workouts </Text>
            <ScrollView>
              <Text> Workout List </Text>
              {/* <FlatList
                data={workouts}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id}
              /> */}
            </ScrollView>
          </View>
        </SafeAreaView>
    );
}

export default WorkoutsPage;