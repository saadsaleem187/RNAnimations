import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const BackArrow = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 50, left: 10}}
      onPress={() => navigation.goBack()}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackArrow;
