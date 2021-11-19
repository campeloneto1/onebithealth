import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultImc from './ResultImc/';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha as informações.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(){
       return setImc((weight /(height * height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            return;
        }else{
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha as informações.");
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                onChangeText={setHeight} 
                value={height} 
                style={styles.input} 
                placeholder="Ex.: 1.83" 
                keyboardType="numeric" />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                onChangeText={setWeight} 
                value={weight} 
                style={styles.input} 
                placeholder="Ex.: 85.5" 
                keyboardType="numeric" />

                <TouchableOpacity 
                style={styles.button}
                onPress={() => validationImc()} 
                >
                    <Text style={styles.textButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
}
