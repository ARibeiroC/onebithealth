import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        bottom: 0,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    formContainer:{
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
        alignItems: 'center',
        
    },

    textTitle:{
        width: '90%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 20,
        
    },
    input:{
        marginBottom: 10,
        width: '90%',
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        backgroundColor: '#999', 
        color: '#000',
        fontSize: 18,
    },

    buttonContainer:{
        alignItems: 'center',
        width: '100%',
    },

    buttonCalculator:{
        backgroundColor: '#ff0046',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculator:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    resultContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '34%',
    }
});

export default styles