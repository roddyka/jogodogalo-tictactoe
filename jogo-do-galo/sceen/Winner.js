import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Component } from 'react-native';
import logo from '../assets/galo.png';
import bola from '../assets/bola.png';
import xis from '../assets/x.png';
import styles from '../assets/css/Css.Component.style';
export default function GetTelaWinner(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do Galo</Text>
        <View style={styles.containerwinner}>
         {

          winner === '' && 
          <><View style={styles.container}><Image source={logo} style={{ width: 300, height: 300 }} />
          <Text style={styles.winner}>GALO!</Text></View></>
         }
         {
          winner !== '' && 
          <>
           <View style={styles.container}>
            {/* <ConfettiCannon count={200} origin={{x: -10, y: 0}} /> */}
             <Image source={winnerlogo} style={{ width: 300, height: 300 }} />
             <Text style={styles.point}>Points: {point}</Text>
              <View style={styles.touchable}>
              {
                winner === 'O' &&
                <>
                <ImageBackground source={bola} resizeMode="cover" style={styles.image}>
                  <Text style={winner === 'X' ? styles.playerX : styles.playerO }></Text> 
                </ImageBackground></>
              }
              {
                winner === 'X' &&
                <>
                <ImageBackground source={xis} resizeMode="cover" style={styles.image}>
                  <Text style={winner === 'X' ? styles.playerX : styles.playerO }></Text>
                </ImageBackground></>
              }
                {/* <Text style={winner === 'X' ? styles.playerX : styles.playerO }>{winner}</Text> */}
              </View>
            </View>
          </>

         }
          <TouchableOpacity style={styles.backtoMenu} onPress={()=>setScreen('menu')}>
            <Text style={styles.backtoMenuText} >Back to Menu</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
