import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Details({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>HOME</Text>
      </TouchableOpacity>
      <Text>Hiiii DETAILS page</Text>
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
