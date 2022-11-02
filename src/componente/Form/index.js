import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import ResultImc from "./ResultImc";
import styles from './styles'

export default function Form(){
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState('Calcular IMC')
    const [alt, setAlt] = useState('nao')

    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }

    function validationIMC(){
        if (altura != null && peso != null){           
            imcCalculator()
            if (imc <= 18.5){
                setAlt('Abaixo do Peso')
            }else if (imc <= 24.9) {
                setAlt('Peso ideal')
            }else if (imc <= 29.9){
                setAlt('Levemente acima do peso')
            }else if (imc <= 34.9){
                setAlt('Obesidade Grau I')
            }else if (imc <= 39.9){
                setAlt('Obesidade Grau II')
            }else {
                setAlt('Obesidade Grau III')
            }
            setAltura(null)
            setPeso(null)
            setMessageImc('Seu IMC é.: ')
            setTextButton('Novo Calculo')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')
    }
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
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
                </View>
            </View>
            <View style={styles.resultContainer}>
                <ResultImc messageResultImc={messageImc} resultImc={imc} texto={alt} />
            </View>
            
        </View>
    );
}