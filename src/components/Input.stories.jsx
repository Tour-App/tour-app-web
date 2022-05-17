import React from 'react';
import Input from './Input';

export default { 
  title: 'Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
  },
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({});
Template.args = {
  value: 'Hola'
}