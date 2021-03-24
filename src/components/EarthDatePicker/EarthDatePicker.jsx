import React, { useEffect, useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';

function EarthDatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    console.log(dayjs(selectedDate).format('YYYY-MM-DD'));
  }, [selectedDate]);

  return (
    <>
      <KeyboardDatePicker
        disableToolbar
        autoOk
        value={selectedDate}
        disableFuture
        showTodayButton
        onChange={date => handleDateChange(date)}
      />
    </>
  );
}

export default EarthDatePicker;
