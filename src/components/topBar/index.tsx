import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type TopBarProps = {
    titulo: string;
}

export default function TopBar({ titulo }: TopBarProps) {
    return (
        <View style={style.topBar}>
            <Text style={style.texto}>{titulo}</Text>

            <TouchableOpacity>
                <View style={style.grupoDireito}>
                    <Text style={[style.texto, { marginRight: 10 }]}>Entrar</Text>
                    {/*Aqui vai a imagem de perfil*/}

                    <View style={style.imagemPerfilPlaceholder} />

                </View>
            </TouchableOpacity>
        </View>
    )
}