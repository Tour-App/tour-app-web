import React from 'react';
import Date from './Date';

export default { 
  title: 'Date',
  component: Date,
  argTypes: {
    value: { control: 'text' },
    active: { control: 'boolean' }
  },
}

const Template = (args) => <Date {...args} />

export const Start = Template.bind({});
Template.args = {
  value: 'Start date'
}