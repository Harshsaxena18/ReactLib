import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CIssue({ route }) {
  const { book, suid } = route.params;
  const navigation = useNavigation();

  const handleFinalIssue = () => {
    console.log("done issue");
    navigation.navigate('Issued', { book, suid });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Student Record</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{suid.name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>UID:</Text>
          <Text style={styles.value}>{suid.uid}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{suid.address}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Book Details</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>{book.title}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.value}>{book.author}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Publisher:</Text>
          <Text style={styles.value}>{book.publisher}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.value}>{book.year}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>ISBN:</Text>
          <Text style={styles.value}>{book.isbn}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.issueButton} onPress={handleFinalIssue}>
        <Text style={styles.issueButtonText}>Issue Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width:300,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    flex: 1,
  },
  issueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    elevation: 2,
  },
  issueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
