import React from 'react';
import Box from './components/content/Box';

import Layout from './components/layout/Layout';
import Item from './components/layout/Item';

const App = () => {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Layout gap={'1rem'}  columns={[1/10, 1/2, 3/10]}>
        <Item rs={2} cs={1}>
          <Box color="blue" />
        </Item>
        <Item cs={1} ce={3} p="1rem">
          <Box color="orange">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut pulvinar massa. Praesent ultricies, elit quis convallis ultrices, enim nibh dignissim mi, at tempus ante lacus in lorem. Sed velit mauris, pharetra sed magna id, molestie porta tortor. Vestibulum consequat arcu non volutpat imperdiet. Aenean et magna congue orci mattis tincidunt eu non eros. Nunc nec libero in sem malesuada mollis. Nam dapibus justo purus, sed pulvinar velit ultrices quis.
          </Box>
        </Item>
        <Item cs={3} pl={'1rem'}>
          <Box color="purple" />
        </Item>
        <Item rs={2} cs={3}>
          <Box color="green" />
        </Item>
        <Item rs={2} cs={2} pt={'1rem'}>
          <Box color="brown" />
        </Item>
      </Layout>
    </div>
  );
}

export default App;
