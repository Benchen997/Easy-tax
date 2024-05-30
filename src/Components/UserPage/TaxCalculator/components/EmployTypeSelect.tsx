import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface EmploymentTypeSelectProps {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
}

export default function EmploymentTypeSelect({ value, onChange}: EmploymentTypeSelectProps) {

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="employment-type-select-label">Employment Type</InputLabel>
                <Select
                    labelId="employment-type-select-label"
                    id="employment-type-select"
                    value={value}
                    label="Employment Type"
                    onChange={onChange}
                >
                    <MenuItem value="not given">
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
        </div>
    );
}



