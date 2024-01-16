import React from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UnControlledAccordion } from "./components/unControlledAccordion/UnControlledAccordion";
import { UncontrollRating } from "./components/unControlledRating/UnControlledRating";

function App() {
    return (
        <div className={"App"}>
            <OnOff />
            <UnControlledAccordion titleValue={"---Menu---"} />
            <UnControlledAccordion titleValue={"---Stars---"} />
            <UncontrollRating  />
            {/* <PageTitle title={"This is App component"}/>
            Article 1
            <Rating value={3} />
            
            Article 2
            <PageTitle title={"This is my work"}/>
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} /> */}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;
