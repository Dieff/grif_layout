## Synopsis

A simple set of ReactJS components that can be used to create grids and other layouts in a webpage. This is a personal project to help me learn both CSS Grid and 
the process for publishing an NPM module. 

## Code Example

The example component below will shows how you can use Grif Layout to create a page. The Box component is just an empty colored div.

```
import React from 'react';
import { Layout, Item } from 'grif-layout';

import Box from './components/Box';

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

```


## Motivation

In some personal React projects I really enjoyed using [Reflexbox](https://github.com/jxnblk/reflexbox) as a way to provide layout for my apps. However, for more complicated
use I found the system based on flexbox to be lacking, since it is only really designed to handle layout in one dimension at a time. It was often necessary to deeply nest
components to get the layout I wanted. I decided that a set of layout components based on CSS grid would better fit my needs. This also served as an oppurtunity to teach me the 
process of publishing an npm module.

## Installation

If you use npm you can install the components with

`npm install --save grif-layout`

Yarn users can run

`yarn add grif-layout`

## API Reference

There are two componenets, Layout and Item. Layout is designed to take multiple Item components as children.

**Layout**

This component holds `Item` components. It sepcifies the grid which the `Item` components will fill. The properties are below.

..* `columns` (number | array of (number | string) ): Creates the columns of your grid. A single number will create that many evenly spaced columns. For more
fine control, you can pass an array of numbers. This will make columns proportional to the array contents in the order in which they appear. For example, setting
`column={[1, 2]}` will create a grid with two columns, the second of which is twice the width of the first. You can also pass absolute css widths. Will default to `1`.

..* `rows` (number | array of numbers): Creates the rows of your grid. Works much like the columns property. Will default to `1`.

..* `gap` (string | number): The gap between different items in the grid. Takes a css width like `2rem` or a number of pixels.

..* `xAlign` (string): How to justify content on the x axis. Possible values are the same as the values for the css properties `align-content` and `justify-content`. Useful options include `center`, `left`, `right`, `stretch`, or `space-between`.

..* `yAlign` (string): How to justify content on the y axis. Works the same way as `xAlign`.

**Item**

This component can hold different content as its children. The properties are below.

..* `cs` (number): The grid line to start the item along the x axis. Grid lines start at 1, which is the furthest right.

..* `ce` (number): The grid line to end the item along the x axis.

..* `rs` (number): The grid line the start the item along the y axis.

..* `re` (number): The grid line to end the item along the y axis.

..* `m` (string | number): The margin of the child content. If set to greater than the value of the `gap` on the parent layout, it will cause the item
to be drawn over other child items.

..* `ml` (string | number): The left margin.

..* `mr` (string | number): The right margin.

..* `mt` (string | number): The top margin.

..* `mb` (string | number): The bottom margin.

..* `p` (string | number): The padding of the child content. Will not extend past the limits of its row or column. Takes a css length like `1rem` or a
 number of pixels.

 ..* `pt` (string | number): The top padding.

 ..* `pb` (string | number): The bottom padding.

 ..* `pl` (string | number): The left padding.

 ..* `pr` (string | number): The right padding.



## License

The project is licensed with the [WTFPL](http://www.wtfpl.net/) license, a copy of which is included in this repository. See copying.txt for more information.
