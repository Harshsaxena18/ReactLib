import React, { useState } from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,Alert,Button,TextInput,ScrollView,} from 'react-native';
import bookData from '../data/bookdata';

export default function BookList({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const filteredBooks = bookData.books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.publisher.toLowerCase().includes(searchText.toLowerCase()) ||
      book.isbn.includes(searchText) ||
      book.year.toString().includes(searchText)
  );

  const handleReserveButton = (bookId) => {
    console.log(`Order book  ${bookId}`);
    const book = bookData.books.find((book) => book.id === bookId);
    navigation.navigate('Reservation', { book });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="  Search books by title, author, publisher, year, isbn"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView style={styles.scrollView}>
        {filteredBooks.map((book) => (
          <View key={book.id} style={styles.book}>
            <Image source={book.src} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{book.title}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.publisher}>{book.publisher}</Text>
              <Text style={styles.year}>{book.year}</Text>
              <Text style={styles.isbn}>{book.isbn}</Text>
              <TouchableOpacity
                style={[styles.reserveButton, book.quantity === '0' && styles.reserveButtonDisabled]}
                disabled={book.quantity === '0'}
                onPress={() => {
                  Alert.alert(
                    'Confirm Reserve',
                    'Are you sure you want to reserve this book?',
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                      {
                        text: 'Reserve',
                        onPress: () => handleReserveButton(book.id),
                      },
                    ],
                    { cancelable: true }
                  );
                }}
              >
                <Text style={styles.bookButtonText}>{book.quantity === '0' ? 'Out of stock' : 'Reserve'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBar: {
    height: 40,
    width: '90%',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 16,
  },
  book: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0.25,
    borderColor: 'grey',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    width: 200,
  },
  author: {
    fontSize: 16,
    marginBottom: 2,
    width: 200,
  },
  publisher: {
    fontSize: 16,
    marginBottom: 2,
  },
  year: {
    fontSize: 16,
    marginBottom: 2,
  },
  isbn: {
    fontSize: 16,
    marginBottom: 2,
  },
  reserveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
    borderBottomColor: '#028A0F',
    borderRightColor: '#028A0F',
    borderBottomWidth: 2.5,
    borderRightWidth: 2.5,
  },
  reserveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  reserveButtonDisabled: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});
