import React, {createContext} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import EventStore from "./store/eventStore";
import App from "./App";

export const Context = createContext(null)

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Context.Provider
    value={{
        events: new EventStore()
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);