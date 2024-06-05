/*
* This function calculates the tax based on the user input
*
*/

interface UserInput {
    employmentType: string;
    incomeType: string;
    isBranched: boolean;
    workLength:{
        hoursPerDay: number;
        daysPerWeek: number;
    }
    income: number;
    deductions: number;
    taxCredits: number;

}

interface TaxRate {
    min: number;
    max: number;
    base: number;
    rate: number;
}

interface IncomeTable {
    [key: string]: number;
}

const TAX_RATE_TABLE: TaxRate[] = [
    { min: 0, max: 18200, base: 0, rate: 0 },
    { min: 18201, max: 37000, base: 0, rate: 0.19 },
    { min: 37001, max: 90000, base: 3572, rate: 0.325 },
    { min: 90001, max: 180000, base: 20797, rate: 0.37 },
    { min: 180001, max: Number.MAX_VALUE, base: 54097, rate: 0.45 }
];

const INCOME_TABLE: IncomeTable = {
    Monthly: 12,
    Fortnightly: 26,
    Weekly: 52,
    Daily: 260,
    Hourly: 2080
};


export function calculateTax(userInput: UserInput): number {
    const {employmentType, incomeType, deductions, taxCredits } = userInput;
    const {hoursPerDay, daysPerWeek} = userInput.workLength;
    const { income } = userInput;
    let annualIncome = 1;

    // transfer all income to annual
    if (incomeType !== "Annual" && !userInput.isBranched) {
        annualIncome = income * INCOME_TABLE[incomeType];
    }
    else {
        employmentType === 'Contractor'
            ? annualIncome = income * daysPerWeek * 52
            : annualIncome = income * hoursPerDay * daysPerWeek * 52;
    }
    console.log(`Calculated annual income: ${annualIncome}`);
    const row = TAX_RATE_TABLE.find(row => annualIncome >= row.min && annualIncome <= row.max);

    if (!row) {
        throw new Error('Income does not fall within any tax bracket');
    }

    const { base, rate, min } = row;
    let tax = base + (annualIncome - min) * rate;

    tax -= deductions;
    tax -= taxCredits;
    // tax should keep only 2 decimal places
    return Math.round(tax * 100) / 100;
}


