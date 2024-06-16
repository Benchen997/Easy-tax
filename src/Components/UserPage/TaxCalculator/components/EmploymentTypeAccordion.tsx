import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmploymentTypeSelector from "./inputs/EmploymentTypeSelector";
import {SelectChangeEvent} from "@mui/material/Select";

interface EmploymentTypeAccordionProps {
    employmentType: string;
    handleEmployTypeChange: (event: SelectChangeEvent<string>) => void;
}
export default function EmploymentTypeAccordion(
    {
        employmentType,
        handleEmployTypeChange
    }: EmploymentTypeAccordionProps) {
    return (
        <>
            <Accordion sx={{minWidth:"80%"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h1 className='text-2xl text-gray-700 font-bold'>
                      First, please tell me your current employment type</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        <EmploymentTypeSelector value={employmentType}
                                      onChange={handleEmployTypeChange} />
                    </div>
                </AccordionDetails>
          </Accordion>
        </>
    );
}