import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TransactionForm({ onSubmit }) {
  const [value, setValue] = useState('');
  const [address, setAddress] = useState('');

  const handlePress = () => {
    onSubmit(value, address);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Value of Ethereum"
        value={value}
        onChangeText={setValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
});

