import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LANGUAGECLASSES } from '../shared/languageclasses';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            languageClasses: LANGUAGECLASSES
        };
    }
    
    static navigationOptions = {
        title: "Class Directory"
    };
    
    render(){
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate("ClassInfo", { languageClassId: item.id})}
                    leftAvatar={{ source: require('./images/class-session.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.languageClasses}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    };
}

export default Directory;