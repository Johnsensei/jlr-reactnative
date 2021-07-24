import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: "Contact Us"
    }

    render(){
        return(
            <ScrollView>
                <Card 
                title="Contact Information"
                wrapperStyle={{margin: 20}}
            >
                    <Text>1 JLR Way</Text>
                    <Text>Nashville, TN 37211</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-615-555-1234</Text>
                    <Text style={{marginBottom: 10}}>Email: classes@japaneselanguageroom.com</Text>
            </Card>
            </ScrollView>
        );
    }
}

export default Contact;