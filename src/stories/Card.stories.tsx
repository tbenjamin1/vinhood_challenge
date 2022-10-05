import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const CardData = Template.bind({});
CardData.args = {
    title:' title',
    body:' body' 

};
export const cardStyle = Template.bind({});
cardStyle.args = {
    card: 'card bg-gray-100 border border-gray-50 shadow',

};
export const cardBody = Template.bind({});
cardBody.args = {
    cardbody:'card-body',

};
export const cardtitle = Template.bind({});
cardBody.args = {
    cardtitle:'card-title',

};
