import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TransactionStatus({ status }) {
  return <Text style={styles.text}>{status}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

