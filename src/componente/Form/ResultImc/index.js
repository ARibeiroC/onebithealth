import React from "react"
import {View, Text} from 'react-native'
import styles from "./styles"


export default function ResultImc(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textMessageResult}>{props.messageResultImc}</Text>
            <Text style={styles.imcResult}>{props.resultImc}</Text>
            <Text style={styles.textResult}>{props.texto}</Text>

        </View>
    );
}