import {MongoClient} from 'mongodb';

export async function userIncomeStatistics(userTaxableIncome) {
    const uri = 'mongodb+srv://ben:TobeNO.1!@practicecluster01.legqqyp.mongodb.net/?retryWrites=true&w=majority&appName=PracticeCluster01'
    const client = new MongoClient(uri,
        { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('Users');
        const collection = database.collection('Incomes');

        // Fetch all documents from the collection
        const userData = await collection.find({}).toArray();

        // Calculate min, max and average taxable income
        let minTaxableIncome = Infinity;
        let maxTaxableIncome = -Infinity;
        let totalTaxableIncome = 0;

        userData.forEach(user => {
            const income = user.annualIncome;
            if (income < minTaxableIncome) minTaxableIncome = income;
            if (income > maxTaxableIncome) maxTaxableIncome = income;
            totalTaxableIncome += income;
        });

        const avgTaxableIncome = totalTaxableIncome / userData.length;

        // Sort userData based on annualIncome
        const sortedUserData = userData.sort((a, b) => a.annualIncome - b.annualIncome);

        // Determine the rank of the user's taxable income
        const rank = sortedUserData.findIndex(user => user.annualIncome >= userTaxableIncome) + 1;

        // Calculate the percentage of users the given income beats
        const beatsPercentage = ((rank - 1) / userData.length) * 100;

        return {
            minTaxableIncome: minTaxableIncome,
            maxTaxableIncome: maxTaxableIncome,
            avgTaxableIncome: avgTaxableIncome,
            rank: rank,
            beatsPercentage: beatsPercentage
        };
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}




