import { Text } from 'react-native';

export function Score({ score }) {
  return <Text style={{ fontSize: 30 }}>The score is {score}</Text>;
}
