import Header from './UserPage/Header'
import AboutEasyTax from "./UserPage/About";
import TaxCalculatorSection from "./UserPage/TaxCalculator";
import Terminology from "./UserPage/About/Terminology";


function App() {
    return (
        <div>
            <Header />
            <TaxCalculatorSection />
            <AboutEasyTax> About Easy Tax </AboutEasyTax>
            <Terminology />
        </div>
    );
}

export default App
