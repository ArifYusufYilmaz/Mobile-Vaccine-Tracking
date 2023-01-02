import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Router from "./Router/Router"


export default function App() {
  return (
    <Provider store = {store}>
       <View style={styles.container}>
          <Router></Router>
      </View>
      <Toast/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
