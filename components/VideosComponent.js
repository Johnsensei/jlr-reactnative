import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import { VIDEOS } from '../shared/videos';

class Videos extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: VIDEOS
        };
    }
    
    static navigationOptions = {
        title: "Videos"
    };
    
    render(){
        const renderVideosItem = ({item}) => {
                return (
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
                    </Card>

                );
        };

        return (
            <FlatList
                data={this.state.videos}
                renderItem={renderVideosItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    };
}

export default Videos;