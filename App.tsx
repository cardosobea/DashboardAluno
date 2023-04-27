import { StatusBar } from 'expo-status-bar';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { List, MD3Colors } from 'react-native-paper';
import ListSection from 'react-native-paper/lib/typescript/src/components/List/ListSection';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={75} source={require('./assets/avatar.png')} />
        </View>
        <List.Section>
    <List.Subheader>MAPA DO CURSO</List.Subheader>
    <List.Item title="Introdução a Programação" left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}/>
    <List.Item title="Banco de Dados" left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder"/>}/>
    <List.Item title="Redes de Computadores" left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder"/>}/>
  </List.Section>
      </View>   
 );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 40,
    marginLeft: 10
  },
  avatarContainer:{
  }
});
