import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import GameScreen from './GameScreen';
import DefaultStyles from '../constants/default-styles';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>The Game is Over!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default GameOverScreen;