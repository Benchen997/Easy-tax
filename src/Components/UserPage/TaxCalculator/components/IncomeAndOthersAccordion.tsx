import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AmountInput from "./Inputs/AmountInput";
import {CalculateButton} from "./Inputs/CalculateButton";
import {submitUserInput} from '../../../../Features/userInputSlice';
import {CircularProgress} from '@mui/material';

interface EmploymentTypeAccordionProps {
    disabled: boolean;
    children: React.ReactNode;
}

export default function IncomeAndOthersAccordion({ disabled, children }: EmploymentTypeAccordionProps) {
    const dispatch = useDispatch();
    // @ts-ignore
    const userInput = useSelector((state) => state.userInput);
    // @ts-ignore
    const isLoading = useSelector((state) => state.userInput.isLoading);
    // @ts-ignore
    const isSubmitDisabled = useSelector((state) => state.userInput.isSubmitDisabled);

    const handleSubmit = async () => {
        try {
            // @ts-ignore
            dispatch(submitUserInput(userInput));
        } catch (error) {
            console.error('Error calculating tax:', error);
        }
    };
    return (
        <>
            <Accordion disabled={disabled} sx={{ minWidth: "60%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h1 className='text-2xl text-gray-700 font-bold'>{children}</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <AmountInput />
                        <CalculateButton
                            isSubmitDisabled={isSubmitDisabled}
                            handleSubmit={handleSubmit}
                        >
                            {isLoading ? (
                                <CircularProgress color="inherit" size={24} />
                            ) : (
                                'Calculate'
                            )}
                        </CalculateButton>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
