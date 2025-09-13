
import { ScrollView, StyleSheet, Text } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/topBar";

export default function Index() {
    return (
      
        <SafeAreaView style={style.container}>

            <TopBar titulo={"Testeeeee"}/>

            <ScrollView>
                <Text style={{ padding: 20 }}>Teste</Text>
            </ScrollView>

        </SafeAreaView>   
    )
}

const style = StyleSheet.create ({
    
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
});