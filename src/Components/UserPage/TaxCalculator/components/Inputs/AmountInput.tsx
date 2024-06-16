import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import {setIncome} from '../../../../../Features/userInputSlice';

export default function AmountInput() {
    const dispatch = useDispatch();
    // @ts-ignore
    const value = useSelector((state) => state.userInput.income);
    // @ts-ignore
    const type = useSelector((state) => state.userInput.incomeType);
    const [error, setError] = React.useState(false);

    // @ts-ignore
    const handleChange = (event) => {
        const inputValue = event.target.value;
        const isValidNumber = /^\d*\.?\d*$/.test(inputValue);

        if (isValidNumber) {
            setError(false);
            const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
            // Dispatch the action to update the Redux store
            dispatch(setIncome(numericValue));
        } else {
            setError(true);
        }
    };

    return (
        <div>
            <FormControl sx={{ m: 1, maxWidth: 200 }} variant="outlined" error={error}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">$</InputAdornment>}
                    label="Amount"
                    autoComplete='false'
                />
                {error ? (
                    <FormHelperText>Incorrect entry. Only numbers are allowed.</FormHelperText>
                ) : (
                    <FormHelperText>Your {type} Income</FormHelperText>
                )}
            </FormControl>
        </div>
    );
}


