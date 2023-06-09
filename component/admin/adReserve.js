import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import empty from "../../assets/images/Empty.png";

export default function Adminreserve({ route }) {
  const { book, suid } = route.params || {};

  return (
    <View style={styles.container}>
      {book ? (
        <View style={styles.bookContainer}>
          <View style={styles.details}>
            <Text style={styles.info}>UID:  {suid.uid}</Text>
            <Text style={styles.info}>Student:  {suid.name}</Text>
            <Text style={styles.info}>TITLE: {book.title}</Text>
            <Text style={styles.info}>ISBN: {book.isbn}</Text>
          </View>
        </View>
      ) : (
        <Image source={empty} style={styles.logo} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  bookContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  details: {
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginTop: 150,
  },
});
