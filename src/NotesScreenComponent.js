import React, { useState,useEffect } from 'react';
import {Text, FlatList, View, StyleSheet, TextInput, Button} from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import CreateNoteComponent from './CreateNoteComponent';
import firebase from 'firebase';
import _ from 'lodash';

const NotesScreenComponent = () =>{
    // var data = [
    //     {"date":"24-10-1998","text":"Text1"},
    //     {"date":"24-10-1999","text":"Text2"},
    //     {"date":"24-10-1997","text":"Text3"},
    //     {"date":"24-10-1996","text":"Text4"},
    //     {"date":"24-10-1995","text":"Text5"},
    //     {"date":"24-10-1994","text":"Text6"},
    //     {"date":"24-10-1993","text":"Text7"}
    // ]


    const [data, setData] = useState([]);


    const loggedInUserId = firebase.auth().currentUser.uid 
    useEffect(() => firebase.database().ref(`/users/${loggedInUserId}/`).on('value', (completeNewData) => {
        

        const newDataList = _.map(completeNewData.val(), (value,key) => {
            return {...value}
        })
        console.log(newDataList)
        setData(newDataList.reverse())
    } ),[]
    )



    const addNewNote = (text) => {
        if(text.length > 0) {
            setData([...data , {"text":text, "date":new Date()}])
        }
    }
    // to write javascript inside jsx, i need to enclose javascript code in {}
    // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
    // item , index
    return <View style={styles.viewProperties}>
        <Button 
            title={"Log Out"}
            onPress={() => firebase.auth().signOut()}
        />
        <CreateNoteComponent onCreateButtonPress={
            (text) =>addNewNote(text)
        } />
        {/* <TextInput style={styles.textInputStyles}
            autoCorrect={false}
            autoCapitalize="none"
            multiline={true}
            /> */}
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.listProperties} 
            data={data}
            keyExtractor={(item,index) => {
                return String(index)
            }} 
            numColumns={2}
            renderItem={({item}) => {
                return <SingleNoteSummaryComponent TextSummary={item.text} DateSummary={item.date}/>
                    }
            }
            />
        </View>
}

const styles = StyleSheet.create({
    'viewProperties': {
        marginTop: 50
    }
}
)
  

export default NotesScreenComponent;