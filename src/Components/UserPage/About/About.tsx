import "./about.css";
import Divider from "@mui/material/Divider";
import InfoTable from "./components/InfoTable";

export default function About() {
    const taxDeductionContent = "A tax deduction is a reduction of income that is able to be taxed and is commonly a result of expenses, particularly those incurred to produce additional income. The difference between deductions, exemptions and credits is that deductions and exemptions both reduce taxable income, while credits reduce tax.";
    const taxCreditContent = "A tax credit is an amount of money that taxpayers are permitted to subtract, dollar for dollar, from the income taxes that they owe. Tax credits are more favorable than tax deductions or exemptions because they actually reduce the tax due, not just the amount of taxable income.";
    return (
        <section className="about-container">
            <h1>
                About
            </h1>
            <Divider variant={"middle"} flexItem={true}/>
            <div className="info-table-container">
                <h2>
                    Taxable Income Level
                </h2>
                <p>
                    The following table shows the classification of taxable income levels.
                </p>
                <InfoTable/>
            </div>
            <Divider variant={"middle"} flexItem={true}/>
            <div className="info-container"
                 id={"tax-deduction"}>

                <div className="content-container">
                    <h2>
                        Tax Deduction
                    </h2>
                    <p>
                        {taxDeductionContent}
                    </p>

                </div>
                <div className="content-container">
                    <h2>
                        Tax Credit
                    </h2>
                    <p>
                        {taxCreditContent}
                    </p>
                </div>
            </div>
        </section>
    );
}