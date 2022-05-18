import React, { useState } from 'react';

import Login from '../pages/login';

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
    // viewport: {
    //   type: 'mobile'
    // }
  },
};

const Template = (args) => {
  const [logging, setLogging] = useState(false);

  const onLogin = () => {
    setLogging(true);
    // Simula la petición a la API
    setTimeout(() => setLogging(false), 3000);
  }

  return (
    <React.Fragment>
      <Login {...args} loading={logging} onLogin={onLogin} />
      <p></p>
    </React.Fragment>
  )
};
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});
