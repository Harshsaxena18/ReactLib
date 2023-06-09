import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AdminHome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Side</Text>
      <Text style={styles.relatedText}>Discover a World of Books</Text>
      <Text style={styles.subTitle}>Welcome to Bookish</Text>
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
    marginBottom: 16,
  },
  relatedText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
