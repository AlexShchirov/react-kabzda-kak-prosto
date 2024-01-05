import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
    name: "dimuch",
    age: 10,
    address: {
        city: "Minsk",
        country: "Belarus",
    },
};

let users = [
    {
        name: "dimuch",
        age: 10,
        address: {
            city: "Minsk",
            country: "Belarus",
        },
    },
    {
        name: "victor",
        age: 12,
        address: {
            city: "London",
            country: "UK",
        },
    },
];

let b: string;
b= 'yoyo'

let c = true;

let d = Array<number>;
d = [1,2,3,4];