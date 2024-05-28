import React from 'react';

// Define the props interface
interface AboutEasyTaxProps {
  children: React.ReactNode;
}

function AboutEasyTax(props: AboutEasyTaxProps) {
  return (
      <section className="bg-gray-100 p-8 md:p-32 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">{props.children}</h2>

          <div className="flex flex-col md:flex-row md:space-x-8 md:w-2/3 text-2xl text-gray-700 font-sans">
              <div className="bg-white p-10 rounded-lg shadow-lg flex-1 mb-8 md:mb-0">
                  <p className="leading-relaxed">
                      Easy Tax is a web application designed to help individuals calculate their tax payments based on
                      their income. Whether you receive your salary annually, monthly, or hourly, Easy Tax provides a
                      simple and intuitive way to determine how much tax you owe.
                  </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-lg flex-1">
                  <p className="leading-relaxed">
                      By inputting your income and selecting the appropriate salary frequency, Easy Tax quickly computes
                      the estimated tax amount you need to pay, ensuring you stay informed about your financial
                      obligations. With Easy Tax, managing your taxes has never been easier.
                  </p>
              </div>
          </div>
      </section>


  );
}

export default AboutEasyTax;
