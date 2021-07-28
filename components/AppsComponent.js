import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
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
        const { navigate } = this.props.navigation;
        const renderAppsItem = ({item}) => {
            if(item){
                return (
                    <Card
                        image={item.image}>
                        <Text style={{margin: 10}}>
                            {item.description}
                        </Text>
                    </Card>

                );
            }
            return <View><Text>No item.</Text></View>
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