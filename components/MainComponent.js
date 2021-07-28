import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ClassInfo from './ClassInfoComponent';
import Contact from './ContactComponent';
import Apps from './AppsComponent';
import Videos from './VideosComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        ClassInfo: { screen: ClassInfo }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            },
            headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AppsNavigator = createStackNavigator(
    {
        Apps: { screen: Apps }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            },
            headerLeft: <Icon
                name='mobile'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const VideosNavigator = createStackNavigator(
    {
        Videos: { screen: Videos }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            },
            headerLeft: <Icon
                name='film'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#E6DFD7'
            },
            headerTintColor: '#B9936D',
            headerTitleStyle: {
                color: '#B9936D'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        "Home": { screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } },
        "Classes": { screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } },
        "Apps": { screen: AppsNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='mobile'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } },
        "Videos": { screen: VideosNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='film'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } },
        "Contact Us": { screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } }
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

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: 'black',
        fontSize: 24
    }
});

export default Main;