import { Pressable, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { style } from "./styles";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type TopBarProps = {
    titulo: string;
    backButton?: boolean;
}

export default function TopBar({ titulo, backButton = false }: TopBarProps) {
    const router = useRouter();

    return (
        <View style={style.topBar}>
            {backButton && (
                <Pressable
                    onPress={() => {
                        // O setTimeout é ótimo para testar. Para produção, pode remover ou usar um valor baixo (ex: 150ms)
                        // para garantir que o feedback visual seja visto antes da navegação.
                        setTimeout(() => router.back(), 150);
                    }}
                    // Para o efeito ripple 'borderless' funcionar, o componente não deve ter um 'backgroundColor'.
                    android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', borderless: true, radius: 25 }}
                    // Este estilo de função adiciona um feedback de opacidade para o iOS
                    style={({ pressed }) => [
                        { padding: 12, marginRight: 8 }, // Estilo base
                        // No iOS, isso cria um efeito de opacidade. No Android, o ripple tem prioridade.
                        pressed && { opacity: 0.7 }
                    ]}
                ><FontAwesome6 name="arrow-left" size={22} color="black" /></Pressable>
            )}
            <Text style={style.texto}>{titulo}</Text>
        </View>
    )
}