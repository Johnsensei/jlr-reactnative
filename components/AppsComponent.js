import React, { Component } from 'react';
import { FlatList } from 'react-native';
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
                return (
                    <Card
                        image={item.image}>
                        <Text style={{margin: 10}}>
                            {item.description}
                        </Text>
                    </Card>

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