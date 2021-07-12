import React, { Component } from "react";
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
    Dimensions
} from "react-native";
import axios from "axios";

export default class SpaceCraft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: {},
        };
    }
    componentDidMount() {
        this.getSpaceCrafts();
    }
    getSpaceCrafts = () => {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response =>{
          this.setState({ aircrafts: response.data.results })
          console.log(response.data.results)
        })
        .catch(error =>{
          console.log(error.message)
        })
    }

    renderItem = ({item}) =>{
      return(
        <View style= {{borderWidth: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 10}}>
        <Image source={{uri: item.agency.image_url}} style={{ width: '100%', height: 400, marginTop: 15, marginBottom: 15, marginRight: 10 }}></Image>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#e7469a'}}>{item.name}</Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{item.agency.name}</Text>
        <Text style={{color: 'white',fontWeight: 'bold',
        marginBottom: 10}}>DESCRIPTION: {item.agency.description}</Text>
        </View>
      )
    }

    render(){
      return(
        
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
    <View styles={{flex: 0.25}}>
    <Text style={styles.titleText}> Space Crafts </Text>
    </View>
    <View styles={{flex: 0.75}}>
    <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.aircrafts}
    renderItem={this.renderItem}/>
    </View>
    </ImageBackground>
    </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginRight: -10,
        textAlign: 'center'
    }
});