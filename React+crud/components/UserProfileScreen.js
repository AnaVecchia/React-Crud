import { View, Text, Button, StyleSheet } from 'react-native';

export default function UserProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Usuário</Text>
      <Text style={styles.info}>Nome: Ana Clara</Text>
      <Text style={styles.info}>Email: anaclara@gmail.com</Text>
      
      <Button onPress={() => navigation.navigate('UserEdit')} title='Editar Perfil' />
      <Button onPress={() => navigation.navigate('UserDelete')} title='Excluir Conta' />
      <Button onPress={() => navigation.goBack()} title='Retornar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
