import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@mui/material';
import {setEmploymentType} from '../../../../../Features/userInputSlice';

export default function EmploymentTypeSelect() {
    const dispatch = useDispatch();
    // @ts-ignore
    const value = useSelector((state) => state.userInput.employmentType);

    // @ts-ignore
    const handleChange = (event) => {
        dispatch(setEmploymentType(event.target.value));
    };

    return (
        <FormControl sx={{ m: 1, minWidth:"80%"}}>
            <InputLabel id="employment-type-select-label">Employment Type</InputLabel>
            <Select
                labelId="employment-type-select-label"
                id="employment-type-select"
                value={value}
                label="Employment Type"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Full-time'>Full-time</MenuItem>
                <MenuItem value='Part-time'>Part-time</MenuItem>
                <MenuItem value='Casual'>Casual</MenuItem>
                <MenuItem value='Contractor'>Contractor</MenuItem>
                <MenuItem value='Self-employed'>Self-employed</MenuItem>
            </Select>
            <FormHelperText>Choose your employment type</FormHelperText>
        </FormControl>
    );
}



