import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ServiceItem, EmployeeItem, CustomerItem } from './../listItem';


export default class List extends Component {
    state = {
        services: [],
        employees: [],
        customers: [],
      };

    componentWillMount() {
        //check props -> update state
    }  

    expand = () => {
        // Get details about if service
        // link 
        console.log('expand');
    }

    renderItems = ({ state }) => {
        switch (state) {
            case state.services.length:
                return (
                    <ServiceItem 
                        items={this.state.services}
                        expand={() => this.expand} 
                    />
                );
            case state.employees.length:
                return (
                    <EmployeeItem 
                        items={this.state.employees}
                    />
                );        
            case state.customers.length:
                return (
                    <CustomerItem 
                        items={this.state.customers} 
                    />
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <FlatList 
                style={styles.ListContainer} 
                data={this.state.services}
                renderitem={() => this.renderItems}
            />
        );
    }    

}

const styles = StyleSheet.create({
    ListContainer: {
        width: '100%'
    }
});
