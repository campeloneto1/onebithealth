import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList} from 'react-native';
import ResultImc from './ResultImc/';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha as informações.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
       let totalImc = (weight.replace(",", ".") /(height.replace(",", ".") * height.replace(",", "."))).toFixed(2);
        setImcList((arr) => [...arr, {
            id: new Date().getTime(),
            imc: totalImc,
        }]);
       return setImc(totalImc);
    }

    function verificationImc(){
        if(imc == null ){
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório');            
        }
    }

    function validationImc(){
        if(weight != null && height != null){            
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            Keyboard.dismiss();            
        }else{
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha as informações.");            
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null 
            ?
           
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput 
                    onChangeText={setHeight} 
                    value={height} 
                    style={styles.input} 
                    placeholder="Ex.: 1.83" 
                    keyboardType="numeric" />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
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
                </Pressable>
            :
                <View style={styles.exibitionResultImc}>
                      <ResultImc messageResultImc={messageImc} resultImc={imc} />
                     <TouchableOpacity 
                        style={styles.button}
                        onPress={() => validationImc()} 
                        >
                        <Text style={styles.textButton}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                   
                </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemLits}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}

             />
        </View>
    );
}
