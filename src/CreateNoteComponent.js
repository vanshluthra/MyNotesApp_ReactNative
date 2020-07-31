import React,{useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';

const CreateNoteComponent = (props) => {
    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput 
        style={styles.textInputStyles}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
        value={newNoteText}
        onChangeText={(currentText) => {
                setNewNoteText(currentText)
        }
    }
        />
        <Button title={'Create Note'}
        
        onPress={() => {
            if(newNoteText !== ''){
        setNewNoteText('')

        loggedInUserId = firebase.auth().currentUser.uid
        pathForData = `/users/${loggedInUserId}/`

        firebase.database().ref(pathForData).push({
            'date': new Date().toDateString(),
            'text': newNoteText 
        })
            }}
        }
        />
    </View>
}


const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 5,
        width: 320,
        height: 140,
        borderRadius: 10,
        padding: 15,
        fontSize: 30
    }
});

export default CreateNoteComponent;