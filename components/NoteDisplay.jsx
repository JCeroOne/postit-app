import { FlatList, View } from "react-native"
import NoteItem from "./Note"

const NoteDisplay = ({notes}) => {
    return (
        <View>
            <FlatList 
                data={notes}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                <NoteItem note={item} />
                )}
            />
        </View>
    )    
}



export default NoteDisplay