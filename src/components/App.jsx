import { ListingProducts } from '../pages/ListingProducts'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <ChakraProvider>
    <Router >
        <Routes>
          <Route path='/' element={<ListingProducts />} />
        </Routes>
    </Router>
   </ChakraProvider>
  );
}

export default App;
