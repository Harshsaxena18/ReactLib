import React, { useState } from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity,Alert,TextInput, ScrollView,} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import bookData from '../data/bookdata';
import { loginD } from '../data/uid';

export default function AdBookList({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [searchstd, setSearchstd] = useState('null');
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [bookToIssue, setBookToIssue] = useState(null);
  const [issueName, setIssueName] = useState('');

  const filteredBooks = bookData.books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.publisher.toLowerCase().includes(searchText.toLowerCase()) ||
      book.isbn.includes(searchText) ||
      book.year.toString().includes(searchText)
  );

  const handleIssueButton = (bookId) => {
    const book = bookData.books.find((book) => book.id === bookId);
    setBookToIssue(book);
    setIsDialogVisible(true);
  };

  const handleDialogSubmit = (stuid) => {
    setIsDialogVisible(false);
    if (stuid) {
      const suid = loginD.find((suid) => suid.uid === stuid);
      if (suid) {
        setIssueName(stuid);
        navigation.navigate('CIssue', { book: bookToIssue, suid });
      } else {
        Alert.alert('Invalid', 'The student roll number is incorrect. Please try again.');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="  Search books by title / author / publisher / year / isbn"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView style={styles.scrollView}>
        {filteredBooks.map((book) => (
          <View key={book.id} style={styles.book}>
            <Image source={book.src} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {book.title}
              </Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.publisher}>{book.publisher}</Text>
              <Text style={styles.year}>{book.year}</Text>
              <Text style={styles.isbn}>{book.isbn}</Text>
              <TouchableOpacity
                style={[styles.issueButton, book.quantity === '0' && styles.issueButtonDisabled]}
                disabled={book.quantity === '0'}
                onPress={() => {
                  Alert.alert('Confirm Issue', 'Are you sure you want to issue this book?', [
                    {
                      text: 'Cancel',
                    },
                    {
                      text: 'Issue',
                      onPress: () => handleIssueButton(book.id),
                    },
                  ]);
                }}
              >
                <Text style={styles.issueButtonText}>
                  {book.quantity === '0' ? 'Out of stock' : 'Issue'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <DialogInput
        isDialogVisible={isDialogVisible}
        title={'UID'}
        message={'Please enter Student Roll Number:'}
        hintInput={'Example: 1'}
        submitInput={(name) => handleDialogSubmit(name)}
        closeDialog={() => setIsDialogVisible(false)}
        textInputProps={{keyboardType:'numeric'}}
        
      />
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
    borderWidth:0.25,
    borderColor:"grey"
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
  issueButton: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
    borderBottomColor:'#ED7014',
    borderRightColor:'#ED7014',
    borderBottomWidth:2.5,
    borderRightWidth:2.5,
    
  },
  issueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  issueButtonDisabled: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});
