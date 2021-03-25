import axios from 'axios';
import { demoKey, baseUrl } from '@config';

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3

export function getPhotos(earthDate) {
    const instance = axios.create({
        baseURL: baseUrl,
        params: {
            api_key: demoKey,
            earth_date: earthDate,
        },
    });

    return instance.get();
}
