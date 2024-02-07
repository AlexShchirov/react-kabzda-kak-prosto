import { title } from "process";
import { DefaultInputValue } from '../UncontrolledOnOf/UncontrolledOnOff.stories';
import { UncontrollRating } from "./UnControlledRating";
import { action } from '@storybook/addon-actions';


export default  {
    title: 'UncontrollRating',
    component: UncontrollRating,
};

const callback = action('rating changed inside component')

export const EmptyRating = () => <UncontrollRating defaultValue={0} onChange = {callback}/>;
export const Rating1 = () => <UncontrollRating defaultValue={1} onChange = {callback}/>;
export const Rating2 = () => <UncontrollRating defaultValue={2} onChange = {callback}/>;
export const Rating3 = () => <UncontrollRating defaultValue={3} onChange = {callback}/>;
export const Rating4 = () => <UncontrollRating defaultValue={4} onChange = {callback}/>;
export const Rating5 = () => <UncontrollRating defaultValue={5} onChange = {callback}/>;
