import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export function ResetGame({ setScore }) {
  return (
    <TouchableOpacity
      title='Reset the game'
      style={styles.button}
      onPress={() => setScore(0)}
    >
      <Text style={{ fontSize: 20, color: 'white' }}>Reset The Game!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#5B3627',
    color: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
