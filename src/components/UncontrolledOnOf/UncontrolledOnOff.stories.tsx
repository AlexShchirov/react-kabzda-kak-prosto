import type { Meta, StoryObj } from "@storybook/react";

import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { useState } from "react";
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "UncontrolledOnOff stories",
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>;
export const BugMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>;



export const DefaultInputValue = () => <input defaultValue={'yo'} />;

