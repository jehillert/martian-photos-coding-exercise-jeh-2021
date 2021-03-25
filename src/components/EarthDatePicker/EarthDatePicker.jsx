import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';

const S = {};

S.Container = styled.div`
    grid-area: calendar-area;
    margin: auto;
    background-color: black;
`;

function EarthDatePicker({ callback, className }) {
    const [selectedDate, handleDateChange] = useState(dayjs());

    useEffect(() => {
        callback(dayjs(selectedDate).format('YYYY-MM-DD'));
    }, [selectedDate]);

    return (
        <S.Container className={className}>
            <KeyboardDatePicker
                variant="static"
                disableToolbar
                autoOk
                value={selectedDate}
                disableFuture
                showTodayButton
                onChange={date => handleDateChange(date)}
            />
        </S.Container>
    );
}

EarthDatePicker.defaultProps = {
    className: '',
};

EarthDatePicker.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default EarthDatePicker;
