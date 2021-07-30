import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { LANGUAGECLASSES } from '../shared/languageclasses';
import { APPS } from '../shared/apps';
import { VIDEOS } from '../shared/videos';

function RenderItem ({item}){
    if (item){
        return(
            <Card
                image={item.image}
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
                {/* TODO: Add JLR banner logo to the top. */}
                <RenderItem
                    item={this.state.languageClasses.filter(languageClass => languageClass.featured)[0]}
                />
                {/* TODO: Make clickable to open the app store. */}
                <RenderItem
                    item={this.state.apps.filter(app => app.featured)[0]}
                />
                {/* TODO: Link to and play a YouTube video. */}
                <RenderItem
                    item={this.state.videos.filter(video => video.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;