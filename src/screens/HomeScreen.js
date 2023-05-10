import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Web3 from 'web3';

import TransactionForm from '../TransactionForm';
import TransactionStatus from '../TransactionStatus';

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/7b18ff19806e4156bbc06032da0b387f'));
const privateKey = '1d507d3652b88a794ff5ffeab4a712fc7390212058ec1ddacc128f227ae7eb17';

export default function HomeScreen() {
  const [transactionStatus, setTransactionStatus] = useState('');

  const sendTransaction = async (value, address) => {
    try {
      const gasPrice = '20000000000'; // 20 Gwei

      const transactionObject = {
        from: web3.eth.accounts.privateKeyToAccount(privateKey).address,
        to: address,
        value: web3.utils.toWei(value, 'ether'),
        gasPrice,
      };

      const signedTransaction = await web3.eth.accounts.signTransaction(
        transactionObject,
        privateKey
      );

      const transactionReceipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );

      const transaction = await web3.eth.getTransaction(
        transactionReceipt.transactionHash
      );

      setTransactionStatus(transaction.status === true ? 'Success' : 'Failed');
    } catch (error) {
      console.error(error);
      setTransactionStatus('Failed');
    }
  };

  return (
    <View style={styles.container}>
      <TransactionForm onSubmit={sendTransaction} />
      <TransactionStatus status={transactionStatus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

