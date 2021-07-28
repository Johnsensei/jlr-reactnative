import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-elements';
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
                data={this.state.videos}
                renderItem={renderVideosItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    };
}

export default Videos;