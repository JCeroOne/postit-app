import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const NoteModal = ({modalVisible, addNote, setNewNote, setModalVisible}) => {
    return (
    <Modal
        visible={modalVisible}
        animationType='fade'
        transparent
        onRequestClose={()=> setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Nueva nota
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Lorem ipsum dolor...'
              placeholderTextColor={'#aaa'}
              onChangeText={setNewNote}
              multiline={true}
              numberOfLines={4}
            />
            <View style={styles.modalButtons}>
              {/* Boton Cancelar */}
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={()=>setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              {/* Boton Aceptar */}
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={addNote}
              >
                <Text style={styles.saveButtonText}>Agregar</Text>
              </TouchableOpacity>


            </View>
          </View>
        </View>
      </Modal> 
    )
}

export default NoteModal

const styles = StyleSheet.create({
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cancelButton: {
      backgroundColor: '#f00',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    cancelButtonText: {
      fontSize:16,
      color:'#fff',
      fontWeight: "bold"
    },
     saveButton: {
      backgroundColor: '#0a0',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    saveButtonText: {
      fontSize:16,
      color:'#fff',
      fontWeight: "bold"
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: '#000000aa',
      justifyContent: 'center',
      alignItems:'center'
    },
    modalContent: {
      backgroundColor: '#333',
      padding:20,
      borderRadius: 10,
      width: '80%'
    },
    modalTitle:{
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center',
      fontSize:20,
      color: "#fff"
    },
    input: {
      borderWidth:1,
      borderRadius:8,
      padding:10,
      fontSize:16,
      marginBottom:15,
      backgroundColor: "#111111aa",
      height: 150,
      textAlignVertical: "top",
      color: "#fff"
    }
});