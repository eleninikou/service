import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const InputField = props => (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.placeholder}</Text>
            <TextInput
                style={styles.input}
                value={props.value}
                onChangeText={props.handleOnChange} 
                secureTextEntry={props.password}
                autoCorrect={false}
            />
        </View>
    );

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',  
      height: 40,
      width: 300,
      borderRadius: 5,
      borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 5,
      alignContent: 'center',
    },
    label: {
        alignSelf: 'center',
        paddingLeft: 15,
        color: 'grey'
    },
    input: {
        width: '100%',
        paddingLeft: 15,
    }
  });

export default InputField;
