import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleNoteSummaryComponent = (props) => {
    return <View backgroundColor={randomBackground()} style={styles.textViewStyle} >
        <Text style={styles.dateProperties}>{props.DateSummary}</Text>
        <Text style={styles.textProperties}>{props.TextSummary}</Text>
            </View>
}

const styles = StyleSheet.create({
    'textProperties': {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        padding:30
    },
    'textViewStyle': {
        height: 150,
        width: 150,
        margin:10,
        borderRadius:10,
        padding:5,
        // alignItems:'center',
        // justifyContent:'center'
    },
    'dateProperties': {
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
  });

  const randomBackground = () =>{
      var red = Math.floor(Math.random() * 255)
      var green = Math.floor(Math.random() * 255)
      var blue = Math.floor(Math.random() * 255)

      return `rgb(${red},${green},${blue})`
      //This is string interpolation
  }

export default SingleNoteSummaryComponent;