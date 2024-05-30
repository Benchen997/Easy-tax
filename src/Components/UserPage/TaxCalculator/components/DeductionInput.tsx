import FormControl from "@mui/material/FormControl";
import React, {useState} from "react";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import HelpIcon from '@mui/icons-material/Help';

interface DeductionInputProps {
    value:number;
    deductionOnChange: (value:number) => void;
}

export default function DeductionInput({value,deductionOnChange}:DeductionInputProps) {

    const [error, setError] = useState(false);
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const isValidNumber = /^\d*\.?\d*$/.test(inputValue);
        if (isValidNumber) {
            setError(false);
            const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
            //validate input is a number and then pass back to parent.
            deductionOnChange(numericValue);
        } else {
            setError(true);
        }
    }
    return (
        <div>
            <FormControl sx={{ m: 1, maxWidth: 200 }} variant="outlined" error={error}>
                <InputLabel htmlFor="outlined-adornment-deduction">Deduction</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-deduction"
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">$</InputAdornment>}
                    label="Deduction"
                    autoComplete = 'false'
                />
                {error ? (
                    <FormHelperText>Incorrect entry. Only numbers are allowed.</FormHelperText>
                ) : (
                    <FormHelperText> Total Tax Deductions &nbsp;
                        <a href="#tax-deduction" style={{textDecoration: 'none', color: 'inherit'}}>
                            <HelpIcon sx={{fontSize: 15}}/>
                        </a>
                    </FormHelperText>

                )}
            </FormControl>
        </div>
    );
}