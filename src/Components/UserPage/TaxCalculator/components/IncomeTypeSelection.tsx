import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface IncomeTypeSelectionProps {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;

}

export default function IncomeTypeSelection({onChange, value} : IncomeTypeSelectionProps) {
    return (
        <div>
            {/* m: margin, 1: 1rem, minWith = min-width in css*/}
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="income-type-select-label">Income Type</InputLabel>
                <Select
                  labelId="income-type-select-label"
                  id="income-type-select"
                  label="Income Type"
                  value = {value}
                  onChange={onChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='annual'>Annual</MenuItem>
                    <MenuItem value='monthly'>Monthly</MenuItem>
                    <MenuItem value='fortnightly'>Fortnightly</MenuItem>
                    <MenuItem value='weekly'>Weekly</MenuItem>
                    <MenuItem value='hourly'>Hourly</MenuItem>
                </Select>
                <FormHelperText>Choose your income type</FormHelperText>
            </FormControl>

        </div>
    );
}