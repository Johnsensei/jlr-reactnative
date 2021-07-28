import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
                {/* TODO: add the array of topics learned. */}
                {/* TODO: add the prerequisites */}
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
        return <RenderLanguageClass languageClass={languageClass} />;
    }
}

export default ClassInfo;