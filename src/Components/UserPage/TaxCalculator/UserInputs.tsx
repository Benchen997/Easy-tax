import * as React from 'react';
import EmploymentTypeAccordion from "./components/EmploymentTypeAccordion";
import {IncomeTypeAccordion} from "./components/IncomeTypeAccordion";
import IncomeAndOthersAccordion from "./components/IncomeAndOthersAccordion";

export default function UserInputs() {
  return (
    <section className="tax-calculator-container">
      <EmploymentTypeAccordion disabled={false}>
          1. Tell me your current employment type</EmploymentTypeAccordion>
      <IncomeTypeAccordion disabled={false}>
          2.Please tell me about more your working length </IncomeTypeAccordion>
      <IncomeAndOthersAccordion disabled={false}>
            3. Please tell me about your income and other details</IncomeAndOthersAccordion>
    </section>
  );
}