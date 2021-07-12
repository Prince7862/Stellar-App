import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class Home extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                        <Image source={require("../assets/main-icon.png")} style={styles.headImage}></Image>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Space Craft")
                    }>
                        <Text style={styles.routeText}>Space Craft Facts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Star Map")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Daily Picture")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("IssLocation")
                    }>
                        <Text style={styles.routeText}>Iss Location</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage2}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Meteor")
                    }>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage2}></Image>
                    </TouchableOpacity>
                       
                </ImageBackground>
            </View>
        );
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
    },
    routeCard: {
        flex: 0.1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        top: 90
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginRight: -10
    },
    routeText: {
        fontSize: 20,
        fontWeight: "normal",
        marginTop: 15,
        paddingLeft: 10,
        textAlign: 'center',
        color: '#e7469a'
    },
    iconImage: {
        position: "absolute",
        height: 70,
        width: 70,
        resizeMode: "contain",
        right: -20,
        top: -30
    },
    headImage:{
      position: "absolute",
        height: 150,
        width: 200,
        justifyContent: 'center',
        top: 65
    },
    iconImage2: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: -30,
        top: -30
    },
});