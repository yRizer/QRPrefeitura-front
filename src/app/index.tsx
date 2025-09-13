
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/topBar";
import Icons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
    return (
        <SafeAreaView style={style.container} edges={['right', 'bottom', 'left']}>
            <TopBar titulo={"Início"}/>

            <ScrollView>
                <View style={style.containerTexto}>
                    <Text style={style.titulo}>Seja bem vindo</Text>
                    <Text style={style.subtitulo}>Descubra o melhor da nossa cidade no seu ritmo. Comece sua jornada agora!</Text>
                </View>

               
                <View style={style.containerQrCode}>
                    <TouchableOpacity style={style.btnQrCode}>
                        
                        <Icons name="qrcode-scan" size={150} color="#1C1C1E" />
                        <Text style={style.textoQrCode}>Ler QR Code</Text>

                    </TouchableOpacity>  
                </View>
            </ScrollView> 
        </SafeAreaView>   
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white', 
    },

    containerTexto: {
        paddingTop: 60, 
        paddingHorizontal: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1C1C1E', 
        marginBottom: 8,
    },

    subtitulo: {
        fontSize: 16,
        color: '#6A6A6E', 
        lineHeight: 24,
    },

    containerQrCode: {
        paddingHorizontal: 70,
        marginVertical: 80, 
    },

    btnQrCode: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 40,
        alignItems: 'center',
        borderWidth: 2,
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