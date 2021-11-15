import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet,
    Picker, Button, TextInput, Modal } from 'react-native';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {

            selectedClass: this.props.navigation.getParam("selectedClass"),
            selectedTerm: "",
            studentName: "",
            studentAge: "",
            studentEmail: "",
            showModal: false
        };
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    static navigationOptions = {
        title: 'Register for a Class'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            selectedClass: "",
            selectedTerm: "",
            studentName: "",
            studentAge: "",
            studentEmail: ""  
        });
    }

    // TODO: Add form validation.
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

                
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Student Name</Text>
                </View>
                <View style={styles.formRow}>
                    <TextInput 
                        style={styles.formItem}
                        value={this.state.studentName}
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
                        value={this.state.studentAge}
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
                        value={this.state.studentEmail}
                        selectedValue={this.state.studentEmail}
                        onChangeText={itemValue => this.setState({studentEmail: itemValue})}
                        placeholder="example@domain.com"/>
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.toggleModal()}
                        title='Sign Up'
                        color='#B9936D'
                        accessibilityLabel='Tap me to register for a class.'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Student Registration Details</Text>
                        <Text style={styles.modalText}>
                            Student Name: {this.state.studentName}
                        </Text>
                        <Text style={styles.modalText}>
                            Student Age: {this.state.studentAge}
                        </Text>
                        <Text style={styles.modalText}>
                            Student Email: {this.state.studentEmail}
                        </Text>
                        <Text style={styles.modalText}>
                            Class: {this.state.selectedClass}
                        </Text>
                        <Text style={styles.modalText}>
                            Term: {this.state.selectedTerm}
                        </Text>
                        
                        <Button
                            onPress={() => {
                                this.handleReservation();
                                this.resetForm();
                            }}
                            color='#B9936D'
                            title='Tap Here to Complete Registration'
                        />
                        <View><Text></Text></View>
                        <Button
                            onPress={() => {
                                this.resetForm();
                                this.toggleModal();
                            }}
                            color='#B9936D'
                            title='Start Over'
                        />
                    </View>
                </Modal>
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
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#B9936D',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Registration;