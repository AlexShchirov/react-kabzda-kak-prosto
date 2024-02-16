import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UnControlledAccordion } from "./components/unControlledAccordion/UnControlledAccordion";
import { UncontrollRating } from "./components/unControlledRating/UnControlledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOf/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            {/* <OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/> */}
            <UnControlledAccordion titleValue={"---Menu---"} />
            <UnControlledAccordion titleValue={"---Stars---"} />
            {/* <UncontrollRating /> */}
            <Rating value={ratingValue} onClick={setRatingValue} />
            {/* <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed);
                }}/> */}
            
                <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            
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
