import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function WoodPiece({ styles, score, setScore }) {
  //   if (num > 30) {
  //     setNut(true);
  //   }

  function randomNum() {
    let num = Math.floor(Math.random() * 100);
    return num;
  }
  function increaseCounter() {
    //event.persist();
    //console.log(event);
    //console.log(name);
    if (randomNum() > 75) {
      setScore(score + 1);
      console.log(score);
    } else {
      console.log('no nut, try again!');
    }
    //console.log(props.name);
  }

  return (
    <TouchableOpacity
      onPress={increaseCounter}
      style={styles.square}
    ></TouchableOpacity>
  );
}
