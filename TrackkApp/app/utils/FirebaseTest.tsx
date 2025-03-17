import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { auth, db, storage } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { ref, listAll } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

export default function FirebaseTest() {
  const [status, setStatus] = useState({
    auth: 'Testing...',
    firestore: 'Testing...',
    storage: 'Testing...'
  });

  useEffect(() => {
    // Test Authentication for web
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      setStatus(prev => ({
        ...prev,
        auth: 'Auth connection successful! ' + (user ? 'User is signed in' : 'No user signed in')
      }));
    });
  
      return () => {
        authUnsubscribe();
      };
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Connection Test</Text>
      <Text style={styles.status}>Authentication: {status.auth}</Text>
      <Text style={styles.status}>Firestore: {status.firestore}</Text>
      <Text style={styles.status}>Storage: {status.storage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
  },
});