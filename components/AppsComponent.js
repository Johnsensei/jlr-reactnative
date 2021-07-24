import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, FlatList } from 'react-native-elements';
import { APPS } from '../shared/apps';

function RenderItem ({item}){
    if (item){
        if(item.description){item.description=item.description}
        else{item.description="No description"}
        return(
            <Card
                
                image={require('./images/hb-placeholder.png')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View><Text>No item.</Text></View>
}

class Apps extends Component {
    constructor(props){
        super(props);
        this.state = {
            apps: APPS
        }
    }

    static navigationOptions = {
        title: "Apps"
    }

    render(){
        return(
        //     <FlatList
        //     data={this.state.languageClasses}
        //     renderItem={RenderItem}
        //     keyExtractor={item => item.id.toString()}
        // />
        <RenderItem 
            item={this.state.apps}
        />
        );
    }
}

export default Apps;