import {Stack} from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle : {
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        fontSize:20,
        fontWeight: 'bold'
      },
      contentStyle: {
        paddingHorizontal: 10,
        paddingTop:10,
        backgroundColor: '#111111ff'
      }
    }}
  >
    <Stack.Screen name='index' options={{ title: 'Inicio'}} />
    <Stack.Screen name='notes' options={{headerTitle: 'Mis notas'}} />
  </Stack>;
}

export default RootLayout;
