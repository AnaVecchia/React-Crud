import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import LandingScreen from './components/LandingScreen';
import SignUpScreen from './components/SignUpScreen';
import UserProfileScreen from './components/UserProfileScreen';
import EditProfileScreen from './components/EditProfileScreen';
import DeleteProfileScreen from './components/DeleteProfileScreen';

// Criação do Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ title: 'Bem-vindo' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={SignUpScreen} 
          options={{ title: 'Cadastro' }} 
        />
        <Stack.Screen 
          name="UserProfile" 
          component={UserProfileScreen} 
          options={{ title: 'Perfil de Usuário' }} 
        />
        <Stack.Screen 
          name="UserEdit" 
          component={EditProfileScreen} 
          options={{ title: 'Editar Perfil' }} 
        />
        <Stack.Screen 
          name="UserDelete" 
          component={DeleteProfileScreen} 
          options={{ title: 'Excluir Perfil' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
