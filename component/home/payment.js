import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import nofine from "../../assets/images/nofine.png"

const Payment = () => {
  return (
    <View style={styles.container}>
      <Image source={nofine} style={styles.logo} />
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 16,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode:'cover',
    marginTop:150,
    
  },
});

