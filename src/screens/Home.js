import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Loader')}>
        <Text style={styles.btnText}>Loader</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  btn: {
    width: '100%',
    height: 100,
    backgroundColor: '#338AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
