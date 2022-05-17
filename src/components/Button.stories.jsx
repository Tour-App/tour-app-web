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
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Template.args = {
  label: 'Hola',
  className:'make-everythin-green'
}