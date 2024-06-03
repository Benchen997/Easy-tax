import CalculateIcon from "@mui/icons-material/Calculate";
import {Button} from "@mui/material";

interface CalculateButtonProps {
    isSubmitDisabled: boolean;
    handleSubmit: () => void;

}
export function CalculateButton({isSubmitDisabled, handleSubmit}: CalculateButtonProps) {
    return (
        <div>
            <Button
             disabled={isSubmitDisabled}
             onClick={handleSubmit}
             sx={{m:1,maxHeight:56,minHeight:56, minWidth:200}}
             variant="contained" endIcon={<CalculateIcon />}>
            Calculate
          </Button>
        </div>
    );
}