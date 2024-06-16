import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import EmploymentTypeSelect from "./Inputs/EmployTypeSelect";

interface EmploymentTypeAccordionProps {
    disabled: boolean;
    children: React.ReactNode;
}
export default function EmploymentTypeAccordion({disabled, children}: EmploymentTypeAccordionProps) {
    return (
        <>
        <Accordion disabled={disabled} sx={{minWidth:"60%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h1 className='text-2xl text-gray-700 font-bold'>{children}</h1>
            </AccordionSummary>
            <AccordionDetails>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <EmploymentTypeSelect/>
                </div>
            </AccordionDetails>
          </Accordion>
        </>
    );
}