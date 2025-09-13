import React from "react";

import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
      
        <SafeAreaView style={style.container}>

            <View style={style.topBar}>
                <Text style={style.texto}>Início</Text>

                <TouchableOpacity>
                    <View style={style.grupoDireito}>
                        <Text style={[style.texto, { marginRight: 10 }]}>Entrar</Text>
                        /*Aqui vai a imagem de perfil*/
                        
                        <View style={style.imagemPerfilPlaceholder} /> 

                    </View>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
                <Text style={{ padding: 20 }}>Xibiu</Text>
            </ScrollView>

        </SafeAreaView>   
    )
}

const style = StyleSheet.create ({
    
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    topBar : {
        width:"100%",
        height: 60,
        backgroundColor: "Blue",
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    grupoDireito : {
        flexDirection: "row",
        alignItems: "center",
    },
    
    texto: {
        fontSize: 16,
        fontWeight: '500',
    },
 
    imagemPerfilPlaceholder: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#E0E0E0',
});