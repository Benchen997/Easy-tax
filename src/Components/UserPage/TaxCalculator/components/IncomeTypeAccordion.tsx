import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {WorkingTimeInput} from "./inputs/WorkingTimeInput";
import IncomeTypeSelection from "./inputs/IncomeTypeSelection";
import {SelectChangeEvent} from "@mui/material/Select";
import Divider from "@mui/material/Divider";

interface IncomeTypeAccordionProps {
    userInput: {
        employmentType: string;
        incomeType: string;
        isBranched: boolean;
        workLength: {
            hoursPerDay: number;
            daysPerWeek: number;
        }
    };
    handleIncomeTypeChange: (event: SelectChangeEvent) => void;
    handleWorkingTimeChange: (value: number, timeUnit: string) => void;
}

export function IncomeTypeAccordion({
        userInput,
        handleIncomeTypeChange,
        handleWorkingTimeChange}:IncomeTypeAccordionProps){
    return (
        <>
            <Accordion className="accordion-container"
                       defaultExpanded={false}
                       expanded={userInput.employmentType !== ''}
                       disabled={userInput.employmentType === ''}
            >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h1 className='text-2xl text-gray-700 font-bold'>
                      Now, tell me more about your income type </h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant={"fullWidth"} orientation={"horizontal"}/>
                    <div className="w-full flex p-10 flex-col md:flex-row justify-center items-center">
                        {/*selective rendering: if employment type = contractor/casual/part-time, show
                         working time input instead of income type */}
                        {
                            userInput.isBranched && userInput.employmentType !== 'Contractor'
                            ? <WorkingTimeInput timeUnit={"Hours"} value={userInput.workLength.hoursPerDay}
                                                  workingTimeOnChange={handleWorkingTimeChange}/>
                            : null
                        }
                        {
                            userInput.isBranched
                            ? <WorkingTimeInput timeUnit={"Days"} value={userInput.workLength.daysPerWeek}
                                                  workingTimeOnChange={handleWorkingTimeChange}/>
                            : (<IncomeTypeSelection value={userInput.incomeType} onChange={handleIncomeTypeChange} />)
                        }
                    </div>
                </AccordionDetails>
          </Accordion>
        </>
    );
}