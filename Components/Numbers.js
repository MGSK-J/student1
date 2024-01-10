import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { students } from './StudentsDb';

export default function Numbers({ route }) {
    const { studentId } = route.params;

    let maleCount = 0;
    let femaleCount = 0;

    students.forEach(student => {
        if (student.gender === 'Male') {
            maleCount++;
        } else if (student.gender === 'Female') {
            femaleCount++;
        }
    });

    return (
        <View style={styles.container}>
            <Text>Male Students: {maleCount}</Text>
            <Text>Female Students: {femaleCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
