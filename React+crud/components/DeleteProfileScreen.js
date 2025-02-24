import { View, Text, Button, StyleSheet } from 'react-native';

export default function DeleteProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Você tem certeza que deseja excluir sua conta?</Text>
      
      <Button onPress={() => navigation.goBack()} title='Não, voltar' />
      <Button onPress={() => navigation.navigate('Landing')} title='Sim, excluir' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebee',
    padding: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
