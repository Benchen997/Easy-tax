
export function userIncomeStatistics(userTaxableIncome) {
    const defaultStatistics = {
        minTaxableIncome: 3367,
        maxTaxableIncome: 98126,
        avgTaxableIncome: 50000,
        rank: 451,
        beatsPercentage: 0.449
    };
    const api = `http://localhost:5000/v1/statistics?userTaxableIncome=${userTaxableIncome}`;
    return new Promise((resolve, reject) => {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), 3000));
        const fetchStatistics = fetch(api)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Response not OK');
                }
            })
            .then(statistics => {
                console.log(`Fetched statistics:`, statistics);
                // resolve with fetched statistics
                resolve(statistics);
            })
            .catch(error => {
                console.log("Error fetching statistics:", error);
                // resolve with default statistics
                resolve(defaultStatistics);
            });

        Promise.race([timeout, fetchStatistics])
            .catch(error => {
                console.log(error);
                resolve(defaultStatistics);
            });
    });
}




