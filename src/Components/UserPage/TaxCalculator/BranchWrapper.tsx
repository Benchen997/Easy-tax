import {WorkingTimeInput} from "./components/WorkingTimeInput";

interface BranchWrapperProps {
    userInput: {
        employmentType: string;
        workLength: {
            hoursPerDay: number;
            daysPerWeek: number;
        }
    }
    handleWorkingTimeOnChange: (value: number, timeUnit: string) => void;
}

export default function BranchWrapper({userInput, handleWorkingTimeOnChange}:BranchWrapperProps) {

    return (
        <div>
            {
                userInput.employmentType === 'Contractor' ? (
                    <WorkingTimeInput timeUnit={"Days"} value={userInput.workLength.daysPerWeek}
                                      workingTimeOnChange={handleWorkingTimeOnChange}/>
                ) : (
                    <div>
                        <WorkingTimeInput timeUnit={"Hours"} value={userInput.workLength.hoursPerDay}
                                          workingTimeOnChange={handleWorkingTimeOnChange}/>
                        <WorkingTimeInput timeUnit={"Days"} value={userInput.workLength.daysPerWeek}
                                          workingTimeOnChange={handleWorkingTimeOnChange}/>
                    </div>

                )
            }
        </div>
    );
}