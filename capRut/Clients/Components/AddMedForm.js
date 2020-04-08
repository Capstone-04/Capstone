import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import styles from './Style';
import { firestore } from '../../fire';


export default class AddGroupForm extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Medicine',
            //   headerRight: <SignOut navigate={navigation.navigate} />
        };
    };
    state = {
        medname: '',
        directions: '',
        provider: ''
    };

    render() {
        const { name, directions, provider } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={styles.container_signup_form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.edit}>Add Medication</Text>
                    <Text> Name: </Text>
                    <TextInput
                        value={this.state.medname}

                        placeholder="Medicine Name"
                        style={styles.textInput}
                        onChangeText={value => this.setState({ medname: value })}
                    />
                    <Text> Directions: </Text>
                    <TextInput
                        value={this.state.directions}
                        placeholder="directions"
                        style={styles.textInput}
                        onChangeText={value => this.setState({ directions: value })}
                    />
                    <Text> Provider: </Text>
                    <TextInput
                        value={this.state.provider}
                        placeholder="provider"
                        style={styles.textInput}
                        onChangeText={value => this.setState({ provider: value })}
                    />

                    <Button
                        title="Add Medicine"
                        color="purple"
                        onPress={() => {
                            firestore
                                .collection('medications')
                                .add({
                                    medname: this.state.medname,
                                    provider: this.state.provider,
                                    directions: this.state.directions
                                })
                                .then(function(docRef) {
                                    console.log( docRef.id);
                                })
                                .catch(function(error) {
                                    console.error(error);
                                })
                          
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
