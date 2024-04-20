import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class NameText extends Component {
    render() {
        return (
            <Text style={styles.textStyle}>Lucy</Text>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        color: '#AE1438',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
    },
});