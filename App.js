import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import Title from './src/componente/Title'
import Form from './src/componente/Form'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + '12%' : '4%';

export default function App() {  
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
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

  statusBar:{
    height: statusBarHeight,
    backgroundColor: '#fff',
  },
});
