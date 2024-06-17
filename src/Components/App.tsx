import Header from './UserPage/Header'
import TaxCalculatorSection from "./UserPage/TaxCalculator";
import About from "./UserPage/About/About";
import {useEffect, useState} from "react";
import Footer from "./UserPage/Footer";
import {ResultAccordion} from "./ResultPage/ResultAccordion";

function App() {
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [reStart, setReStart] = useState(false);
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
    function handleResultOpen() {
        result.annualIncome !== 0
            ? setIsResultOpen(true)
            : setIsResultOpen(false);
    }
    useEffect(() => {
        handleResultOpen()
    }, [result]);
    return (
        <div>
            <Header/>
            <TaxCalculatorSection setResult={setResult}
                                  setStatistics={setStatistics}
                                  reStart={reStart}
                                  setReStart={setReStart}
            />
            <ResultAccordion result={result}
                             setResult={setResult}
                             setReStart={setReStart}
                             statistics={statistics}
                             isResultOpen={isResultOpen}/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;


