import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput style={styles.input} placeholder="Nome Completo" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      
      <Button onPress={() => navigation.navigate('Landing')} title='Registrar' />
      <Button onPress={() => navigation.goBack()} title='Cancelar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
