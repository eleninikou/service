import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const ServiceItem = props => (
    <TouchableWithoutFeedback onPress={props.expand}>
        <View style={styles.ServiceItem}>
            <Text>{props.service}</Text>
        </View>    
    </TouchableWithoutFeedback>
);


const styles = StyleSheet.create({
    ServiceItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee'
    }
});

export default ServiceItem;
