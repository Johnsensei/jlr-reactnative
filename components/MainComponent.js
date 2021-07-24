import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ClassInfo from './ClassInfoComponent';
import Contact from './ContactComponent';
import Apps from './AppsComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        ClassInfo: { screen: ClassInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            }
        }
    }
);

const AppsNavigator = createStackNavigator(
    {
        Apps: { screen: Apps }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        "Home": { screen: HomeNavigator },
        "Classes": { screen: DirectoryNavigator },
        "Apps": { screen: AppsNavigator },
        "Contact Us": { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#7A5C4A'
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;