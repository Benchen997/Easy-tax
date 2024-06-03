import {calculateTax} from "../../utils/taxCalculator"
import EmployTypeSelect from "./components/EmployTypeSelect";
import IncomeTypeSelection from "./components/IncomeTypeSelection";
import {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import AmountInput from "./components/AmountInput";
import DeductionInput from "./components/DeductionInput";
import {TaxCreditInput} from "./components/TaxCreditInput";
import {Button} from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';

export default function TaxCalculatorSection() {
    const [userInput, setUserInput] =
        useState({
                employmentType: '',
                incomeType: '',
                income: 0,
                deductions: 0,
                taxCredits: 0
            });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [result, setResult] = useState(0);
    function validateUserInput() {
         return !(userInput.employmentType === ""
             || userInput.incomeType === ""
             || userInput.income === 0);

    }
    // when user input changes, check if the submit button should be disabled
    useEffect(() => {
        setIsSubmitDisabled(!validateUserInput());
    }, [userInput]);

    async function handleSubmit() {
        try {
            const tax = calculateTax(userInput);
            setResult(tax);
        } catch (error) {
            console.error("Error calculating tax:", error);
        }
    }

    function handleEmployTypeChange(event: SelectChangeEvent) {
        const newValue:string = event.target.value;
        setUserInput( (prev) => {
                const updatedUserInput = {
                    ...prev,
                    employmentType: newValue
                };
                console.log(updatedUserInput);
                return updatedUserInput;
            }
        );
    }
    function handleIncomeTypeChange(event: SelectChangeEvent) {
        const newValue:string = event.target.value;
        setUserInput( (prev) => {
                const updatedUserInput = {
                    ...prev,
                    incomeType:newValue
                }
                console.log(updatedUserInput);
                return updatedUserInput;
            }
        );
    }
    function handleAmountChange(value: number) {
        setUserInput(prev => ({
            ...prev,
            income: value
        }));
        console.log(userInput);
    }
    function handleDeductionChange(value:number) {
        setUserInput( prev => ({...prev, deductions: value}));
    }
    function handleTaxCreditChange(value:number) {
        setUserInput(prev =>({...prev, taxCredits: value}));
    }

    return (
        <section className='bg-white p-3 md:p-20 flex justify-center items-center flex-col'>
            {/*@ TODO:
                1. employment type selection: [full-time, part-time, self-employed, casual, contractor ]
                2. Income type selection [Annual, Monthly, Fortnightly, Weekly, Hourly]
                3. Input form: [Income, Deductions, Tax Credits and Concessions, submit button]
                4. Calculation
                5. loading spinner
                6. Result display-> other modules
             */}
            <h1 className='text-2xl mb-2 md:text-3xl font-bold'>Tax Calculator</h1>

            <div className='bg-gray-100 flex flex-col justify-center items-center
                            w-4/5 md:w-2/3 p-12'>
                <div className='selector-container flex flex-col md:flex-row'>
                    <EmployTypeSelect value={userInput.employmentType}
                                      onChange={handleEmployTypeChange} />

                    <IncomeTypeSelection value={userInput.incomeType}
                                         onChange={handleIncomeTypeChange}/>
                </div>

                <div className='mt-2 flex flex-col md:flex-row'>
                    <AmountInput value={userInput.income}
                             type={userInput.incomeType}
                             amountOnChange={handleAmountChange} />
                    <DeductionInput value={userInput.deductions}
                                    deductionOnChange={handleDeductionChange}/>

                </div>

                <div className='mt-2 flex flex-col md:flex-row'>
                     <TaxCreditInput value={userInput.taxCredits}
                                taxCreditOnchange={handleTaxCreditChange}/>

                     <Button
                         disabled={isSubmitDisabled}
                         onClick={handleSubmit}
                         sx={{m:1,maxHeight:56,minHeight:56, minWidth:200}}
                         variant="contained" endIcon={<CalculateIcon />}>
                        Calculate
                      </Button>
                </div>
                {result !== 0 && (
                    <div className="mt-4">
                        <h2>Your Calculated Tax: ${result}</h2>
                    </div>
                )}

            </div>
        </section>
    );
}
