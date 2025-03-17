import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import LandingPage from './screens/landingPage';
import FirebaseTest from "./utils/FirebaseTest";
import './globals.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <LandingPage />
    </View>
  );
}
