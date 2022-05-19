import React from 'react';
import Searchbar from './Searchbar';

export default { 
  title: 'Searchbar',
  component: Searchbar,
  argTypes: {
    value: { control: 'text' }
  },
  
}

const Template = (args) => <Searchbar {...args} />

export const Main = Template.bind({});
Main.args = {
    placeholder: 'Buscar ...'
}