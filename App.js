import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const API_KEY = 'd05a021ffad477c38f37f2f3';

export default function App(){

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState(null);

  const convertCurrency = async () => {

  }

  return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="From Currency (e.g., USD)"
          value={fromCurrency}
          onChangeText={setFromCurrency}
          autoCapitalize="characters"
        />
        <TextInput
          style={styles.input}
          placeholder="To Currency (e.g., TRY)"
          value={toCurrency}
          onChangeText={setToCurrency}
          autoCapitalize="characters"
        />
        <TouchableOpacity onPress={convertCurrency} style={styles.button}>
          <Text>Convert</Text>
        </TouchableOpacity>
      </View>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
