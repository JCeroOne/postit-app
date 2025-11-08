import { useState } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import NoteDisplay from "@/components/NoteDisplay"
import NoteModal from "@/components/NoteModal"

const Notes = () => {

  const [notes, setNotes] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  const addNote = () => {
    if(newNote.trim() === '') return

    setNotes((prevNotes) => [
      ...prevNotes,
      {id: Date.now().toString(), text: newNote}
    ])

    setNewNote('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>

      <NoteDisplay notes={notes}></NoteDisplay>

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={()=> setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Nueva nota</Text>
      </TouchableOpacity>

      <NoteModal
        modalVisible={modalVisible}
        addNote={addNote}
        setNewNote={setNewNote}
        setModalVisible={setModalVisible}
      ></NoteModal>

    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#111'
    },
    noteItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#c4c2c2ff',
      padding:15,
      borderRadius:5,
      marginVertical:5
    },
    noteText: {
      fontSize:18
    },
    addButton: {
      position: 'absolute',
      bottom: 50,
      left: 20,
      right:20,
      backgroundColor: '#007bff',
      padding:15,
      borderRadius:5,
      alignItems:'center'
    },
    addButtonText: {
      color: '#fff',
      fontSize:18,
      fontWeight: 'bold'
    }
})