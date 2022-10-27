import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { WoodPiece } from './WoodPiece';
import { Col, Row, Grid } from 'react-native-easy-grid';

const screen = Dimensions.get('screen');
const screenHeight = screen.height * 0.5;
const screenWidth = screen.width * 0.9;

export function Woodland() {
  return (
    <View style={{ width: screenWidth, height: screenHeight }}>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
      </View>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
      </View>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
      </View>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
      </View>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
        <WoodPiece styles={styles} />
      </View>
      <Image
        source={{
          uri: `https://i.natgeofe.com/k/ff49e0e1-20b6-4c4b-84c8-4ad196e312e4/eastern-gray-squirrel-closeup_2x3.jpg`,
        }}
        style={{ width: 100, height: 100, color: 'black' }}
      />
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
