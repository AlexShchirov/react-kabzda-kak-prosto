import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
    component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const CollapsedMode = () => (
    <Accordion
        titleValue={"Menu"}
        collapsed={true}
        onChange={callback}
        items={[]}
        onClick={onClickCallback}
    />
);
export const UnCollapsedMode = () => (
    <Accordion
        titleValue={"users"}
        collapsed={false}
        onChange={callback}
        items={[
            { title: "dimfwf", value: 1 },
            { title: "fsdfdf", value: 2 },
            { title: "fsdfs", value: 3 },
        ]}
        onClick={onClickCallback}
    />
);

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return (
        <Accordion
            titleValue={"users"}
            collapsed={value}
            onChange={() => setValue(!value)}
            items={[
                { title: "dimfwf", value: 1 },
                { title: "fsdfdf", value: 2 },
                { title: "fsdfs", value: 3 },
            ]}
            onClick={onClickCallback}
        />
    );
};
