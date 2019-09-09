import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker, ActivityIndicator } from 'react-native'

import { styles } from './src/assets/css/index'

console.disableYellowBox = true

const App = () => {
  return (
    <View style={styles.container}>
        <View style={ { marginBottom: 10 } }>
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Buttons</Text>
            </View>
            <TouchableOpacity 
                style={styles.button}>
                <Text>Loading</Text>
                <ActivityIndicator size="small"/>
            </TouchableOpacity>         
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
        <View style={ { marginBottom: 10 } }>
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Form</Text>
            </View>            
            <Text style={styles.label}>Label 1</Text>  
            <TextInput
                style={styles.inputError}
                placeholder="Input with error"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"/>
            <Text style={styles.redText}>This input has an error</Text>         
            <Text style={styles.label}>Label 2</Text>  
            <TextInput
                style={styles.input}
                placeholder="Normal input"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"/>     
            <Text style={styles.label}>Label 3</Text>  
            <View style={styles.picker}>
                <Picker>
                    <Picker.Item
                        value={0}
                        label="Picker item"
                    ></Picker.Item>
                </Picker>
            </View>
        </View>                
    </View>
  );
};

export default App;
