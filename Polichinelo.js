import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';

import img from '../src/assets/polichinelo.png';

export default function Polichinelo({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.texto}>Be Strong</Text>
      </View>
      <View style={styles.meio}>
        <Text style={styles.texto1}>POLICHINELO:</Text>
        <Text 
        onPress={() => navigation.goBack()}
        style={styles.duvida}>Voltar</Text>
        <View style={styles.vermelho}>
            <Text style={styles.cardio}>Um exercício que trabalha a resistência muscular e cardiovascular, o polichinelo é uma atividade física que traz vários benefícios para a saúde e auxilia na queima de gordura pelo fato de ser um exercício que movimenta o corpo inteiro durante sua execução.</Text>
            <Image
          source={img}
          style={styles.cardi}
        /> 
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
duvida: {
  fontWeight:"bold",
  marginLeft:50,
  fontSize:15,
},
texto:{
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: 32,
  marginTop:45,
  marginLeft:130,
},
texto1:{
  marginTop:10,
  marginLeft:10,
  fontWeight: "bold",
  color: "#000000",
  fontSize: 25,
},
cardio:{
  marginTop:10,
  marginLeft:10,
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: 20,
},
cardi:{
  width:329,
  height:302,
  borderRadius:56,
  marginLeft:12,
  marginTop:30,
},
vermelho: {
  marginLeft:15,
  marginTop:10,
  backgroundColor: '#680000',
  width: '95%' ,
  height: 570, 
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
