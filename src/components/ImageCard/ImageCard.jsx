import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import { EarthDatePicker } from '@components';
import { getPhotos } from '@api';
import { getRandomInt } from '@utils';

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

S.CardMedia = styled(CardMedia)`
    background-color: rgba(81, 28, 28, 1);
    grid-area: image-area;
    min-width: 19.375rem;
`;

function ImageCard() {
    const [randomPhoto, setRandomPhoto] = useState('');

    const handleCallback = async date => {
        const photos = await getPhotos(date);
        const randomIndex = getRandomInt(0, photos.length);
        setRandomPhoto(photos[randomIndex]['img_src']);
        console.log(randomIndex);
    };

    return (
        <S.Card>
            <S.CardGrid>
                <S.CardMedia image={randomPhoto} />
                <EarthDatePicker callback={handleCallback} />
            </S.CardGrid>
        </S.Card>
    );
}

export default ImageCard;
