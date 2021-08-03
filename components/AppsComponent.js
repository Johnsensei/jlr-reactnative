import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { APPS } from '../shared/apps';

class Apps extends Component {
    constructor(props){
        super(props);
        this.state = {
            apps: APPS
        };
    }
    
    static navigationOptions = {
        title: "Apps"
    };

    render(){
        

        const renderAppsItem = ({item}) => {
            const openGooglePlayStore = () => {
                Linking.openURL(`market://details?id=${item.appID}`);
              };
            
            const openIOSAppStore = () => {
                Linking.openURL(`itms-apps://itunes.apple.com/us/app/apple-store/${item.appID}?mt=8`)
            }
            
            return (
                <TouchableOpacity
                    onPress={(Platform.OS ==='ios') ? openIOSAppStore : openGooglePlayStore}>
                    <Card
                        image={item.image}>
                        <Text style={{margin: 10}}>
                            {item.description}
                        </Text>
                    </Card>
                </TouchableOpacity>

            );
        };

        return (
            <FlatList
                data={this.state.apps}
                renderItem={renderAppsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    };
}

export default Apps;