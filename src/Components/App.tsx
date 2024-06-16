import Header from './UserPage/Header'
import TaxCalculatorSection from "./UserPage/TaxCalculator";
import About from "./UserPage/About/About";
import {useEffect, useState} from "react";
import Result from "./ResultPage/Result";
import Footer from "./UserPage/Footer";

function App() {
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [result, setResult] = useState({
        annualIncome: 0,
        tax: 0
    });
    const [statistics, setStatistics] = useState({
        minTaxableIncome: 0,
        maxTaxableIncome: 0,
        avgTaxableIncome: 0,
        rank: 0,
        beatsPercentage: 0
    });

    const handleCloseResult = () => {
        setIsResultOpen(false);
        setResult(()=>{
            return {
                annualIncome: 0,
                tax: 0
            }
        }); // Reset result state when closing the result page
    };

    useEffect(() => {
        if (result.tax !== 0) {
            setIsResultOpen(true);
        }
    }, [result]);

    return (
        <div>
            <Header/>
            {isResultOpen
                ? <Result
                    statistics={statistics}
                    result={result}
                    setIsResultOpen={handleCloseResult}
                />
                : <TaxCalculatorSection
                    setResult={setResult}
                    setStatistics={setStatistics}
                />
            }
            {/*<AboutEasyTax>About Easy Tax</AboutEasyTax>*/}
            <About/>
            <Footer/>
        </div>
    );
}

export default App;


