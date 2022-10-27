import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Woodland } from './components/Woodland';
import { Score } from './components/Score';
import { ResetGame } from './components/ResetGame';

export default function App() {
  useEffect(() => {
    if (score > 10) {
      Alert.alert('Congratulations you won!');
      setScore(0);
    } else {
      Alert.alert('Keep going!');
    }
  }, [score]);

  const [score, setScore] = useState(0);
  return (
    <View style={styles.container}>
      <Score score={score} />
      <Woodland score={score} setScore={setScore} />
      <ResetGame setScore={setScore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
