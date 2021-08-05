import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ClassInfo from './ClassInfoComponent';
import Registration from './RegistrationComponent';
import Contact from './ContactComponent';
import Apps from './AppsComponent';
import Videos from './VideosComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';

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
        Directory: { screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
         },
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

const RegistrationNavigator = createStackNavigator(
    {
        Registration: { screen: Registration }
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
                name='calendar'
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

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../shared/images/JLR_Vert.png')} style={styles.drawerImage} />
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
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
        "Class Registration": { screen: RegistrationNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='calendar'
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
        drawerBackgroundColor: '#7A5C4A',
        contentComponent: CustomDrawerContentComponent
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
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#7A5C4B',
        height: 140,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        marginLeft: 40,
        marginBottom: 10,
        height: 100,
        width: 180
    },
    stackIcon: {
        marginLeft: 10,
        color: 'black',
        fontSize: 24
    }
});

export default Main;