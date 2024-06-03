/*
* This function calculates the tax based on the user input
*
*/

interface UserInput {
    employmentType: string;
    incomeType: string;
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
    Hourly: 2080
};

export function calculateTax(userInput: UserInput): number {
    const {incomeType, deductions, taxCredits } = userInput;
    let { income } = userInput;

    if (incomeType !== "Annual") {
        income *= INCOME_TABLE[incomeType];
    }

    const row = TAX_RATE_TABLE.find(row => income >= row.min && income <= row.max);

    if (!row) {
        throw new Error('Income does not fall within any tax bracket');
    }

    const { base, rate, min } = row;
    let tax = base + (income - min) * rate;

    tax -= deductions;
    tax -= taxCredits;
    tax.toFixed(2);
    return tax;
}


