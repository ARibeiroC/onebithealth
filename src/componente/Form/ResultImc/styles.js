import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 15,
    },

    textMessageResult:{
        fontSize: 20,
        fontWeight: 'bold',
    },

    imcResult:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ff0043',
    },

    textResult:{
        fontSize: 20,
    }
})

export default styles