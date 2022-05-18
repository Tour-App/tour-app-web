import React from 'react';
import Title from './Title';

export default { 
  title: 'Texts',
  component: Title,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text'}
  },
  args: {
    children: 'lorem ipsum'
  },
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
}