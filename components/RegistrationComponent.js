import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet,
    Picker, Button, TextInput } from 'react-native';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedClass: "",
            selectedTerm: "",
            studentName: "",
            studentAge: "",
            studentEmail: ""
        };
    }

    static navigationOptions = {
        title: 'Register for a Class'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            selectedClass: "",
            selectedTerm: "",
            studentName: "",
            studentAge: "",
            studentEmail: ""  
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Select a Class</Text>
                </View>
                <View style={styles.formRow}>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.selectedClass}
                        onValueChange={itemValue => this.setState({selectedClass: itemValue})}>
                        <Picker.Item label='Choose one...' value="Need to choose a class." />
                        <Picker.Item label='Japanese 1.0' value='Japanese 1.0' />
                        <Picker.Item label='Japanese 1.1' value='Japanese 1.1' />
                        <Picker.Item label='Japanese 1.2' value='Japanese 1.2' />
                        <Picker.Item label='Japanese 1.3' value='Japanese 1.3' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Select a Term</Text>
                </View>
                <View style={styles.formRow}>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.selectedTerm}
                        onValueChange={itemValue => this.setState({selectedTerm: itemValue})}>
                        <Picker.Item label='Choose one...' value="Need to choose a term." />
                        <Picker.Item label='Spring 2022' value='Spring 2022' />
                        <Picker.Item label='Summer 2022' value='Summer 2022' />
                        <Picker.Item label='Fall 2022' value='Fall 2022' />
                    </Picker>
                </View>

                {/* TODO: Start here on adding fields for student name and age. */}
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Student Name</Text>
                </View>
                <View style={styles.formRow}>
                    <TextInput 
                        style={styles.formItem}
                        selectedValue={this.state.studentName}
                        onChangeText={itemValue => this.setState({studentName: itemValue})}
                        placeholder="First Last"/>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Student Age</Text>
                </View>
                <View style={styles.formRow}>
                    <TextInput 
                        style={styles.formItem}
                        selectedValue={this.state.studentAge}
                        onChangeText={itemValue => this.setState({studentAge: itemValue})}
                        placeholder="Must be 18 or older to register."
                        keyboardType="numeric"/>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Student Email</Text>
                </View>
                <View style={styles.formRow}>
                    <TextInput 
                        style={styles.formItem}
                        selectedValue={this.state.studentEmail}
                        onChangeText={itemValue => this.setState({studentEmail: itemValue})}
                        placeholder="example@domain.com"/>
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Sign Up'
                        color='#B9936D'
                        accessibilityLabel='Tap me to register for a class.'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default Registration;