//file was created at: 2024/6/14
//file is under project: easy-tax
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
// userInputSlice.js
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {calculateTax} from '../Components/utils/taxCalculator';
import {userIncomeStatistics} from '../Components/utils/userIncomeStatistics';

interface WorkLength {
  hoursPerDay: number;
  daysPerWeek: number;
}

interface UserInputState {
  employmentType: string;
  incomeType: string;
  isBranched: boolean;
  workLength: WorkLength;
  income: number;
  deductions: number;
  taxCredits: number;
  isSubmitDisabled: boolean;
  isLoading: boolean;
  result: {
    tax: number;
    annualIncome: number;
  };
  statistics: {
    minTaxableIncome: number;
    maxTaxableIncome: number;
    averageTaxableIncome: number;
    rank: number;
    beatsPercentage: number;
  },
  error: string | null;
}

// Initial state
const initialState: UserInputState = {
  employmentType: '',
  incomeType: '',
  isBranched: false,
  workLength: {
    hoursPerDay: 0,
    daysPerWeek: 0,
  },
  income: 0,
  deductions: 0,
  taxCredits: 0,
  isSubmitDisabled: true,
  isLoading: false,
  result: {
    tax: 0,
    annualIncome: 0,
  },
  statistics: {
    minTaxableIncome: 0,
    maxTaxableIncome: 0,
    averageTaxableIncome: 0,
    rank: 0,
    beatsPercentage: 0
  },
  error: null,
};

// Async thunk to handle the async operations
export const submitUserInput = createAsyncThunk(
  'userInput/submitUserInput',
  async (userInput: UserInputState, { rejectWithValue }) => {
    try {
      console.log('before calculating:', userInput);
      const result = calculateTax(userInput);
      console.log('after calculating:', result);
      const stats = await userIncomeStatistics(result.tax);
      return { result, stats };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const validateUserInput = (state: UserInputState) => {
  state.isSubmitDisabled =
    state.employmentType === '' || state.incomeType === '' || state.income === 0;
};

const userInputSlice = createSlice({
  name: 'userInput',
  initialState,
  reducers: {
    setEmploymentType(state, action: PayloadAction<string>) {
      const newValue = action.payload;
      if (newValue === 'Contractor') {
        state.employmentType = newValue;
        state.isBranched = true;
        state.incomeType = 'Daily';
      } else if (newValue === 'Casual' || newValue === 'Part-time') {
        state.employmentType = newValue;
        state.isBranched = true;
        state.incomeType = 'Hourly';
      } else {
        state.employmentType = newValue;
        state.isBranched = false;
      }
      validateUserInput(state);
    },
    setIncomeType(state, action: PayloadAction<string>) {
      state.incomeType = action.payload;
      validateUserInput(state);
    },
    setIncome(state, action: PayloadAction<number>) {
      state.income = action.payload;
      validateUserInput(state);
    },
    setDeductions(state, action: PayloadAction<number>) {
      state.deductions = action.payload;
    },
    setTaxCredits(state, action: PayloadAction<number>) {
      state.taxCredits = action.payload;
    },
    setWorkLength(state, action: PayloadAction<{ value: number; timeUnit: string }>) {
      const { value, timeUnit } = action.payload;
      if (timeUnit === 'Days') {
        state.workLength.daysPerWeek = value;
      } else {
        state.workLength.hoursPerDay = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUserInput.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitUserInput.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload.result;
        state.statistics = action.payload.stats;
      })
      .addCase(submitUserInput.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setEmploymentType,
  setIncomeType,
  setIncome,
  setDeductions,
  setTaxCredits,
  setWorkLength,
} = userInputSlice.actions;

export default userInputSlice.reducer;


