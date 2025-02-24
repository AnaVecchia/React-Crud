import { View, Text, Button, StyleSheet } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Nosso Aplicativo!</Text>
      <Text style={styles.subtitle}>Selecione uma das opções abaixo:</Text>

      <Button onPress={() => navigation.navigate('Register')} title='Criar Conta' />
      <Button onPress={() => navigation.navigate('UserProfile')} title='Ver Meu Perfil' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
});
