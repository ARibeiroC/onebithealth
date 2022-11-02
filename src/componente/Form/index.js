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
    const [alt, setAlt] = useState('-----')
    const [teste, setTeste] = useState(null)
    var result = 0

    function validationIMC(){
        if (altura != null && peso != null){
            setImc(result = (peso/(altura*altura)).toFixed(2))
            setTeste(result)
            if (result <= 18.5){
                setAlt('Abaixo do Peso')
            }else if (result > 18.5 && result <= 25) {
                setAlt('Peso ideal')
            }else if (result > 25 && result <= 30){
                setAlt('Levemente acima do peso')
            }else if (result > 30 && result <= 35){
                setAlt('Obesidade Grau I')
            }else if (result > 35 && result <= 40){
                setAlt('Obesidade Grau II')
            }else {
                setAlt('Obesidade Grau III')
            }
            setAltura(null)
            setPeso(null)
            setMessageImc('Seu IMC é.: ')
            setTextButton('Novo Calculo')
            return
        }else {
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')}
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
                <ResultImc messageResultImc={messageImc} resultImc={imc} texto={alt} teste={teste}/>
            </View>
            
        </View>
    );
}