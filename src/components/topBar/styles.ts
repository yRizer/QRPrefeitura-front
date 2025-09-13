import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 70,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 0,
    },
    grupoDireito: {
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
    }
})