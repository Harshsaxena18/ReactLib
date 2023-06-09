import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TextInput, TouchableOpacity, View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import adbanner from "../../assets/images/adb.png";
import { adLog } from '../data/adlog';

export default function AdminLogin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (adLog.find(ad => ad.email === email && ad.password === password)) {
      navigation.reset({
        index: 0,
        routes: [{ name: "AdTabs" }],
      });
    } else {
      Alert.alert(
        'LOGIN',
        'Wrong Credentials.',
        [
          { text: 'OK', onPress: () => console.log('wrong cred admin') },
        ]
      );
    }
  };

  const handleCreate = () => {
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
          <Image source={adbanner} style={styles.logo} />
        </View>
        <Text style={styles.title}>Admin Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType='email-address'
          
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.footerText}>Are you a student? Login here.</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: '7%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginBottom: 10,
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  input: {
    width: '90%',
    height: 40,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 15,
  },
  logo: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 50,
    marginTop: 'auto', 
    marginBottom: 20, 
    borderBottomColor:'#ED7014',
    borderRightColor:'#ED7014',
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
});

