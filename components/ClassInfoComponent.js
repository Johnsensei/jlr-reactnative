import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { LANGUAGECLASSES } from "../shared/languageclasses";

function RenderLanguageClass({languageClass}) {
    if (languageClass) {
        return (
            <Card 
                featuredTitle={languageClass.name}
                image={require('./images/class-session.png')}
            >
                <Text style={{margin: 10}}>
                    {languageClass.description}
                </Text>
                <FlatList
                    data={languageClass.content}
                    renderItem={({item}) => <Text>{item}</Text>}
                    />
            </Card>
        );
    }
    return <View />;
}

class ClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageClasses: LANGUAGECLASSES
        };
    }
    static navigationOptions = {
        title: "Class Information"
    }
    render(){
        const languageClassId = this.props.navigation.getParam("languageClassId");
        const languageClass = this.state.languageClasses.filter(languageClass => languageClass.id === languageClassId)[0];

        return (
            <View>
                <RenderLanguageClass languageClass={languageClass} />
                <Text style={{fontSize: 20, margin: 10, alignSelf: 'center'}}>Prerequisites</Text>
                <Text style={{fontSize: 14, margin: 10, alignSelf: 'center'}}>{languageClass.prereqs}</Text>
                {/* TODO: Add a button to register for this class. */}
            </View>
        );
    }
}

export default ClassInfo;