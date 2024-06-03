import {calculateTax} from "../../utils/taxCalculator"
import EmployTypeSelect from "./components/EmployTypeSelect";
import IncomeTypeSelection from "./components/IncomeTypeSelection";
import {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import AmountInput from "./components/AmountInput";
import DeductionInput from "./components/DeductionInput";
import {TaxCreditInput} from "./components/TaxCreditInput";
import {CalculateButton} from "./components/CalculateButton";
import BranchWrapper from "./BranchWrapper";

export default function TaxCalculatorSection() {
    const [userInput, setUserInput] =
        useState({
                employmentType: '',
                incomeType: '',
                isBranched: false,
                workLength: {
                    hoursPerDay: 0,
                    daysPerWeek: 0
                },
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
            console.log(userInput);
            const tax = calculateTax(userInput);
            setResult(tax);
        } catch (error) {
            console.error("Error calculating tax:", error);
        }
    }

    function handleEmployTypeChange(event: SelectChangeEvent) {
        const newValue:string = event.target.value;
        if (newValue === 'Contractor') {
            setUserInput(prev => ({
                ...prev,
                employmentType: newValue,
                isBranched: true,
                incomeType: 'Daily'
            }));
            return;
        }
        if (newValue === 'Casual' || newValue === 'Part-time') {
            setUserInput(prev => ({
                ...prev,
                employmentType: newValue,
                isBranched: true,
                incomeType: 'Hourly'
            }));
            return;
        }
        setUserInput(prev => ({
            ...prev,
            employmentType: newValue,
        }));

    }
    function handleWorkingTimeChange(value:number, timeUnit:string) {
        timeUnit === 'Days'
        ? setUserInput(prev => ({
            ...prev,
            workLength: {
                ...prev.workLength,
                daysPerWeek: value
            }
        }))
        : setUserInput(prev => ({
            ...prev,
            workLength: {
                ...prev.workLength,
                hoursPerDay: value
            }
        }));
    }
    function handleIncomeTypeChange(event: SelectChangeEvent) {
        const newValue:string = event.target.value;
        setUserInput( (prev) => {
            return {
                    ...prev,
                    incomeType: newValue
                };
            }
        );
    }
    function handleAmountChange(value: number) {
        setUserInput(prev => ({...prev, income: value}));
    }
    function handleDeductionChange(value:number) {
        setUserInput( prev => ({...prev, deductions: value}));
    }
    function handleTaxCreditChange(value:number) {
        setUserInput(prev =>({...prev, taxCredits: value}));
    }

    return (
        <section className='bg-gray-100 flex flex-col justify-center items-center
                            rounded-lg
                            w-full p-12'>
            <h1 className='text-2xl mb-4 md:text-3xl font-bold'>Tax Calculator</h1>

            <div className=''>
                <EmployTypeSelect value={userInput.employmentType}
                                  onChange={handleEmployTypeChange} />

                {/*selective rendering: if employment type = contractor/casual/part-time, show
                 working time input instead of income type */}
                {
                    userInput.isBranched
                    ? (<BranchWrapper userInput={userInput} handleWorkingTimeOnChange={handleWorkingTimeChange}/>)
                    : (<IncomeTypeSelection value={userInput.incomeType} onChange={handleIncomeTypeChange} />)
                }

                <AmountInput value={userInput.income}
                         type={userInput.incomeType}
                         amountOnChange={handleAmountChange} />
                <DeductionInput value={userInput.deductions}
                                deductionOnChange={handleDeductionChange}/>

                 <TaxCreditInput value={userInput.taxCredits}
                            taxCreditOnchange={handleTaxCreditChange}/>
            </div>
            <CalculateButton isSubmitDisabled={isSubmitDisabled} handleSubmit={handleSubmit} />
            {result !== 0 && (
                    <div className="mt-4">
                        <h2>Your Calculated Tax: ${result}</h2>
                    </div>
                )}
        </section>
    );
}
