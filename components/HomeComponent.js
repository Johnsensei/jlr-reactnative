import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Image } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import { LANGUAGECLASSES } from '../shared/languageclasses';
import { APPS } from '../shared/apps';
import { VIDEOS } from '../shared/videos';

function RenderItem ({item}){
    if (item){

        if(item.videoID){
            return(
                <Card style={{height: 100}}>
                    <View>
                        <YoutubePlayer 
                            height={200}
                            play={false}
                            videoId={item.videoID}
                        />
                    </View>
                    <Text style={{margin: 10}}>
                        {item.description}
                    </Text>
            </Card>);
        }
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
                {/* I prefer the layout without the header logo, but leaving the code here for just in case. */}
                {/* <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={require('./images/JLR_Horz.png')} style={{ width: 250, height: 63, margin: 20 }}/>
                </View> */}
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