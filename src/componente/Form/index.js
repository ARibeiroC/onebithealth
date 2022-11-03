import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Alert, Vibration, Share, KeyboardAvoidingView, Keyboard, Pressable} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import ResultImc from "./ResultImc";
import styles from './styles'

export default function Form(){
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState('')
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState('Calcular IMC')
    const [textInfoImc, setTextInfoImc] = useState('')
    const [shouldShow, setShouldShow] = useState(false)
    var result = 0
    const app = 'https://github.com/ARibeiroC'

    function errorMessage(){
        Alert.alert(
            'Atenção','Campos vazios, preencha-os antes de calcular',[
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )
        Vibration.vibrate()
        setShouldShow(null)
    }

    function resultValurImc(){
        let alturaFormat = altura.replace(',','.')
        result = (peso/(alturaFormat*alturaFormat)).toFixed(2)
        return result
    }

    function validationIMC(){
        if (altura != null && peso != null){
            setImc(resultValurImc())
            if (resultValurImc() <= 18.5){
                setTextInfoImc('Abaixo do Peso')
            }else if (resultValurImc() > 18.5 && resultValurImc() <= 25) {
                setTextInfoImc('Peso ideal')
            }else if (resultValurImc() > 25 && resultValurImc() <= 30){
                setTextInfoImc('Levemente acima do peso')
            }else if (resultValurImc() > 30 && resultValurImc() <= 35){
                setTextInfoImc('Obesidade Grau I')
            }else if (resultValurImc() > 35 && resultValurImc() <= 40){
                setTextInfoImc('Obesidade Grau II')
            }else {
                setTextInfoImc('Obesidade Grau III')
            }
            setAltura(null)
            setPeso(null)
            setMessageImc('Seu IMC é.: ')
            setTextButton('Novo Calculo')
            Vibration.vibrate()
            setShouldShow(true)
            return
        }else {
        setImc(null)
        setTextInfoImc('')
        setTextButton('Calcular')
        setMessageImc(errorMessage())
        setShouldShow(null)
        }
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `Calcule o seu IMC também em ${app}, O meu IMC é > ${imc} / ${textInfoImc}`
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return(
        <View style={styles.container}>
            <Pressable style={styles.formContainer} onPress={Keyboard.dismiss}>
                <Text style={styles.textTitle}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
                    value={altura}
                    onChangeText={setAltura}
                />
                <Text style={styles.textTitle}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex.: 90.754"
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={setPeso}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationIMC()}
                        activeOpacity={0.4}
                    >
                        <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                    </TouchableOpacity>
                    {
                        shouldShow ? (
                            <TouchableOpacity style={styles.containerShareBtn} onPress={onShare}>
                        <FontAwesome5 name="share-alt-square" size={24} color="#ff0043" />
                    </TouchableOpacity>
                        ) : null
                    }
                </View>
            </Pressable>
            <View style={styles.resultContainer}>
                <ResultImc messageResultImc={messageImc} resultImc={imc} texto={textInfoImc}/>
            </View>
            
        </View>
    );
}