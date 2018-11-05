import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const BasicButton = props => (
        <View style={styles.button}>
            <Button
                color='black'
                title={props.text}
                onPress={props.action}
            />
        </View>
    );

const styles = StyleSheet.create({
    button: {
        width: 300,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1
    }
  });

export default BasicButton;
