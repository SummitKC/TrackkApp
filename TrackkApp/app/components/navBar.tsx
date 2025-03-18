import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavBarStyles, navBarColors } from '../styles/navBarStyles';

/* 
    Navigation Bar component - This displays four different components [Home, Macros, Workouts and Profile]
    and allows the user to navigate between them.

    @param activeTab: The current active tab 
    @param setActiveTab: The function to set the active tab

    The navbar is wraped in a View component with a flex-row style.
    Each tab is a TouchableOpacity component with an icon and text component.
    The icon is an Ionicon component from @expo/vector-icons with a name, size and color prop.
    On press, the active tab is set to the tab that was pressed.

    Layout of each button is 

    View -> TouchableOpacity -> Icon
                             -> Text

    The styling is done using the useNavBarStyles hook from @navBarStyles.ts
    Uses both classes and styles to style the components.
    As the tailwind was not dynamically changing the width and height dynamicly 
    I switched to using default styles for the components. 
*/
const NavBar = ({activeTab, setActiveTab}: {activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>>}) => {

    const styles = useNavBarStyles();

    return (
        <View className = {styles.containerClass} style={styles.containerStyle}>
            <TouchableOpacity 
                className = {styles.iconClass} style = {styles.iconStyle}
                onPress = {() => setActiveTab('Home')}>

                <Ionicons 
                    name = {activeTab === 'Home' ? 'home' : 'home-outline'}
                    size = {24} 
                    color = {activeTab === 'Home' ? navBarColors.active : navBarColors.inactive} />


                <Text className = {styles.textClass} 
                    style = {{color: activeTab === 'Home' ? navBarColors.active : navBarColors.inactive}}>
                    Home
                </Text>

            </TouchableOpacity>

            <View className = {useNavBarStyles().verticalDivider} />

            <TouchableOpacity 
                className = {styles.iconClass} style = {styles.iconStyle}
                onPress = {() => setActiveTab('Macros')}>

                <Ionicons 
                    name = {activeTab === 'Macros' ? 'bar-chart' : 'bar-chart-outline'}
                    size = {24} 
                    color = {activeTab === 'Macros' ? navBarColors.active : navBarColors.inactive} />

                <Text className = {styles.textClass} style = {{color: activeTab === 'Macros' ? navBarColors.active : navBarColors.inactive}}>
                    Macros
                </Text>

            </TouchableOpacity>

            <View className = {useNavBarStyles().verticalDivider} />

            <TouchableOpacity
                className = {styles.iconClass} style = {styles.iconStyle}
                onPress = {() => setActiveTab('Workouts')}>
                
                <Ionicons 
                    name = {activeTab === 'Workouts' ? 'barbell' : 'barbell-outline'}
                    size = {24} 
                    color = {activeTab === 'Workouts' ? navBarColors.active : navBarColors.inactive} />

                    <Text className = {styles.textClass} style = {{color: activeTab === 'Workouts' ? navBarColors.active : navBarColors.inactive}}>
                        Workouts
                    </Text>

                </TouchableOpacity>
            
            <View className = {useNavBarStyles().verticalDivider} />

            <TouchableOpacity 
                className = {styles.iconClass} style = {styles.iconStyle}
                onPress = {() => setActiveTab('Profile')}>

                <Ionicons 
                name = {activeTab === 'Profile' ? 'person' : 'person-outline'}
                size = {24} 
                color = {activeTab === 'Profile' ? navBarColors.active : navBarColors.inactive} />

                <Text className = {styles.textClass} style = {{color: activeTab === 'Profile' ? navBarColors.active : navBarColors.inactive}}>
                    Profile
                </Text>
            
            </TouchableOpacity>

        </View> 

    );
}

export default NavBar;