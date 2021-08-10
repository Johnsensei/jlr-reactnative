import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// Leave the Image import in case I go with the header logo layout.
import { Card, Image } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import { LANGUAGECLASSES } from '../shared/languageclasses';
import { APPS } from '../shared/apps';
import { VIDEOS } from '../shared/videos';

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
        const { navigate } = this.props.navigation;

        function RenderItem ({item}){

            if (item){
        
                if(item.appID){
                    const openGooglePlayStore = () => {
                        Linking.openURL(`market://details?id=${item.appID}`);
                      };
                    
                    const openIOSAppStore = () => {
                        Linking.openURL(`itms-apps://itunes.apple.com/us/app/apple-store/${item.appID}?mt=8`)
                    }
        
                    return(
                        <TouchableOpacity
                            onPress={(Platform.OS ==='ios') ? openIOSAppStore : openGooglePlayStore}>
                            <Card
                                image={item.image}>
                                <Text style={{margin: 10}}>
                                    {item.description}
                                </Text>
                            </Card>
                        </TouchableOpacity>);
                }
        
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
                    <TouchableOpacity onPress={() => navigate("ClassInfo", { languageClassId: item.id})}>
                        <Card
                            image={item.image}>
                            <Text style={{margin: 10}}>
                                {item.description}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                );
            }
            return <View />
        }

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

                {/* <TouchableOpacity
                    onPress={() => navigate("ClassInfo", { languageClassId: 0})}> */}
                    <RenderItem
                        item={this.state.languageClasses.filter(languageClass => languageClass.featured)[0]}
                    />
                {/* </TouchableOpacity> */}
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