import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            <AppTitle />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    return <>This is App component</>;
}

function Rating() {
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    );
}

function Accordion() {
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    );
}

function AccordionTitle() {
    return <h3>Меню</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

function Star() {
    return <div>star</div>;
}

export default App;
