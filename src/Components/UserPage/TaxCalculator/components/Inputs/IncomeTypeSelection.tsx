import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {setIncomeType} from '../../../../../Features/userInputSlice';
import {useDispatch, useSelector} from "react-redux";


export default function IncomeTypeSelection() {
    const dispatch = useDispatch();
    // @ts-ignore
    const value = useSelector((state) => state.userInput.incomeType);

    // @ts-ignore
    const handleChange = (event) => {
        dispatch(setIncomeType(event.target.value));
    };

    return (
        <FormControl sx={{ m: 1, minWidth:"80%" }}>
            <InputLabel id="income-type-select-label">Income Type</InputLabel>
            <Select
              labelId="income-type-select-label"
              id="income-type-select"
              label="Income Type"
              value = {value}
              onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Annual'>Annual</MenuItem>
                <MenuItem value='Monthly'>Monthly</MenuItem>
                <MenuItem value='Fortnightly'>Fortnightly</MenuItem>
                <MenuItem value='Weekly'>Weekly</MenuItem>
                <MenuItem value='Daily'>Daily</MenuItem>
                <MenuItem value='Hourly'>Hourly</MenuItem>
            </Select>
            <FormHelperText>Choose your income type</FormHelperText>
        </FormControl>
    );
}