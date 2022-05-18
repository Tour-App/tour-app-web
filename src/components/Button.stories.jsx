import React from 'react';
import Button from './Button';

export default { 
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    className: { control: 'text'}
  },
  args: {
    label: 'Da click aquí'
  },
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  filled: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary'
}