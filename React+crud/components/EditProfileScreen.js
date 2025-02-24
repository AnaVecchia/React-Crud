import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Informações</Text>
      
      <TextInput style={styles.input} defaultValue="Ana Clara" />
      <TextInput style={styles.input} defaultValue="anaclara@gmail.com" />
      <TextInput style={styles.input} defaultValue="********" secureTextEntry={true} />
      
      <Button onPress={() => navigation.navigate('UserProfile')} title='Salvar Alterações' />
      <Button onPress={() => navigation.goBack()} title='Voltar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e0e0',
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
