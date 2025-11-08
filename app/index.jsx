import JCLogo from '@/assets/images/JCLogo.jpg';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = () => {

  const router = useRouter()

  return (
    <View style={styles.container} >
      <Image source={JCLogo} style={styles.image} />
      <Text style={styles.titulo}>JC's Notepad</Text>
      <Text style={styles.subtitulo}>Una app de notas muy simple, para que pueda usarse en cualquier momento.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>router.push('./notes')}
      >
        <Text style={styles.buttonText}>Abrir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding:20,
      backgroundColor: 'transparent'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:20,
    borderRadius:20,
    boxShadow: "0 0 150px #00f"
  },
  titulo: {
    fontSize:28,
    fontWeight: 'bold',
    marginBottom:10,
    color: '#fff',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize:16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom:20
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius:8,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  }
})

export default Home
