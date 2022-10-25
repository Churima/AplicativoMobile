import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';


export default function Menu2({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.texto}>Be Strong</Text>
      </View>
      <View style={styles.meio}>
        <Text style={styles.texto1}>CARDIO:</Text>
        <Text 
        onPress={() => navigation.navigate('Cardio')}
        style={styles.duvida}>O que é?</Text>
        <View style={styles.vermelho}>
        <View style={styles.branco}>
        </View>
        </View>
        <View style={styles.temp}>
        <Text style={styles.timeD}>00,0</Text>
        <Text style={styles.timeQ}>25,0</Text>
        </View>
        <Text style={styles.texto1}>PRANCHA:</Text>
        <Text 
        onPress={() => navigation.navigate('Prancha')}
        style={styles.duvida}>O que é?</Text>
        <View style={styles.vermelho}>
        <View style={styles.branco}>
        </View>
        </View>
        <View style={styles.temp}>
        <Text style={styles.timeD}>00,0</Text>
        <Text style={styles.timeQ}>00,30</Text>
        </View>
        <Text style={styles.texto1}>POLICHINELO:</Text>
        <Text 
        onPress={() => navigation.navigate('Polichinelo')}
        style={styles.duvida}>O que é?</Text>
        <View style={styles.vermelho}>
        <View style={styles.branco}>
        </View>
        </View>
        <View style={styles.temp}>
        <Text style={styles.timeD}>00,0</Text>
        <Text style={styles.timeQ}>00,30</Text>
        </View>
        <Text style={styles.texto1}>AGACHAMENTO:</Text>
        <Text 
        onPress={() => navigation.navigate('Agachamento')}
        style={styles.duvida}>O que é?</Text>
        <View style={styles.vermelho}>
        <View style={styles.branco}>
        </View>
        </View>
        <View style={styles.temp}>
        <Text style={styles.timeD}>00,0</Text>
        <Text style={styles.timeQ}>00,35</Text>
        </View>
      </View>
      <View style={styles.end}>

      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
topo:{
  width: '100%',
  height:129,
  backgroundColor: '#680000',
  borderRadius:10,
  flexDirection: "row",
},
img:{
  width:50,
  height:50,
  marginLeft:10,
  marginTop:70,
},
texto:{
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: 32,
  marginTop:45,
  marginLeft:130,
},
duvida: {
  fontWeight:"bold",
  marginLeft:50,
  fontSize:15,
},
texto1:{
  marginTop:10,
  marginLeft:10,
  fontWeight: "bold",
  color: "#000000",
  fontSize: 25,
},
temp: {
  flexDirection: "row",
},
timeD:{
  fontWeight: "bold",
  color: "#000000",
  fontSize: 36,
  marginLeft:10,
},
timeQ:{
  fontWeight: "bold",
  color: "#000000",
  fontSize: 36,
  marginLeft: 190,
},
vermelho: {
  marginLeft:30,
  marginTop:10,
  backgroundColor: '#680000',
  width: '85%' ,
  height: 78, 
  borderRadius: 10,
},
branco: {
  marginLeft:10,
  marginTop:10,
  backgroundColor: '#ffffff',
  width: '94%' ,
  height: 54, 
  borderRadius: 10,
},
end: {
  marginTop:10,
  backgroundColor: '#680000' ,
  width: '100%' ,
  height: 68, 
  borderRadius: 5,
},
});
