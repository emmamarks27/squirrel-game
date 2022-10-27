# The Squirrel Game

This game was created in react native.

### Code Snippet

- Used the Dimensions component from react native.
- This retrieves the dimensions of the screen, and I used this to set the dimensions of the grid.

```
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { WoodPiece } from './WoodPiece';
import { Col, Row, Grid } from 'react-native-easy-grid';

const screen = Dimensions.get('screen');
const screenHeight = screen.height * 0.5;
const screenWidth = screen.width * 0.9;

```

- I could then set the container for the grid to the dimensions, and set each individual sqaure to be a proportion of those dimensions to create the grid.

```
<View style={{ width: screenWidth, height: screenHeight }}>
      <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>

```
