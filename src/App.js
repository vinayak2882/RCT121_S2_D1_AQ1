// import logo from './logo.svg';
// import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react'

function App() {

  
  return (
    <ChakraProvider>
  
<Grid
  h='200px'
  templateRows={['repeat(3, 1fr)','repeat(3, 1fr)']}
  templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']}
  gap={6}
>
  <GridItem colSpan={2} rowSpan={2} bg='mediumpurple' />
  <GridItem rowSpan={3} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='skyblue' />
</Grid>

<br></br>
<br></br>
<br></br>

<Grid
gridTemplateRows='repeat(4, 1fr)'
 templateColumns='repeat(4, 1fr)' gap={0}>
  <GridItem colSpan={1} h='10' bg='darkcyan' />
  <GridItem colSpan={2} h='10' bg='darkorange' />
  <GridItem colSpan={1} h='10' bg='crimson' />
  {/* <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' /> */}
</Grid>

    </ChakraProvider>
  );
}

export default App;
