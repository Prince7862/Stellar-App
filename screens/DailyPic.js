import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class DailyPic extends Component {
  constructor(props) {
        super(props);
        this.state = {
            apod: {},
        };
    }

    componentDidMount() {
      this.getApod()
    }

    getApod = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=muYpP7WcHwjhnb6TacUHh0NFPHD1eHjrQnaFMkFX")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }
    render() {
        return (
          
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground
            source={require('../assets/stars.gif')} style={styles.backgroundImage}>
            <ScrollView>
            <Text style={styles.routeText}>Astronomy Picture of The Day</Text>
            <Text style={styles.titleText}>{this.state.apod.title}</Text>
            <Image source={{uri: this.state.apod.url}} style={{ width: '100%', height: 300, marginTop: 15, marginBottom: 15, marginRight: 10, justifyContent: 'center' }}></Image>
            <View style={styles.iconImage}>
            </View>
            <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
            </ScrollView>
            </ImageBackground>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : -10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleText: {
        fontSize: 25,
        fontWeight: "normal",
        color: "white",
        textAlign: 'center'
    },
    routeText: {
        fontSize: 50,
        fontWeight: "normal",
        marginTop: 11,
        paddingLeft: 10,
        textAlign: 'center',
        color: '#e7469a'
    },
    iconImage: {
    },
    explanationText:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
    }
});