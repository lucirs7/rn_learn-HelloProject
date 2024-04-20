import React from "react";
import { Text, StyleSheet } from "react-native";

interface NameTextProps {
    nameValue: string;
}

export const NameText: React.FC<NameTextProps> = ({ nameValue }) => {
    return (
        <Text style={styles.textStyle}>{nameValue}</Text>
    );
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