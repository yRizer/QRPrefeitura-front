import { useRef, useState } from "react";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import ModalWarning from "../components/cameraModals";
import TopBar from "../components/topBar";
import { isValidQRCode } from "../validators/qrValidator";

export default function CameraScreen() {
    const router = useRouter();
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const qrCodeLock = useRef(false);

    /**
     * Função executada após leitura do código QR
     * 
     * @param {string} data - Dados retornados do leitor
     */
    function handleQRCodeScanned(data: string) {
        console.log('QR Code scanned:', data);

        if (!isValidQRCode(data)) {
            setIsModalVisible(true);
            // O lock será liberado quando o modal for fechado, permitindo um novo scan.
        } else {
            // Se o QR Code for válido, você pode navegar.
            // Ex: router.push({ pathname: './details', params: { QRCode: data } });
            console.log("QR Code válido, navegando...");
            // Para permitir novos scans ao voltar para esta tela, o lock deve ser liberado.
            // Uma boa abordagem é usar o hook `useFocusEffect` da `expo-router`.
            qrCodeLock.current = false;
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <TopBar titulo={"Leitor de QR Code"} backButton={true} />
            <View style={{ flex: 1 }}>
                <CameraView style={StyleSheet.absoluteFillObject} onBarcodeScanned={({ data }) => {
                    if (data && !qrCodeLock.current) {
                        qrCodeLock.current = true; // Bloqueia novos scans imediatamente
                        handleQRCodeScanned(data);
                    }
                }} />

                <View style={style.overlay}>
                    <View style={style.scanBox} />
                </View>
            </View>
            <ModalWarning
                visible={isModalVisible}
                onClose={() => {
                    // Fecha o Modal
                    setIsModalVisible(false)

                    // Espera 500 milesimos para desbloquear o leitor de QR Code
                    setTimeout(function () {
                        qrCodeLock.current = false
                    }, 1000)
                }}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040'
    },
    scanBox: {
        width: 350,
        height: 350,
        borderRadius: 12,
        backgroundColor: '#ffffff10',
    }
})
