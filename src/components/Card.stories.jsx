import React from 'react';
import Card from './Card';

export default { 
  title: 'Card',
  component: Card,
  argTypes: {
    className: { control: 'text'}
  }
  /*
  args: {
    label: 'Da click aquí'
  },*/
}

const Template = (args) => <Card {...args} />;

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
}