import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default  {
    component: Accordion,
};


const onChangeHandler = action('onChange')


export const  DemoAccordion =()=> {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <Accordion
                titleValue={'DemoAccordion'}
                collapsed = {collapsed}
                onChange={() => setCollapsed(!collapsed)}
            />
        </div>
    );
}
export const  CollapsedAccordion =()=> {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <Accordion
                titleValue={'DemoAccordion'}
                collapsed = {collapsed}
                onChange={onChangeHandler}
            />
        </div>
    );
}
export const  OpenedAccordion =()=> {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <Accordion
                titleValue={'DemoAccordion'}
                collapsed = {collapsed}
                onChange={onChangeHandler}
            />
        </div>
    );
}