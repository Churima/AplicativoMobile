import React, { Component } from "react";

import { StyleSheet, View, SafeAreaView, Text, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      number: 0,
      startStopText: "Start",
    };

    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }
  startStopButton() {
    if (this.state.timer == null) {
      let newS = this.state;
      newS.startStopText = "Stop";
      this.setState(newS);

      this.state.timer = setInterval(() => {
        let newState = this.state;
        newState.number += 0.1;
        this.setState(newState);
      }, 100);
    } else {
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.startStopText = "Start";
      newState.timer = null;
      this.setState(newState);
    }
  }
  clearButton() {
    clearInterval(this.state.timer);

    let newState = this.state;
    newState.startStopText = "Start";
    newState.timer = null;
    newState.number = 0;

    this.setState(newState);
  }
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topo}>
          <Text style={styles.texto}>Be Strong</Text>
        </View>
        <View style={styles.meio}>
          <Text style={styles.texto1}>TIMER</Text>
          <View style={styles.vermelho}>
            <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity styles={styles.button} onPress={this.startStopButton}>
                <Text style={styles.buttonText}>{this.state.startStopText}</Text>
              </TouchableOpacity>

              <TouchableOpacity styles={styles.button} onPress={this.clearButton}>
                <Text style={styles.buttonText}>      Limpar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.FixToText}>
              <Button
                title="Voltar"
                color="#680000"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.end}></View>
      </SafeAreaView>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigation();

  return <Timer {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
      width: '100%',
      height:129,
      backgroundColor: '#680000',
      borderRadius:10,
      flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 70,
  },
  counterText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 20,
  },
  button: {
    marginHorizontal: 15,
    height: 40,
    justifyContent: "center",
    width: 75,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginTop:10,
    fontWeight:"bold",
    fontSize:20,
  },
  texto:{
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 32,
    marginTop:45,
    marginLeft:130,
  },
  texto1: {
    textAlign:"center",
    marginTop: 50,
    fontWeight: "bold",
    color: "#000000",
    fontSize: 50,
  },
  vermelho: {
    marginLeft: 15,
    marginTop: 100,
    backgroundColor: "#680000",
    width: "95%",
    height: 250,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  end: {
    marginTop: 245,
    backgroundColor: "#680000",
    width: "100%",
    height: 68,
    borderRadius: 5,
  },
});
