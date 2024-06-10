import CalculateIcon from "@mui/icons-material/Calculate";
import {Button} from "@mui/material";
import React from "react";


interface CalculateButtonProps {
    isSubmitDisabled: boolean;
    handleSubmit: () => void;
    children: React.ReactNode;

}
export function CalculateButton({isSubmitDisabled, handleSubmit, children}: CalculateButtonProps) {


    return (
        <div>
            <Button
             disabled={isSubmitDisabled}
             onClick={handleSubmit}
             sx={{m:1,maxHeight:56,minHeight:56, minWidth:200}}
             variant="contained" endIcon={<CalculateIcon />}>
                    {children}
            </Button>
        </div>
    );
}