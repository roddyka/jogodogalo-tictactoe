import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Component } from 'react-native';
import logo from '../assets/galo.png';
import bola from '../assets/bola.png';
import xis from '../assets/x.png';
import styles from '../assets/css/Css.Component.style';
import GetTelaGame from '../sceen/Menu';
import GetTelaWinner from '../sceen/Menu';
import app from '../App';

export default function GetTelaMenu(props){
    // const [screen, setScreen] = useState('');
    // const [player1, setPlayer1] = useState('');
    // const [player2, setPlayer2] = useState('');
    // const [table, setTable] = useState([]);
    // const [last, setLast] = useState(0);
    // const [winner, setWinner] = useState('');

    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 200, height: 200 }} /> 
        <Text style={styles.title}>Jogo do Galo</Text>
        <Text style={styles.subtitle}>Selecione o Jogador</Text>
        <View style={styles.containerPlayer}>
          <TouchableOpacity style={styles.touchable} onPress={()=>StartGame('X')}>
            <ImageBackground source={xis} resizeMode="cover" style={styles.image}> <Text  style={styles.playerX}> </Text></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={()=>StartGame('O')}>
            <ImageBackground source={bola} resizeMode="cover" style={styles.image}> <Text  style={styles.playerO}> </Text></ImageBackground>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );

    // function StartGame(player){
    //     setPlayer1(player);
    //     if(player === 'X'){ 
    //       setPlayer2('O');
    //     }
    
    //     if(player === 'O'){ 
    //       setPlayer2('X');
    //     }
    
    //     setLast(9);
    //     setTable([
    //       ['','',''],
    //       ['','',''],
    //       ['','',''],
    //     ]);
    //     console.log('e ai')
    //     setScreen('game');
    //   }
    
  }
