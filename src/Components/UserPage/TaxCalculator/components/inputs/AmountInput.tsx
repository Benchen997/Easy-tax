import React, {useState} from 'react';
import {InputAdornment, OutlinedInput} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from '@mui/material/FormHelperText';

interface AmountInputProps {
    value: number;
    type:string;
    amountOnChange: (value: number) => void;
}

export default function AmountInput({ value, type,amountOnChange }: AmountInputProps) {
    const [error, setError] = useState(false);
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const isValidNumber = /^\d*\.?\d*$/.test(inputValue);

        if (isValidNumber) {
            setError(false);
            const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
            //validate input is a number and then pass back to parent.
            amountOnChange(numericValue);
        } else {
            setError(true);
        }
    }


    return (
        <>
            <FormControl sx={{ m: 1, maxWidth:"80%"}} variant="outlined" error={error}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">$</InputAdornment>}
                    label="Amount"
                    autoComplete = 'false'
                />
                {error ? (
                    <FormHelperText>Incorrect entry. Only numbers are allowed.</FormHelperText>
                ) : (
                    <FormHelperText>Your {type} Income</FormHelperText>
                )}
            </FormControl>
        </>
    );
}

