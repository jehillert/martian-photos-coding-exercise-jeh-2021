import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import { EarthDatePicker } from '@components';
// import { getPhotos } from '@api';
import { getRandomInt } from '@utils';
import { useMarsApi } from '@hooks';
import CircularProgress from '@material-ui/core/CircularProgress';

const S = {};

S.Card = styled(Card)`
    border-radius: 1rem;
    margin: 4rem;
    display: flex;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 16px 13px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 16px 13px rgba(0, 0, 0, 0);
`;

S.CardGrid = styled.div`
    display: grid;
    grid-template-areas:
        'image-area calendar-area'
        'image-area calendar-area';
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
`;

S.CardMedia = styled.div`
    grid-area: image-area;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(81, 28, 28, 1);
    width: 19.375rem;
`;

S.Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
`;

function ImageCard() {
    const [randomPhoto, setRandomPhoto] = useState('');
    const { loading, photos, setEarthDate } = useMarsApi();

    useEffect(() => {
        console.log(`%cphotos: ${photos}`, 'color: darkred; background-color: gold');
        if (photos?.length) {
            const randomPhoto = photos[getRandomInt(0, photos.length)]['img_src'];
            setRandomPhoto(randomPhoto);
            console.log(randomPhoto);
        }
    }, [photos]);

    const handleCallback = date => {
        setEarthDate(date);
    };

    return (
        <S.Card>
            <S.CardGrid>
                <S.CardMedia>
                    {loading ? <CircularProgress color="secondary" /> : <S.Img src={randomPhoto} />}
                </S.CardMedia>
                <EarthDatePicker callback={handleCallback} />
            </S.CardGrid>
        </S.Card>
    );
}

export default ImageCard;
