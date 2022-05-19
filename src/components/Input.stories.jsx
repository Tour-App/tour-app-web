import React from 'react';
import Input from './Input';

export default { 
  title: 'Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    active: { control: 'boolean' },
    hasIcon: { control: 'boolean' }
  },
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({});
Primary.args = {
  value: 'Hola'
}

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Buscar ...',
  hasIcon: true
}