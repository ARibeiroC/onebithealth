import React from "react"
import {Text, Pressable, Keyboard} from 'react-native'
import styles from "./styles"


export default function Title(){
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <Text style={styles.title}>ONEBITHEALTH</Text>
        </Pressable>
    );
}