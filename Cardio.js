import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';

import img from '../src/assets/cardio.png';

export default function Cardio({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.texto}>Be Strong</Text>
      </View>
      <View style={styles.meio}>
        <Text style={styles.texto1}>CARDIO:</Text>
        <Text 
        onPress={() => navigation.goBack()}
        style={styles.duvida}>Voltar</Text>
        <View style={styles.vermelho}>
            <Text style={styles.cardio}>O treino cardio (cardiorrespiratório) é uma modalidade de exercícios que têm como objetivo fortalecer o sistema cardíaco, os pulmões e os músculos através de atividades físicas que testam sua resistência e movimentam o corpo inteiro – são aqueles que você sua bastante e fica ofegante.</Text>
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
duvida: {
  fontWeight:"bold",
  marginLeft:50,
  fontSize:15,
},
cardi:{
  width:329,
  height:302,
  borderRadius:56,
  marginLeft:12,
  marginTop:15,
},
vermelho: {
  marginLeft:15,
  marginTop:10,
  backgroundColor: '#680000',
  width: '95%' ,
  height: 590, 
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
