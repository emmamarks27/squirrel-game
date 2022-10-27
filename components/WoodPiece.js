import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function WoodPiece({ styles }) {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <TouchableOpacity
      onPress={increaseCounter}
      style={styles.square}
    ></TouchableOpacity>
  );
}
