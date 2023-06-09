import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TextInput, TouchableOpacity, View, Image, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import regis from "../../assets/images/regis.png"
import { adLog } from '../data/adlog';

export default function RegistrationScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    if (!name || !email || !password) {
      Alert.alert(
        'Registration Error',
        'Please fill in all the fields.',
        [{ text: 'OK', onPress: () => console.log('empty fields error') }]
      );
      return;
    }

    const existingUser = adLog.find((user) => user.email === email);
    if (existingUser) {
      Alert.alert(
        'Registration Error',
        'This email is already registered.',
        [{ text: 'OK', onPress: () => console.log('existing email error') }]
      );
      return;
    }

    Alert.alert('Done', 'Registered.');

    const newUser = {
      email: email,
      password: password,
    };
    console.log('New User:', newUser);

    adLog.push(newUser);

    navigation.navigate('Login');
  };

  const handlealready = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
        <Image source={regis} style={styles.logo} />
      </View>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={[styles.input, {color:"black"}]}
          placeholder="Name"
          autoCapitalize="words"
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, {color:"black"}]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, {color:"black"}]}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text onPress={handlealready} style={styles.footerText}>
          Already have an account? Login here.
        </Text>
      <ExpoStatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginBottom:10,
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 40,
    textAlign: 'left',
    alignSelf: 'flex-start', 
    marginLeft: '7%',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    color: '#D9D9D9',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#FEC20C',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 50,
    marginTop: 'auto', 
    marginBottom: 20, 
    borderBottomColor:'#FCA510',
    borderRightColor:'#FCA510',
    borderBottomWidth:2.5,
    borderRightWidth:2.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  footerText: {
    color: '#000',
    marginTop: 10,
    textDecorationLine:"underline",
  },
  logo: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
