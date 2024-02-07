import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default  {
    component: Accordion,
};


const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />;
export const UnCollapsedMode = () => <Accordion titleValue={'users'} collapsed={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'users'} collapsed={value} onChange={() => setValue(!value)} />;
};