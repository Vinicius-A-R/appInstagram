import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import List from './components/List';

const FEED = [
  {
    id: '1',
    name: 'Lucas Silva',
    description: 'Mais um dia de muitos bugs :)',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublish: 'https://sujeitoprogramador.com/instareact/foto1.png',
    liked: false,
    likes: 26,
  },
  {
    id: '2',
    name: 'Matheus',
    description: 'Isso sim é ser raiz!!!!!',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublish: 'https://sujeitoprogramador.com/instareact/foto2.png',
    liked: false,
    likes: 0,
  },
  {
    id: '3',
    name: 'Jose Augusto',
    description: 'Bora trabalhar Haha',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    imgPublish: 'https://sujeitoprogramador.com/instareact/foto3.png',
    liked: false,
    likes: 3,
  },
  {
    id: '4',
    name: 'Gustavo Henrique',
    description: 'Isso sim que é TI!',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublish: 'https://sujeitoprogramador.com/instareact/foto4.png',
    liked: false,
    likes: 1,
  },
  {
    id: '5',
    name: 'Guilherme',
    description: 'Boa tarde galera do insta...',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublish: 'https://sujeitoprogramador.com/instareact/foto5.png',
    liked: false,
    likes: 32,
  },
];

export default function App() {
  const [feed, setFeed] = useState(FEED);

  useEffect(() => {
    setFeed(FEED);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('./assets/img/logo.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.send}
            source={require('./assets/img/send.png')}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => <List data={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    padding: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  text: {
    color: '#222',
    fontSize: 24,
  },
  logo: {},
  send: {
    width: 24,
    height: 24,
  },
});
