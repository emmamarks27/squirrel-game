import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { WoodlandRow } from './WoodlandRow';
import { useEffect, useState } from 'react';

const screen = Dimensions.get('screen');
const screenHeight = screen.height * 0.5;
const screenWidth = screen.width * 0.9;

export function Woodland({ score, setScore }) {
  return (
    <View style={{ width: screenWidth, height: screenHeight }}>
      <WoodlandRow styles={styles} score={score} setScore={setScore} />
      <WoodlandRow styles={styles} score={score} setScore={setScore} />
      <WoodlandRow styles={styles} score={score} setScore={setScore} />
      <WoodlandRow styles={styles} score={score} setScore={setScore} />
      <WoodlandRow styles={styles} score={score} setScore={setScore} />
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: '20%',
    height: '100%',
    backgroundColor: '#5B3627',
    borderColor: 'black',
    borderWidth: 5,
  },
});
