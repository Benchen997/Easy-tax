import {Accordion, AccordionDetails, AccordionSummary, CircularProgress} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AmountInput from "./inputs/AmountInput";
import DeductionInput from "./inputs/DeductionInput";
import {TaxCreditInput} from "./inputs/TaxCreditInput";
import Divider from "@mui/material/Divider";
import {CalculateButton} from "./inputs/CalculateButton";

interface AmountAndOthersAccordionProps {
    userInput: {
        income: number;
        incomeType: string;
        deductions: number;
        taxCredits: number;
    };
    handleAmountChange: (value: number) => void;
    handleDeductionChange: (value: number) => void;
    handleTaxCreditChange: (value: number) => void;
    isSubmitDisabled: boolean;
    handleSubmit: () => void;
    isLoading: boolean;

}

export default function AmountAndOthersAccordion({
    userInput,
    handleAmountChange,
    handleDeductionChange,
    handleTaxCreditChange,
    isSubmitDisabled,
    handleSubmit,
    isLoading

}: AmountAndOthersAccordionProps) {
    return (
        <>
            <Accordion className="accordion-container"
                          defaultExpanded={false}
                          expanded={userInput.incomeType !== ''}
                          disabled={userInput.incomeType === ''}
            >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h1 className='text-2xl text-gray-700 font-bold'>
                      We are almost done!</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant={"fullWidth"} orientation={"horizontal"}/>
                    <div className="w-full mt-3 flex flex-col justify-center items-center">
                        <h2>
                            Tell me about your income and any applicable deductions or tax credits.
                        </h2>
                        <h3>
                            For any question related to deductions or tax credits, please refer to the
                            <a href={"#about"} className="to-about-hyperlink"> about
                            </a> section.
                        </h3>
                        <AmountInput value={userInput.income}
                                     type={userInput.incomeType}
                                     amountOnChange={handleAmountChange}/>
                        <DeductionInput value={userInput.deductions}
                                        deductionOnChange={handleDeductionChange}/>

                        <TaxCreditInput value={userInput.taxCredits}
                                        taxCreditOnchange={handleTaxCreditChange}/>
                        <CalculateButton isSubmitDisabled={isSubmitDisabled} handleSubmit={handleSubmit}>
                            {isLoading
                                ? <CircularProgress color="inherit" size={24}/>
                                : "Calculate"
                            }
                        </CalculateButton>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}