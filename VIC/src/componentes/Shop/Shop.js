import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Products from '../Products/Products';
import {  DataProvider } from '../Context/DataContext';
import bagIcon from '../../../assets/images/bag.png';
import accountIcon from '../../../assets/images/account.png';
import homeIcon from '../../../assets/images/home.png';
import ModalComponent from '../ModalComponent/ModalComponent'; // Asegúrate de importar ModalComponent


const Shop = ({navigation}) => {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Products />
		<ModalComponent />
      </View>
	  <View style={styles.navBar}>
	  <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Shop')}>
          <Image source={bagIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inicio')}>
          <Image source={homeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={accountIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    paddingVertical: 10,
    position : 'absolute', // Fija la navbar
    bottom: 85, // Mantiene la navbar 85 unidades hacia arriba
    left: 0,
    right: 0,
    borderRadius: 50,
  },
  navButton: {
    alignItems: 'center',
}, 
icon: {
  width: 50, // Ajusta el tamaño del ícono según sea necesario
  height: 50,
},
});

export default Shop;