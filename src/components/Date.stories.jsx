import React from 'react';
import Date from './Date';

export default { 
  title: 'Date',
  component: Date,
  argTypes: {
    placeholder: { control: 'text' },
    active: { control: 'boolean' },
    value: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
  args: {
    value: '2022-05-17',
    min: '2022-04-17',
    max: '2022-06-17'
  },
}

const Template = (args) => <Date {...args} />

export const Start = Template.bind({});
Template.args = {
  value: '2022-05-01'
}