import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View } from 'react-native';


type IStack = {
  Home: undefined;
  Profile: undefined;
}

const Stack = createNativeStackNavigator<IStack>();

function Home() {
  const { navigate } = useNavigation<NavigationProp<IStack>>();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Profile" onPress={() => navigate('Profile')}/>
      <StatusBar style="auto"/>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Profile title',
            }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'A very, very long title',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
