import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar/>
      
      <View style={styles.container}>
        <View style={styles.topSection} />

        <View style={styles.bottomCard}>
          <Text style={styles.titulo}>Seja bem-vindo</Text>
          <Text style={styles.subtitulo}>
            Descubra o melhor da nossa cidade no seu ritmo. Comece sua jornada agora!
          </Text>

          <TouchableOpacity style={styles.btnQrCode}>
            <Icons name="qrcode-scan" size={100} color="#1C1C1E" />
            <Text style={styles.textoQrCode}>Ler QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2FB443',
  },
  container: {
    flex: 1,
  },
  topSection: {
    height: 150,
    backgroundColor: '#2FB443',
  },
  bottomCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#505051ff',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  btnQrCode: {
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',      
    justifyContent: 'center', 
    borderWidth: 2,
    width: '85%',             
    aspectRatio: 1,           
    borderColor: '#4CAF50',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5.62,
    elevation: 6,

  },
  textoQrCode: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#1C1C1E',
  }
});