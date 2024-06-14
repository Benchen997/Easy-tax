import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import ReplayIcon from '@mui/icons-material/Replay';
import {useState} from "react";
import SharedOptionModal from "./components/SharedOptionModal";
import GradeGauge from "./components/GradeGauge";
import ShareIcon from '@mui/icons-material/Share';
import IncrementCounter from "./components/IncrementCounter";

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
/*
* Result component is a child component of App.tsx
* It displays the user's annual income, tax, rank, and the percentage of users that the user has beaten
* It also displays a gauge that shows the user's tax in comparison to the average, minimum, and maximum tax
* It also displays a button to re-calculate the user's income and a button to share the user's result
* @param statistics: object containing the statistics of the user's income
* @param setIsResultOpen: function to manage the state of the result page
* @param result: object containing the user's annual income and tax
* */
export default function Result({statistics, result, setIsResultOpen }: ResultProps) {
    const [isSharedOptionOpen, setIsSharedOptionOpen] = useState(false);

    function handleResultClose() {
        setIsResultOpen(false);
    }

    return (
        <section className='bg-gray-100 flex flex-col justify-center items-center rounded-lg w-full'>


            <div className='w-full flex flex-col justify-center items-center p-5'>
                <GradeGauge userTaxableIncome={result.tax}
                            minTaxableIncome={statistics.minTaxableIncome}
                            maxTaxableIncome={statistics.maxTaxableIncome}
                            avgTaxableIncome={statistics.avgTaxableIncome}
                />

                <div className="text-2xl xl:text-3xl p-2 mb-16 text-gray-500 text-center">
                    <h1 >Your annual income exclude tax is
                        <strong className='text-pink-700'> $</strong>
                        <IncrementCounter target={result.annualIncome - result.tax}/></h1>
                    <h1>Your are ranked at <IncrementCounter target={statistics.rank}/>.</h1>
                    <h1>You have beat <IncrementCounter target={statistics.beatsPercentage * 100 }/>
                        <strong className='text-pink-700'>%</strong> users ! </h1>
                </div>

            </div>

            <span className="flex flex-row justify-between items-center p-5 mb-10">
                <Button sx={{minWidth: 145}}
                        variant={"contained"} startIcon={<ReplayIcon/>}
                        onClick={handleResultClose}> Re-calculate </Button>

                <Divider orientation={"vertical"} flexItem={true}/>

                <Button sx={{minWidth: 145}}
                        variant={"contained"} startIcon={<ShareIcon/>}
                    onClick={() => setIsSharedOptionOpen(true)}>Share</Button>
                <SharedOptionModal
                    isSharedOptionOpen={isSharedOptionOpen}
                    setIsSharedOptionOpen={setIsSharedOptionOpen}
                />
            </span>
        </section>
    );
}


