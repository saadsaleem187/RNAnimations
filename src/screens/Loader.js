import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const SIZE = 100.0;

const Loader = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {toValue: 1, useNativeDriver: true}),
          Animated.spring(progress, {toValue: 0.5, useNativeDriver: true}),
        ]),
        Animated.sequence([
          Animated.spring(scale, {toValue: 2, useNativeDriver: true}),
          Animated.spring(scale, {toValue: 1, useNativeDriver: true}),
        ]),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: progress,
            transform: [
              {scale},
              {
                rotate: progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: [`${Math.PI}deg`, `${2 * Math.PI}deg`],
                }),
              },
            ],
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
  },
});

export default Loader;
