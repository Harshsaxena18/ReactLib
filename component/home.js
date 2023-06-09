import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { useNavigation,  } from '@react-navigation/native';


export function HomeScreen() {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library Management System </Text>
      <Text style={styles.title}>"BOOKISH " </Text>
      
      
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  Lbutton: {
    marginTop: 20,
  },
});
