import Header from './UserPage/Header'
import AboutEasyTax from "./UserPage/About";
import TaxCalculatorSection from "./UserPage/TaxCalculator";
import Terminology from "./UserPage/About/Terminology";
import {useEffect, useState} from "react";
import Result from "./ResultPage/Result";

function App() {
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [result, setResult] = useState(0);

    const handleCloseResult = () => {
        setIsResultOpen(false);
        setResult(0); // Reset result state when closing the result page
    };

    useEffect(() => {
        if (result !== 0) {
            setIsResultOpen(true);
        }
    }, [result]);

    return (
        <div>
            <Header />
            {isResultOpen
                ? <Result
                    result={result}
                    setIsResultOpen={handleCloseResult}
                />
                : <TaxCalculatorSection setResult={setResult} />
            }
            <AboutEasyTax>About Easy Tax</AboutEasyTax>
            <Terminology />
        </div>
    );
}

export default App;


