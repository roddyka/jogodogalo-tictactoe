import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Component } from 'react-native';
import logo from '../assets/galo.png';
import bola from '../assets/bola.png';
import xis from '../assets/x.png';
import styles from '../assets/css/Css.Component.style';

export default function GetTelaGame(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do galo</Text>

        {
          table.map((line, numberline) => {
            return (
              <View key={numberline} style={styles.containerPlayer}>
                {line.map((column,numberColumn) => {
                  return(
                    <TouchableOpacity 
                    key={numberColumn} 
                    style={styles.touchable} 
                    onPress={()=>play(numberColumn,numberline, player1)}
                    disabled={column !== '' ? true : ({turnChange} === 0 ? true : '')}
                    >
                      {
                        column === 'O' &&
                        <ImageBackground source={bola} resizeMode="cover" style={styles.image}> <Text style={column === 'X' ? styles.playerX : styles.playerO }></Text></ImageBackground>
                      }
                      {   
                        column === 'X' &&
                        <ImageBackground source={xis} resizeMode="cover" style={styles.image}> <Text style={column === 'X' ? styles.playerX : styles.playerO }></Text></ImageBackground>
                      }
                    </TouchableOpacity>
                  )
                })}
              </View>
            )
          })
        }

        <TouchableOpacity style={styles.backtoMenu} onPress={()=>setScreen('menu')}>
          <Text style={styles.backtoMenuText} >Back to Menu</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }