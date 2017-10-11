import React from 'react';
import Box from './components/content/Box';

import Layout from './components/layout/Layout';
import Item from './components/layout/Item';

const App = () => {
  return (
    <div
      className="App"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Layout
        columns={[1/10, 1/2, 3/10]}
        gap="1rem"
      >
        <Item
          cs={1}
          rs={2}
        >
          <Box color="blue" />
        </Item>
        <Item
          ce={3}
          cs={1}
          p="1rem"
        >
          <Box color="orange">
            <div style={{padding: '1rem'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ut pulvinar massa. Praesent ultricies, elit quis convallis ultrices,
              enim nibh dignissim mi, at tempus ante lacus in lorem. Sed velit mauris,
              pharetra sed magna id, molestie porta tortor. Vestibulum consequat arcu non
              volutpat imperdiet. Aenean et magna congue orci mattis tincidunt eu non eros.
              Nunc nec libero in sem malesuada mollis. Nam dapibus justo purus, sed pulvinar velit ultrices quis.
            </div>
          </Box>
        </Item>
        <Item
          cs={3}
          pl="1rem"
        >
          <Box color="purple" />
        </Item>
        <Item
          cs={3}
          rs={2}
        >
          <Box color="green" />
        </Item>
        <Item
          cs={2}
          pt="1rem"
          rs={2}
        >
          <Box color="brown" />
        </Item>
      </Layout>
    </div>
  );
};

export default App;
