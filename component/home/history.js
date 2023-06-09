import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import empty from "../../assets/images/Empty.png";

export default function History({ route }) {
  const { book } = route.params || {};
  const [remainingTime, setRemainingTime] = useState(86400);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [book]);

  useEffect(() => {
    if (remainingTime === 0) {
      setExpired(true);
    }
  }, [remainingTime]);

  useEffect(() => {
    setRemainingTime(86400);
    setExpired(false);
  }, [book]);

  const formatRemainingTime = (remainingTime) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <Text style={styles.timer}>
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {expired ? (
        <Image source={empty} style={styles.logo} />
      ) : (
        <>
          {book ? (
            <>
              <View style={styles.details}>
                <Image source={book.src} style={styles.image} />
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.info}>{book.author}</Text>
                <Text style={styles.info}>{book.publisher}</Text>
                <Text style={styles.info}>{book.year}</Text>
                <Text style={styles.info}>{book.isbn}</Text>
                <Text style={styles.info}>Reservation expires in: {formatRemainingTime(remainingTime)}</Text>
              </View>
            </>
          ) : (
            <Image source={empty} style={styles.logo} />
          )}
        </>
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
    width: '95%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 0.5,
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
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    color: '#FF0000', 
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginTop: 150,
  },
});
