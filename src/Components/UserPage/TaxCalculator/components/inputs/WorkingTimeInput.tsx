import HelpIcon from "@mui/icons-material/Help";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";
import React, {useState} from "react";

interface WorkingTimeInputProps {
    timeUnit: string;
    value: number;
    workingTimeOnChange: (value: number, timeUnit: string) => void;
}
export function WorkingTimeInput({timeUnit, workingTimeOnChange, value}:WorkingTimeInputProps) {
    const [error, setError] = useState(false);
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const isValidNumber = /^\d*\.?\d*$/.test(inputValue);
        if (isValidNumber) {
            setError(false);
            const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
            //validate input is a number and then pass back to parent.
            workingTimeOnChange(numericValue, timeUnit);
        } else {
            setError(true);
        }
    }
    return (
        <>
            <FormControl sx={{ m: 1, maxWidth:"80%"}} variant="outlined" error={error}>
                <InputLabel htmlFor="outlined-adornment-working-time">Working {timeUnit}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-working-time"
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">{timeUnit}</InputAdornment>}
                    label={`Working ${timeUnit}`}
                    autoComplete = 'false'
                />
                {error ? (
                    <FormHelperText>Incorrect entry. Only numbers are allowed.</FormHelperText>
                ) : (
                    <FormHelperText> Total Working {timeUnit} {timeUnit=== 'Days' ? 'Per Week' : 'Per Day'} &nbsp;
                        <a href="#working-time" style={{textDecoration: 'none', color: 'inherit'}}>
                            <HelpIcon sx={{fontSize: 15}}/>
                        </a>
                    </FormHelperText>

                )}
            </FormControl>
        </>
    );
}