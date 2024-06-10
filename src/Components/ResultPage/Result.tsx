import {Button} from "@mui/material";
import {useState} from "react";
import SharedOptionModal from "./components/SharedOptionModal";

interface ResultProps {
    setIsResultOpen: (value: boolean) => void;
    result: number;
}

export default function Result({ result, setIsResultOpen }: ResultProps) {
    const [isSharedOptionOpen, setIsSharedOptionOpen] = useState(false);
    function handleResultClose() {
        setIsResultOpen(false);
    }
    return (
        <div className='bg-gray-100 flex flex-col justify-center items-center rounded-lg w-full p-12'>
            <h1>Your Tax Result</h1>
            <p>{result}</p>
            <Button onClick={() => setIsSharedOptionOpen(true)}>Share</Button>
            <Button onClick={handleResultClose}>Close</Button>
            <SharedOptionModal
                isSharedOptionOpen={isSharedOptionOpen}
                setIsSharedOptionOpen={setIsSharedOptionOpen}
            />
        </div>
    );
}


