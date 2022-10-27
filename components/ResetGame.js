import { Button } from 'react-native';

export function ResetGame({ setScore }) {
  return (
    <Button
      title='Reset the game'
      color='#f194ff'
      onPress={() => setScore(0)}
    />
  );
}
