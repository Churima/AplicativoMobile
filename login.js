import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView,TextInput, Text, Image} from 'react-native';

import logo from '../src/assets/logo.png';
import logo2 from '../src/assets/logo2.png';


export default function Login({navigation}) {

  const [login, setLogin] = useState(null);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState('');

  async function sendForm()
{
    let response= await fetch('http://192.168.1.11:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: user,
          password: password,
        })
    });
    let json = await response.json();
    //console.log(json);
    if(json =='error'){
        setMsg('Usuário ou senha invalidos!');
        setTimeout(()=>{
            setMsg('');
        }, 3000);
    } else{
        navigation.navigate('Menu')
    }
}
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Image
          source={logo2}
          style={styles.logo2}
        /> 
        <Text style={styles.texto}>   Be Strong</Text>
        <Image
          source={logo}
          style={styles.logo}
        /> 
      </View>
      <View style={styles.design}>
      <Text style={styles.msgn}>{msg}</Text>
        <View style={styles.branco}>
          <TextInput
            style={styles.input}
            placeholder="  Usuário:"
            onChangeText={text=>setUser(text)}>
            </TextInput>
        </View>
        <View style={styles.branco1}>
          <TextInput
            style={styles.input1}
            placeholder="  Senha:"
            onChangeText={text=>setPassword(text)}
            secureTextEntry= {true}
          ></TextInput>
        </View>
      </View>
      <View style={styles.FixToText}>
        <Button
          title="CONECTAR"
          color="#680000"   
          onPress={()=>sendForm()}
           ></Button>  
      </View>
      <View style={styles.end}>

      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
topo:{
  width: '100%',
  height:129,
  backgroundColor: '#680000',
  borderRadius:10,
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: 'center'
},
logo: {
  width:80,
  height:80,
  resizeMode:'contain',
  marginLeft: 30,
},
logo2: {
  width:80,
  height:80,
  resizeMode:'contain',
},
texto:{
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: 32,
 
},

design: {
  backgroundColor: '#680000' ,
  width: '80%' ,
  height: 269, 
  borderRadius: 16,
  marginTop:196,
},
FixToText: {
  width: '65%',
  borderRadius:57,
  marginTop: 36,
},
branco: {
  marginTop:50,
  backgroundColor: '#000000',
  width: '90%' ,
  height: 70, 
  borderRadius: 5,
  marginLeft: 15,
},
input: {
  backgroundColor: '#FFFFFF',
  width: '98%',
  height: 67,
  borderRadius: 5,
  marginLeft:3,
  fontSize: 25,
  fontWeight: "hind",
},
branco1: {
  marginTop:40,
  backgroundColor: '#000000',
  width: '90%' ,
  height: 70, 
  borderRadius: 5,
  marginLeft: 15,
}, 
input1: {
  
  backgroundColor: '#FFFFFF',
  width: '98%',
  height: 67,
  marginLeft:3,
  borderRadius: 5,
  fontSize: 25,
  fontWeight: "hind",
},
end: {
  marginTop:78,
  backgroundColor: '#680000' ,
  width: '100%' ,
  height: 68, 
  borderRadius: 5,
},
msgn:{
  color: 'red',
  fontWeight: 'bold',
  marginTop: 10,
},
});
