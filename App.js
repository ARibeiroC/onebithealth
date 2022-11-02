import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import Title from './src/componente/Title'
import Form from './src/componente/Form'

export default function App() {  
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
