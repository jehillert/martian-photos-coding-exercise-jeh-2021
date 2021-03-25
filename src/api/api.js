import axios from 'axios';
import { demoKey, baseUrl } from '@config';

export function getPhotos(earthDate) {
    const instance = axios.create({
        baseURL: baseUrl,
        params: {
            api_key: demoKey,
            earth_date: earthDate,
        },
    });

    return instance;
}
