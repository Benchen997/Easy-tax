import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmploymentTypeSelector from "./inputs/EmploymentTypeSelector";
import {SelectChangeEvent} from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import {useEffect, useState} from "react";

interface EmploymentTypeAccordionProps {
    employmentType: string;
    handleEmployTypeChange: (event: SelectChangeEvent<string>) => void;
    reStart: boolean;
}
export default function EmploymentTypeAccordion(
    {
        employmentType,
        handleEmployTypeChange,
        reStart
    }: EmploymentTypeAccordionProps) {
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        setExpand(reStart);
    }, [reStart]);
    return (
        <>
            <Accordion className="accordion-container"
                            defaultExpanded={expand}
            >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="employ-accordion"
                  id="employ-accordion"
                >
                  <h1 className='text-2xl text-gray-700 font-bold'>
                      First, please tell me your current employment type</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant={"fullWidth"} orientation={"horizontal"}/>
                    <div className="w-full flex p-10 flex-col md:flex-row justify-center items-center">
                        <EmploymentTypeSelector value={employmentType}
                                      onChange={handleEmployTypeChange} />
                    </div>
                </AccordionDetails>
          </Accordion>
        </>
    );
}