import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import { EarthDatePicker } from '@components';
import { getPhotos } from '@api';
import { getRandomInt } from '@utils';
// import CircularProgress from '@material-ui/core/CircularProgress';

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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(81, 28, 28, 1);
    grid-area: image-area;
    width: 19.375rem;
`;

S.Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
`;

function ImageCard() {
    // const sorrySource = 'https://www.nicepng.com/png/full/125-1258179_were-sorry-oops-we-re-sorry.png';
    const [randomPhoto, setRandomPhoto] = useState('');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (photos.length) {
            const randomPhoto = photos[getRandomInt(0, photos.length)]['img_src'];
            setRandomPhoto(randomPhoto);
            console.log(randomPhoto);
        }
    }, [photos]);

    const handleCallback = async date => {
        const newPhotos = await getPhotos(date);
        setPhotos(newPhotos);
    };

    return (
        <S.Card>
            <S.CardGrid>
                <S.CardMedia>{photos.length ? <S.Img src={randomPhoto} /> : <div />}</S.CardMedia>
                <EarthDatePicker callback={handleCallback} />
            </S.CardGrid>
        </S.Card>
    );
}

export default ImageCard;
