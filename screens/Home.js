import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Not so "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3'
    }
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setOpenModal(false)}
          />
          <Text>I am a modal</Text>
        </View>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        onPress={() => setOpenModal(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: { flex: 1 },
  modalToggle: {
    marginBottom: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
});
