
# Easy Tax Calculator Frontend

This is the frontend for the Easy Tax Calculator application. It is built using Vite and React, and it integrates various technologies such as native CSS, Tailwind CSS, Material-UI (MUI), and TypeScript. The frontend communicates with the backend using RESTful APIs to calculate individual income tax.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fast and responsive UI built with Vite and React.
- Styled using native CSS, Tailwind CSS, and Material-UI.
- Written in TypeScript for better type safety and developer experience.
- RESTful API communication with the backend.
- Interactive UI components including a gauge chart and accordion for displaying tax calculation results.
- Real-time updates and animations using custom React hooks.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Benchen997/Easy-tax.git
   cd Easy-tax
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Usage

1. **Enter your annual income:**
   - Input your annual income in the provided field.

2. **Calculate your tax:**
   - Click the "Calculate" button to send a request to the backend and calculate your tax.
   - Notice that the calculation function is done by frontend built-in function.However, the result comparison statistics are fetched from the backend.
   - In order to get the result comparison statistics, you need to run the backend server, see also [Easy Tax Calculator Backend](https://github.com/Benchen997/Easy-tax-Backend).

3. **View results:**
   - View your tax results, including your rank and the percentage of users you have beaten.
   - Interactive gauge chart displays your estimated taxable income.

## Technologies

- **Vite**: Fast development server and build tool.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **ECharts**: Charting library for visualizing data.

## Project Structure

The project structure is as follows:

```
easy-tax-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ResultPage
│   │   │   ├── ResultAccordion.tsx
│   │   │   ├── components
│   │   │   │   ├── GradeGaug.tsx
│   │   │   │   ├── IncrementCounter.tsx
│   │   │   │   ├── SharedOptionModal.tsx
│   │   ├── UserPage
│   │   │   ├── About
│   │   │   ├── Footer
│   │   │   ├── Header
│   │   │   ├── TaxCalculator
│   │   ├── Utils
│   │   └── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── ...
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.


## Contributors
- [Ben Chen](https://github.com/Benchen997) - Frontend Developer & Backend Developer & MongoDB Developer
- Email: benchentravail2024@gmail.com