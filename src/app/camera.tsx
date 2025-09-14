import { useRef } from "react";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import TopBar from "../components/topBar";


export default function CameraScreen() {
    const router = useRouter();
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const qrCodeLock = useRef(false);

    function handleQRCodeScanned(data: string) {
        console.log('QR Code scanned:', data);
        // router.push({ pathname: './', params: { QRCode: data } });
    }

    return (
        <SafeAreaView style={style.container}>
            <TopBar titulo={"Leitor de QR Code"} backButton={true}/>
            {/* Este container ocupará o espaço restante e servirá de referência para o posicionamento absoluto */}
            <View style={{ flex: 1 }}>
                <CameraView style={StyleSheet.absoluteFillObject} onBarcodeScanned={({ data }) => {
                    if (data && !qrCodeLock.current) {
                        qrCodeLock.current = true
                        setTimeout(() => handleQRCodeScanned(data), 500)
                    }
                }} />

                {/* Overlay: uma View por cima da câmera com uma caixa de scan no centro */}
                <View style={style.overlay}><View style={style.scanBox} /></View>
            </View>
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
