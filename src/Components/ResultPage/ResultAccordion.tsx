import {Accordion, AccordionDetails, AccordionSummary, Button} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import IncrementCounter from "./components/IncrementCounter";
import GradeGauge from "./components/GradeGauge";
import ReplayIcon from "@mui/icons-material/Replay";
import ShareIcon from "@mui/icons-material/Share";
import SharedOptionModal from "./components/SharedOptionModal";
import {useState} from "react";

interface ResultAccordionProps {
    result:{
        annualIncome: number;
        tax: number;
    }
    setResult: (value: {annualIncome: number; tax: number}) => void;
    setReStart: (value: boolean) => void;
    statistics:{
        minTaxableIncome: number;
        maxTaxableIncome: number;
        avgTaxableIncome: number;
        rank: number;
        beatsPercentage: number;
    }
    isResultOpen: boolean;
}
export function ResultAccordion({result,
                                    setResult,
                                    setReStart,
                                    statistics,
                                    isResultOpen}: ResultAccordionProps) {
    const [isSharedOptionOpen, setIsSharedOptionOpen] = useState(false);
    function handleOnClick() {
        setResult({annualIncome: 0, tax: 0});
        setReStart(true);
    }

    return (
        <div className="result-wrapper">
            <Accordion className="accordion-container"
                          expanded={isResultOpen}
                          disabled={!isResultOpen}
            >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                    {
                        isResultOpen ? (<h1> Your annual income exclude tax is
                            <strong className='text-pink-700'> $</strong>
                            <IncrementCounter target={result.annualIncome - result.tax}/></h1>)
                            : (<h1> Result </h1>)
                    }

                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant={"fullWidth"} orientation={"horizontal"}/>
                    <div className="w-full flex md:p-10 flex-col justify-center items-center">
                        <h1>Your are ranked at <IncrementCounter target={statistics.rank}/>.</h1>
                        <h1>You have beat <IncrementCounter target={statistics.beatsPercentage * 100}/>
                            <strong className='text-pink-700'>%</strong> users ! </h1>
                        <GradeGauge userTaxableIncome={result.tax}
                            minTaxableIncome={statistics.minTaxableIncome}
                            maxTaxableIncome={statistics.maxTaxableIncome}
                            avgTaxableIncome={statistics.avgTaxableIncome}
                        />

                            <Button sx={{m:2, minWidth: 145}}
                                    variant={"contained"} startIcon={<ReplayIcon/>}
                                    onClick={handleOnClick}> Re-calculate </Button>

                            <Divider orientation={"vertical"} flexItem={true}/>

                            <Button sx={{m: 2, minWidth: 145}}
                                    variant={"contained"} startIcon={<ShareIcon/>}
                                onClick={() => setIsSharedOptionOpen(true)}>Share</Button>
                            <SharedOptionModal
                                isSharedOptionOpen={isSharedOptionOpen}
                                setIsSharedOptionOpen={setIsSharedOptionOpen}
                                beatsPercentage={statistics.beatsPercentage}
                            />

                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}