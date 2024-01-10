import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { students } from './StudentsDb';

export default function FullDetails({route,navigation}) {
    const { studentId } = route.params;
    const student = students.find((stud) => stud.studentId === studentId);

    return (
        <View style={styles.container}>
            <Text>Hiiii ALL DETAILS page</Text>
            <Text>{student.studentId}</Text>
            <Text>{student.firstName}</Text>
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