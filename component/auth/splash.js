import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground ,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from "../../assets/images/bg.png"

export default function SplashScreen() {
  const navigation = useNavigation();

  const handleAdmin = () => {
    navigation.navigate('AdLogin');
  };

  const handleUser = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={bg} style={styles.logo} />   
     
      <Text style={[styles.title, ]}>Bookish</Text>
      <Text style={[styles.tag, ]}>Empowering Libraries and Readers through Technology</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.setButtonwhite]} onPress={handleAdmin}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.setButtonOrange]} onPress={handleUser}>
          <Text style={styles.buttonText1}>Student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 40,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonContainer: {
    marginBottom: 50,
    alignItems: 'center',
    flexDirection:"row",

  },
  title: {
    fontSize: 30,
    marginTop:50,
    fontWeight:600,
    textAlign:'center',
    
    
  },
  tag: {
    fontSize: 16,
    marginTop:33,
    textAlign:'center',
    fontWeight:500,
   
    
  },
  setButtonwhite: {
    backgroundColor: 'white',
    borderColor: 'orange',
    borderBottomColor:'#ED7014',
    borderRightColor:'#ED7014',   
  },
  setButtonOrange: {
    backgroundColor: 'orange',
    borderBottomColor:'#ED7014',
    borderRightColor:'#ED7014',     
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "40%",
    margin: 10,
    borderBottomWidth:2.5,
    borderRightWidth:2.5,
  },
  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  normal: {
    fontSize: 18,
    fontWeight: 'regular',
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 24,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
