import React from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import empty from "../../assets/images/Empty.png";

export default function History({ route }) {
  const { book } = route.params || {};
  const handleRemove = () => {
    // Implement your logic to remove the book
  };

  return (
    <View style={styles.container}>
      {book ? (
        <>
          <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
          <View style={styles.details}>
            <Image source={book.src} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.info}>{book.author}</Text>
            <Text style={styles.info}>{book.publisher}</Text>
            <Text style={styles.info}>{book.year}</Text>
            <Text style={styles.info}>{book.isbn}</Text>
          </View>
        </>
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
    paddingTop: 16,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  details: {
    alignItems: 'center',
    width:"95%",
    borderColor:'grey',
    borderRadius:10,
    borderWidth:0.5,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginTop: 150,
  },
  noHistoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
