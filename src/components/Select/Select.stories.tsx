import React, { useState } from "react";
import { Select } from "./Select";
import { action } from "@storybook/addon-actions";
import { title } from "process";

export default {
    tittle: "Select",
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2");
    return (
        <>
            <Select
                onChange={action("Value changed")}
                value={value}
                items={[
                    { value: "1", title: "Minsk" },
                    { value: "2", title: "Moscow" },
                    { value: "3", title: "Kiev" },
                ]}
            />
        </>
    );
};
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return(
    <>
        <Select
        value={null}
            onChange={setValue}
            items={[
                { value: "1", title: "Minsk" },
                { value: "2", title: "Moscow" },
                { value: "3", title: "Kiev" },
            ]}
        />
    </>
    )
    
};
