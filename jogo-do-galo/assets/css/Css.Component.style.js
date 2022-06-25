import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backtoMenu: {
      marginTop: 20,
      backgroundColor: '#ff00009e',
      padding: 20,
      borderRadius: 8
    },
    backtoMenuText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "#333"
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#333",
      marginTop: 10
    },
    touchable: {
      width: 80,
      height: 80,
      backgroundColor: '#ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginTop: 20,
      border: 'solid 1px #ff00009e'
    },
    playerO: {
      fontSize: 40,
      color: 'red',
      fontWeight: 'bold'
    },
    playerX: {
      fontSize: 40,
      color: 'blue',
      fontWeight: 'bold',
    },
    containerPlayer: {
      flexDirection: 'row',
      gap: 10
    },
    containerwinner: {
      flexDirection: 'column',
      
      gap: 10
    },
    image: {
      justifyContent: "center",
      width:80,
      height:80,
    },
    point: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#333",
    },
    rankingBtn: {
        marginTop: 20,
        backgroundColor: '#ff00009e',
        padding: 20,
        borderRadius: 8
    },
    rankingdiv: {
      flexDirection: 'row',
      gap: 10,
      border: 'solid 1px #333',
      padding: 10
    },
    rankingdiv_points: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    },
    rankingdiv_text: {
      fontWeight: 'bold',
      color: "#333"
    },
    rankingdiv_point: {
      fontWeight: 'bold',
      color: "#333",
      fontSize: 40
    }
  });
  