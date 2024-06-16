import React from 'react';
import {useSelector} from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import IncomeTypeSelection from './Inputs/IncomeTypeSelection';
import {WorkingTimeInput} from './Inputs/WorkingTimeInput';

interface EmploymentTypeAccordionProps {
    disabled: boolean;
    children: React.ReactNode;
}

export function IncomeTypeAccordion({ disabled, children }: EmploymentTypeAccordionProps) {
    // @ts-ignore
    const employmentType = useSelector((state) => state.userInput.employmentType);

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
                        {employmentType !== 'Casual' && employmentType !== 'Contractor' && employmentType !== 'Part-time' ? (
                        <IncomeTypeSelection />
                    ) : employmentType === 'Contractor' ? (
                        <WorkingTimeInput timeUnit="Days" />
                    ) : (
                        <>
                            <WorkingTimeInput timeUnit="Days" />
                            <WorkingTimeInput timeUnit="Hours" />
                        </>
                    )}
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
