import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import './index.css'
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {DevSupport} from "@react-buddy/ide-toolbox";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>,
)
