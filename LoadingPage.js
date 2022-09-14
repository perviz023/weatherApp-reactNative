import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoadingPage() {
    return(
        <View style={styles.container }>
            <Text style={styles.text}>
                Информация о погоде
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA" // /reng elave ele/ 
    },
    text:{
        fontSize: 20,
        color: "a2a2a22", // /reng elave ele/ 
        
    }
})