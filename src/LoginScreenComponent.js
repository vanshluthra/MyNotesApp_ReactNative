import React,{ useState} from 'react';
import {View , Text, StyleSheet, TextInput, Button} from 'react-native';
import firebase from 'firebase';

const LoginScreenComponent = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <View>
        <Text> Email: </Text>
        <TextInput style={styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={(currentText) => setEmail(currentText)} />

        <Text> Password: </Text>
        <TextInput style={styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(currentText) => setPassword(currentText)} />

        <View style={styles.buttonStyle}>
        <Button title={"Log In"}
        onPress={() => firebase
            .auth()
            .signInWithEmailAndPassword(email.trim(), password)
        }/>
        </View>
        <View style={styles.buttonStyle}>
        <Button title={"Sign Up"}
        onPress={() => {
            firebase.auth()
            .createUserWithEmailAndPassword(email.trim(), password)
            .then(() => {
                setEmail("")
                setPassword("")
                console.log('Login')
            })
            .catch(() => {
                console.log('Error')
            })
        } }/>
        </View>
    </View>
}

const styles= StyleSheet.create({
    textInputStyle:{
        width:400,
        margin:10,
        padding:10,
        borderRadius:3,
        borderWidth:5
    },
    buttonStyle:{
        margin:20
    }
})

export default LoginScreenComponent;