import {calculateTax} from "../../utils/taxCalculator"
import {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {userIncomeStatistics} from "../../utils/userIncomeStatistics";
import EmploymentTypeAccordion from "./components/EmploymentTypeAccordion";
import {IncomeTypeAccordion} from "./components/IncomeTypeAccordion";
import AmountAndOthersAccordion from "./components/AmountAndOthersAccordion";

interface TaxCalculatorSectionProps {
    setResult: (value: { annualIncome: number; tax: number }) => void;
    setStatistics: (value:{
        minTaxableIncome: number;
        maxTaxableIncome: number;
        avgTaxableIncome: number;
        rank: number;
        beatsPercentage: number;
    })=>void;
    reStart: boolean;
    setReStart: (value: boolean) => void;
}

export default function TaxCalculatorSection({setResult, setStatistics, reStart, setReStart}: TaxCalculatorSectionProps) {
    const initialUserInput = {
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
    };
    const [userInput, setUserInput] = useState(initialUserInput);

    useEffect(() => {
        if (reStart) {
            setUserInput(initialUserInput);
            window.location.href = '#result';
            //console.log('restarting');
            //console.log(userInput);
            setReStart(false);
        }
    }, [reStart]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
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
        //console.log(userInput);
        setIsLoading(true);
        try {
            //await new Promise(resolve => setTimeout(resolve, 1300));
            const result = calculateTax(userInput);
            const stats = await userIncomeStatistics(result.tax);
            setResult(result);
            setStatistics(stats);
            setIsLoading(false);
            setReStart(true);
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
            isBranched: false
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
        <section className='tax-calculator-container'>
            <EmploymentTypeAccordion employmentType={userInput.employmentType}
                                     handleEmployTypeChange={handleEmployTypeChange}
                                     reStart={reStart}
            />


            <IncomeTypeAccordion userInput={userInput}
                                 handleIncomeTypeChange={handleIncomeTypeChange}
                                 handleWorkingTimeChange={handleWorkingTimeChange}/>
            <AmountAndOthersAccordion userInput={userInput}
                                      handleAmountChange={handleAmountChange}
                                      handleDeductionChange={handleDeductionChange}
                                      handleTaxCreditChange={handleTaxCreditChange}
                                      isSubmitDisabled={isSubmitDisabled}
                                      handleSubmit={handleSubmit}
                                      isLoading={isLoading}
            />

        </section>
    );
}
