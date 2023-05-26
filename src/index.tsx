import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"

const root = createRoot(
    document.getElementById("root") as HTMLElement
)

window.addEventListener("error", (e) => {
    console.log("Detected Uncaught Error!", e)
})

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
