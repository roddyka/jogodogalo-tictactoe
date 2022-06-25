import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Component  } from 'react-native';
import logo from './assets/galo.png';
import winnerlogo from './assets/galo2.png';
import bola from './assets/bola.png';
import ranking from './assets/ranking.png';
import xis from './assets/x.png';
import styles from './assets/css/Css.Component.style';
// import GetTelaMenu from './sceen/Menu';
// import GetTelaGame from './sceen/Menu';
// import GetTelaWinner from './sceen/Menu';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  //set home screen
  const [screen, setScreen] = useState('menu');

  //info player
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);

  //info table
  const [table, setTable] = useState([]);

  //number of play (9 because we have 9 fields)
  const [last, setLast] = useState(0);

  //set the winner
  const [winner, setWinner] = useState('');

  //array with points
  const [point, setPoint] = useState([]);


  // const myObjArray = [{id: 'player', name: 'pontos'}];
  
  let turnChange = false;
  let endgame_validate = false;

  //mudança de telas 
  switch (screen) {
    case 'menu':
      return getTelaMenu();
      // return <GetTelaMenu />
      break;
    case 'game':
      return getTelaGame();
      break;
    case 'winner':
      return getTelaWinner();
      break;
  
    case 'ranking':
      return getTelaRanking();
      break;
  
    default:
      break;
  }

  //iniciando o jogo e redirecionando para a tela de menu
  function StartGame(player){
    setPlayer1(player);
    if(player === 'X'){ 
      setPlayer2('O');
    }

    if(player === 'O'){ 
      setPlayer2('X');
    }
    setLast(9);
    setTable([
      ['','',''],
      ['','',''],
      ['','',''],
    ]);
    setScreen('game');
  }

  //FUNCIONALIDADES ->
  //função do gameplay
  function play(column, line, player){
    table[line][column] = player;
    setTable([...table]);
    setPlayer1(player === 'X' ? 'O' : 'X');
    checkWinner(table, line, column, player1, player2);
    
    let RandomNumberLine = Math.floor(Math.random() * 3 ) ;
    let RandomNumberColumn = Math.floor(Math.random() * 3 ) ;
    enemyPlaying(player2, RandomNumberLine, RandomNumberColumn);
  }

  //inimigo jogando
  function enemyPlaying(player, RandomNumberLine, RandomNumberColumn ){
    turnChange = true;
      if(endgame_validate === false){
        console.log('enemy?');
        let table_position = table[RandomNumberLine][RandomNumberColumn].length;
        if(table_position > 0) {
          RandomNumberLine = Math.floor(Math.random() * 3 ) ;
          RandomNumberColumn = Math.floor(Math.random() * 3 ) ;
          table_position = table[RandomNumberLine][RandomNumberColumn];
          enemyPlaying(player, RandomNumberLine, RandomNumberColumn);
        }else {
          setTimeout(() => {
            if(turnChange){
              play(RandomNumberColumn, RandomNumberLine, player);
              // console.log(table[RandomNumberLine][RandomNumberColumn].length);
            }
            turnChange = false;
            }, 1000);
        }
      }
  }

  //fim do jogo redirecionamento e pontuação
  function endGame(player){
    setWinner(player);
    savePoints(player, 10, player1, player2);
    setScreen('winner');
  }

 //checkando qem é o vencedor
  function checkWinner(table, line, column, player1, player2){
    console.log('checking...');
    //linha
    if(table[line][0] !== '' && table[line][0] === table[line][1] && table[line][1] === table[line][2]){
      turnChange = false;
      endgame_validate = true;
      console.log('winner linha');
      return endGame(table[line][0] , player1, player2);
    }

     //coluna
    if(table[0][column] !== '' && table[0][column] === table[1][column] && table[1][column] === table[2][column]){
      turnChange = false;
      endgame_validate = true;
      console.log('winner coluna');
      return endGame(table[0][column] , player1, player2);
    }

    //diagonal1
    if(table[0][0] !== '' && table[0][0] === table[1][1] && table[1][1] === table[2][2]){
      turnChange = false;
      endgame_validate = true;
      console.log('winner diagonal');
      return endGame(table[0][0] , player1, player2);
    }

    //diagonal2
    if(table[0][2] !== '' && table[0][2] === table[1][1] && table[1][1] === table[2][0]){
      turnChange = false;
      endgame_validate = true;
      console.log('winner diagonal2');
      return endGame(table[0][2] , player1, player2);
    }

    //nenhum ganhador
    if(last - 1 === 0){
      turnChange = false;
      endgame_validate = true;
      console.log('nenhum winner');
      return endGame('');
    }

    setLast((last - 1));
  }

  //TELAS -> 
  //tela de menu
  function getTelaMenu(){
    return (
      <View style={styles.container}>
        
        <Image source={logo} style={{ width: 200, height: 200 }} />
        <Text style={styles.title}>Jogo do Galo</Text>
        <Text style={styles.subtitle}>Selecione o Jogador</Text>
        <View style={styles.containerPlayer}>
          <TouchableOpacity style={styles.touchable} onPress={()=>StartGame('X')}>
            <ImageBackground source={xis} resizeMode="cover" style={styles.image}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={()=>StartGame('O')}>
            <ImageBackground source={bola} resizeMode="cover" style={styles.image}></ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rankingBtn} onPress={()=>setScreen('ranking')}>
          <Text style={styles.backtoMenuText} >Ranking</Text> 
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  //tela do game
  function getTelaGame(){
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
                        <ImageBackground source={bola} resizeMode="cover" style={styles.image}></ImageBackground>
                      }
                      {   
                        column === 'X' &&
                        <ImageBackground source={xis} resizeMode="cover" style={styles.image}></ImageBackground>
                      }
                    </TouchableOpacity>
                  )
                })}
              </View>
            )
          })
        }

        <TouchableOpacity style={styles.backtoMenu} onPress={()=>setScreen('menu')}>
          <Text style={styles.backtoMenuText} >Reiniciar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  //tela de vencedor
  function getTelaWinner(){
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
             <Text style={styles.point}>Points:</Text>
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

  //tela de Ranking
  function getTelaRanking(){
    getPoints();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do Galo</Text>
        <Text style={styles.subtitle}>Ranking</Text>
        <Image source={ranking} style={{ width: 200, height: 200 }} />
        <View style={styles.rankingdiv}>
          <View style={styles.rankingdiv_points}>
            <Text style={styles.rankingdiv_text}>PLAYER</Text>
            <Text style={styles.rankingdiv_point}>{player1Points === '' ? '0' : player1Points }</Text>
          </View>
          <View style={styles.rankingdiv_points}>
            <Text style={styles.rankingdiv_text}>COMPUTER</Text>
            <Text style={styles.rankingdiv_point}>{player2Points === '' ? '0' : player2Points }</Text>
          </View>
        </View>
        <View style={styles.containerwinner}>
          <TouchableOpacity style={styles.backtoMenu} onPress={()=>setScreen('menu')}>
            <Text style={styles.backtoMenuText} >Back to Menu</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

 
  function getPoints(){
    // let p1Point = 0;
    // point.map((value, index)=>{
    //   if(value.player_info === 1){
    //     setPlayer1Points(value.player_points);
    //   }
    // })
  }

  //salvar pontos a informação salva dos pontos
  function savePoints(player, points, player1, player2){
    let info;
    if(player === player1){
      info = 1;
      setPlayer1Points(player1Points + points);
    }else {
      info = 2;
      setPlayer2Points(player2Points + points);
    }
    point.push({player_info: info, player_symbol: player, player_points: points});
    setPoint(point);
  }

}
