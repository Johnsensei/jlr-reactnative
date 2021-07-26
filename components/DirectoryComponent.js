import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
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
                <TouchableOpacity
                    onPress={() => navigate("ClassInfo", { languageClassId: item.id})}>
                    <Card
                        image={item.image}>
                        <Text style={{margin: 10}}>
                            {item.description}
                        </Text>
                    </Card>
                </TouchableOpacity>
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