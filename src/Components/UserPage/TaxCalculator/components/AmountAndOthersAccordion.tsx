import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AmountInput from "./inputs/AmountInput";
import DeductionInput from "./inputs/DeductionInput";
import {TaxCreditInput} from "./inputs/TaxCreditInput";

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
}

export default function AmountAndOthersAccordion({
    userInput,
    handleAmountChange,
    handleDeductionChange,
    handleTaxCreditChange}: AmountAndOthersAccordionProps) {
    return (
        <>
            <Accordion sx={{minWidth:"80%"}}
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
                    <h2>
                            Tell me about your income and any applicable deductions or tax credits.
                    </h2>
                    <h2>
                           For any question related to deductions or tax credits, please refer to the
                        <a href={"#about"} className="to-about-hyperlink"> about
                        </a> section.
                    </h2>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        <AmountInput value={userInput.income}
                                 type={userInput.incomeType}
                                 amountOnChange={handleAmountChange} />
                        <DeductionInput value={userInput.deductions}
                                        deductionOnChange={handleDeductionChange}/>

                         <TaxCreditInput value={userInput.taxCredits}
                                    taxCreditOnchange={handleTaxCreditChange}/>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}