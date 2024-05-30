import EmployTypeSelect from "./components/EmployTypeSelect";
import IncomeTypeSelection from "./components/IncomeTypeSelection";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import AmountInput from "./components/AmountInput";

export default function TaxCalculatorSection() {
    const [userInput, setUserInput] =
        useState({
                employmentType: '',
                incomeType: '',
                income: 0,
                deductions: null,
                taxCredits: null
            });


    function handleEmployTypeChange(event: SelectChangeEvent<string>) {
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
    function handleIncomeTypeChange(event: SelectChangeEvent<string>) {
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
                <AmountInput value={userInput.income} amountOnChange={handleAmountChange} />
            </div>
        </section>
    );
}
