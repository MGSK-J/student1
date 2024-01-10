import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { students } from './StudentsDb';

export default function List({ navigation }) {
    return (
        <View style={styles.container}>
            {students.map((student, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Numbers', { studentId: student.studentId })}
                >
                    <Text style={styles.text}>{student.studentId}</Text>
                </TouchableOpacity>
            ))}
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
    text: {
        backgroundColor: 'gray',
        fontSize: 14,
        width: 200,
        height: 25,
    },
});
