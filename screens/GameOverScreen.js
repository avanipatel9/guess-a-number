import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require('../assets/success.png')}
                    // source={{uri: 'https://p0.piqsels.com/preview/759/45/157/nepal-dingboche-mountain-himalaya.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <BodyText>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds 
                to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                .</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary
    }
});

export default GameOverScreen;