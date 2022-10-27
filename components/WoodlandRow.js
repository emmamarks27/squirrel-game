import { View, StyleSheet } from 'react-native';
import { WoodPiece } from './WoodPiece';

export function WoodlandRow({ score, setScore }) {
  return (
    <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
      <WoodPiece styles={styles} score={score} setScore={setScore} />
      <WoodPiece styles={styles} score={score} setScore={setScore} />
      <WoodPiece styles={styles} score={score} setScore={setScore} />
      <WoodPiece styles={styles} score={score} setScore={setScore} />
      <WoodPiece styles={styles} score={score} setScore={setScore} />
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
