import Header from './UserPage/Header'
import AboutEasyTax from "./UserPage/About";
import TaxCalculatorSection from "./UserPage/TaxCalculator";


function App() {
    return (
        <div>
            <Header />
            <TaxCalculatorSection />
            <AboutEasyTax> About Easy Tax </AboutEasyTax>
        </div>
    );
}

export default App
