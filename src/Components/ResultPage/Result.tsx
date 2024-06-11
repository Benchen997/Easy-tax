import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import ReplayIcon from '@mui/icons-material/Replay';
import {useState} from "react";
import SharedOptionModal from "./components/SharedOptionModal";
import GradeGauge from "./components/GradeGauge";

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


            <div className='w-full h-1/3 flex flex-col justify-center items-center p-5'>
                <GradeGauge userTaxableIncome={result.tax}/>
                <h1>You have beat {statistics.beatsPercentage} users</h1>
                <Button size={'large'} variant={"contained"} startIcon={<ReplayIcon/>}
                        onClick={handleResultClose}> Re-calculate </Button>
            </div>

            <div>

            </div>


            <Divider variant={"middle"} flexItem={true}/>
            <Button onClick={() => setIsSharedOptionOpen(true)}>Share</Button>
            <SharedOptionModal
                isSharedOptionOpen={isSharedOptionOpen}
                setIsSharedOptionOpen={setIsSharedOptionOpen}
            />
        </section>
    );
}


