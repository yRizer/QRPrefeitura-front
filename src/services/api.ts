import axios from 'axios';
import { SERVER_URL } from '../config/serverInfo';


/**
 * * Configuração da API
 */
export const api = axios.create({
    baseURL: SERVER_URL
});

type getQRCodeInfosProps = {
    code: string;
}

/**
 * * Função para pegar as informações do QRCode
 * * @param {string} code - Código do QRCode
 * * @return Informações do QRCode
 */
export async function getQRCodeInfos({ code }: getQRCodeInfosProps){

    // Link final da api: /qr-info/:qrcode
    try {
        const response = await api.get(`/qr-info/${code}`);
        let { data } = response.data;
        return data[0];
    } catch (err) {
        return console.log(err);
    }
}

