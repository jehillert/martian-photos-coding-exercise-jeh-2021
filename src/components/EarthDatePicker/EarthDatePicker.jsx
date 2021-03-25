import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';

const S = {};

S.Container = styled.div`
    grid-area: calendar-area;
    align-self: center;
    background-color: black;
`;

const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: red,
    },
});

function EarthDatePicker({ callback, className }) {
    const [selectedDate, handleDateChange] = useState(dayjs());

    useEffect(() => {
        callback(dayjs(selectedDate).format('YYYY-MM-DD'));
    }, [selectedDate]);

    return (
        <ThemeProvider theme={defaultMaterialTheme}>
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
        </ThemeProvider>
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
