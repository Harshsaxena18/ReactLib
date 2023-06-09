import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import profile from "../../assets/images/user.png"
import logout from "../../assets/images/logout.png"

export function Setting() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.profileButton]}>
          <View style={styles.buttonContent}>
            <Image source={profile} style={styles.logo} />
            <Text style={styles.buttonText}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Welcome' }],
            });
          }}
        >
          <View style={styles.buttonContent}>
            <Image source={logout} style={styles.logo} />
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const buttonWidth = (width - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    width: buttonWidth,
    height: buttonWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    backgroundColor: '#fff',
  },
  logoutButton: {
    backgroundColor: '#fff',
  },
  profileButton: {
    backgroundColor: '#fff',
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 10,
  },
});
