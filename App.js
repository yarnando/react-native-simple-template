import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './src/assets/css/index'

console.disableYellowBox = true

const App = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}>
            <Text>Simple button</Text>
        </TouchableOpacity>         
        <TouchableOpacity 
            style={styles.buttonPrimary}>
            <Text style={styles.whiteText}>Primary button</Text>
        </TouchableOpacity>         
        <TouchableOpacity 
            style={styles.buttonDanger}>
            <Text style={styles.whiteText}>Danger button</Text>
        </TouchableOpacity>         
        <TouchableOpacity 
            style={styles.buttonSuccess}>
            <Text style={styles.whiteText}>Success button</Text>
        </TouchableOpacity>         
    </View>
  );
};

export default App;
