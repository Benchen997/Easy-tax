import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import {setWorkLength} from '../../../../../Features/userInputSlice';

interface WorkingTimeInputProps {
    timeUnit: string;
}

export function WorkingTimeInput({ timeUnit }: WorkingTimeInputProps) {
    const dispatch = useDispatch();
    // @ts-ignore
    const value = useSelector((state) => state.userInput.workLength[timeUnit === 'Days' ? 'daysPerWeek' : 'hoursPerDay']);
    const [error, setError] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const isValidNumber = /^\d*\.?\d*$/.test(inputValue);
        if (isValidNumber) {
            setError(false);
            const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
            dispatch(setWorkLength({ value: numericValue, timeUnit }));
        } else {
            setError(true);
        }
    };

    return (
        <FormControl sx={{ m: 1, minWidth:"40%" }} variant="outlined" error={error}>
            <InputLabel htmlFor="outlined-adornment-working-time">Working {timeUnit}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-working-time"
                value={value === 0 ? '' : value.toString()}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">{timeUnit}</InputAdornment>}
                label={`Working ${timeUnit}`}
                autoComplete="false"
            />
            {error ? (
                <FormHelperText>Incorrect entry. Only numbers are allowed.</FormHelperText>
            ) : (
                <FormHelperText>
                    Total Working {timeUnit} {timeUnit === 'Days' ? 'Per Week' : 'Per Day'} &nbsp;
                    <a href="#working-time" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <HelpIcon sx={{ fontSize: 15 }} />
                    </a>
                </FormHelperText>
            )}
        </FormControl>
    );
}
