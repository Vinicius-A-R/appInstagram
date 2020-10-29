import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List({ data }) {
  // const { name, description, imgPerfil, imgPublish, liked, likes } = data;
  const [feed, setFeed] = useState(data)

  const showLikes = (countLikes) => {
    if (countLikes <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {countLikes} {countLikes > 1 ? 'likes' : 'like'}
      </Text>
    );
  };

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image style={styles.pic} source={{ uri: imgPerfil }} />

        <Text style={styles.nameUser}>{name}</Text>
      </View>

      <Image
        resizeMode="cover"
        style={styles.picPublish}
        source={{ uri: imgPublish }}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={() => }>
          <Image
            style={styles.iconsAct}
            source={require('../../assets/img/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={styles.iconsAct}
            source={require('../../assets/img/send.png')}
          />
        </TouchableOpacity>
      </View>

      {showLikes(likes)}

      <View style={styles.footer}>
        <Text style={styles.footerName}>{name}</Text>

        <Text style={styles.footerDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaFeed: {},
  viewPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  pic: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
  },
  nameUser: {
    fontSize: 24,
    textAlign: 'left',
    color: '#000',
  },
  picPublish: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 6,
  },
  iconsAct: {
    width: 24,
    height: 24,
  },
  btnSend: {
    paddingLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    paddingLeft: 6,
    fontSize: 16,
    color: '#000',
  },
  footerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 6,
  },
  footerDescription: {
    marginLeft: 6,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
});
