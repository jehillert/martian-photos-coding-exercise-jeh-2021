// modified from https://andrewstevens.dev/posts/useMarsApi-react-hook/
import { useState, useEffect } from 'react';
import { getPhotos } from '@api';

function useMarsApi(skip = false) {
    const [photos, setPhotos] = useState();
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState();
    const [refreshIndex, setRefreshIndex] = useState(0);
    const [earthDate, setEarthDate] = useState(null);

    const refresh = () => {
        setRefreshIndex(refreshIndex + 1);
    };

    useEffect(() => {
        let cancelled = false;
        if (skip || earthDate === null) {
            setPhotos(null);
            setLoading(false);
            setLoaded(false);
        } else {
            setLoading(true);
            getPhotos(earthDate)
                .get()
                .then(({ data: { photos } }) => {
                    if (!cancelled) {
                        setPhotos(photos);
                        setLoading(false);
                        setLoaded(true);
                    }
                })
                .catch(error => {
                    setLoading(false);
                    if (error.response) {
                        setError(error.response.data);
                    } else {
                        setError(error.message);
                    }
                });
        }
        return () => {
            cancelled = true;
        };
    }, [earthDate, refreshIndex]);

    return { photos, loading, loaded, error, refresh, setEarthDate, setPhotos };
}

export default useMarsApi;
