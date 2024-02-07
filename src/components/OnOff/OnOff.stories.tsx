import type { Meta, StoryObj } from "@storybook/react";

import { OnOff } from "./OnOff";
import { useState } from "react";
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "OnOff stories",
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback} />;
export const OffMode = () => <OnOff on={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />;
};
