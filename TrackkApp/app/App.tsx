import React, { useState } from 'react';
import { View } from 'react-native';
import HomePage from './screens/homePage';
import NavBar from './components/navBar';
import FirebaseTest from "./utils/FirebaseTest";
import ProfilePage from './screens/profilePage';
import MacroPage from './screens/foodMacroPage';
import WorkoutsPage from './screens/workOutTrackPage';
import './globals.css';

/* 
    Renders the main app component. This component contains the NavBar and the main screen.
    The main screen is rendered based on the active tab state.
    The active tab state is passed to the NavBar component as a prop.
    The active tab state is updated by the NavBar component when a tab is pressed.
    The components, screens and css are imported from their respective files.

    @param activeTab: The current active tab
    @param setActiveTab: The function to set the active tab 
    @param renderScreen: A function that returns the screen based on the active tab state

    Main view is wrapped in a View.
    The NavBar component is rendered with the active tab and setActiveTab props.
    The renderScreen function is called to render the main screen based on the active tab state.

*/


export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'Macros': //Macros
        return < MacroPage/>;
      case 'Profile': //Profile
        return <ProfilePage />;
      case 'Workouts': //Workouts
        return <WorkoutsPage />;  
      default:
        return <HomePage />;
    }
  }


    return (
      <View className="flex-1 bg-[#0F1117]">
        <View className="flex-1" style={{flex: 1}}>
          {renderScreen()}
        </View>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
    );
}
