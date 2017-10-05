import React, { Component } from 'react';
import Box from './components/content/Box';

import Layout from './components/layout/Layout';
import Item from './components/layout/Item';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: '100vh', height: '100vh' }}>
        <Layout gap={'1rem'}  columns={[1/10, 1/2, 3/10]}>
          <Item rs={2} cs={1}>
            <Box color="blue" />
          </Item>
          <Item rs={1} cs={1} ce={3}>
            <Box color="orange" />
          </Item>
          <Item cs={3}>
            <Box color="purple" />
          </Item>
        </Layout>
      </div>
    );
  }
}

export default App;
