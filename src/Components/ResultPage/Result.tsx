import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import ReplayIcon from '@mui/icons-material/Replay';
import {useState} from "react";
import SharedOptionModal from "./components/SharedOptionModal";
import GradeGauge from "./components/GradeGauge";
import InfoTable from "./components/InfoTable";

interface ResultProps {
    // callback function to manage state in App.tsx
    statistics: {
        minTaxableIncome: number;
        maxTaxableIncome: number;
        avgTaxableIncome: number;
        rank: number;
        beatsPercentage: number;
    };
    setIsResultOpen: (value: boolean) => void;
    result: {
        annualIncome: number;
        tax: number;
    };
}

export default function Result({statistics, result, setIsResultOpen }: ResultProps) {
    const [isSharedOptionOpen, setIsSharedOptionOpen] = useState(false);

    function handleResultClose() {
        setIsResultOpen(false);
    }
    return (
        /*
        * @TODO:
        *   - Tax result display
        *   - Income comparison with other users
        *   - Recalculate Button
        *   - Share Button
        * */
        <section className='bg-gray-100 flex flex-col justify-center items-center rounded-lg w-full'>


            <div className='w-full flex flex-col justify-center items-center p-5'>
                <GradeGauge userTaxableIncome={result.tax}
                            minTaxableIncome={statistics.minTaxableIncome}
                            maxTaxableIncome={statistics.maxTaxableIncome}
                            avgTaxableIncome={statistics.avgTaxableIncome}
                />

                <div className="text-3xl p-2 mb-16 text-gray-500">
                    <h1 >Your annual income is ${result.annualIncome} </h1>
                    <h1>Your are ranked at {statistics.rank}.</h1>
                    <h1>You have beat {statistics.beatsPercentage * 100} % users ! </h1>
                </div>
                <Button className="mt-10" size={'large'} variant={"contained"} startIcon={<ReplayIcon/>}
                        onClick={handleResultClose}> Re-calculate </Button>
            </div>
            <Divider variant={"middle"} flexItem={true}/>
            <div className="p-3 mb-3">
                <InfoTable/>
            </div>

            <Button variant={"contained"} size={"large"}
                onClick={() => setIsSharedOptionOpen(true)}>Share</Button>
            <SharedOptionModal
                isSharedOptionOpen={isSharedOptionOpen}
                setIsSharedOptionOpen={setIsSharedOptionOpen}
            />
        </section>
    );
}


