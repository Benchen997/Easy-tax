import fs from 'fs';

// Define the tax rate table
const TAX_RATE_TABLE = [
    { min: 0, max: 18200, base: 0, rate: 0 },
    { min: 18201, max: 37000, base: 0, rate: 0.19 },
    { min: 37001, max: 90000, base: 3572, rate: 0.325 },
    { min: 90001, max: 180000, base: 20797, rate: 0.37 },
    { min: 180001, max: Number.MAX_VALUE, base: 54097, rate: 0.45 }
];

// Define employment types
const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Casual', 'Contractor', 'Self-employed'];

// Function to calculate tax based on the annual income
function calculateTax(annualIncome) {
    const row = TAX_RATE_TABLE.find(row => annualIncome >= row.min && annualIncome <= row.max);
    if (!row) {
        throw new Error('Income does not fall within any tax bracket');
    }
    const { base, rate, min } = row;
    return base + (annualIncome - min) * rate;
}

// Function to generate a normally distributed random number using Box-Muller transform
function generateNormalRandom(mean, stdDev) {
    let u1 = Math.random();
    let u2 = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z * stdDev + mean;
}

// Function to generate a single user data record
function generateUserData() {
    const employmentType = EMPLOYMENT_TYPES[Math.floor(Math.random() * EMPLOYMENT_TYPES.length)];
    let annualIncome;

    // Generate a normally distributed income centered around 95000 with std deviation 20000
    do {
        annualIncome = generateNormalRandom(95000, 20000);
    } while (annualIncome < 35000 || annualIncome > 500000);

    const tax = calculateTax(Math.floor(annualIncome));

    return {
        employmentType,
        annualIncome: Math.floor(annualIncome),
        tax
    };
}

// Function to generate 10,000 user data records and write to a JSON file
function DataWriter() {
    const userData = [];
    for (let i = 0; i < 10000; i++) {
        userData.push(generateUserData());
    }
    // Sort the user data based on tax value from low to high
    userData.sort((a, b) => a.tax - b.tax);
    // Write data to a JSON file
    fs.writeFile('../../data/userData.json', JSON.stringify(userData, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Data written successfully to ../data/userData.json');
        }
    });
}

// Run the DataWriter function
DataWriter();

