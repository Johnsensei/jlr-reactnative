import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { LANGUAGECLASSES } from '../shared/languageclasses';
import { APPS } from '../shared/apps';
import { VIDEOS } from '../shared/videos';

function RenderItem ({item}){
    if (item){
        return(
            <Card
                featuredTitle={item.name}
                image={require('./images/class-session.png')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            languageClasses: LANGUAGECLASSES,
            apps: APPS,
            videos: VIDEOS
        };
    }

    static navigationOptions = {
        title: "Home"
    }

    render(){
        return(
            <ScrollView>
                <RenderItem
                    item={this.state.languageClasses.filter(languageClass => languageClass.featured)[0]}
                />
                <RenderItem
                    item={this.state.apps.filter(app => app.featured)[0]}
                />
                <RenderItem
                    item={this.state.videos.filter(video => video.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;