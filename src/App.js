import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Home2 from './page';

import React from 'react';
import Home1 from './page/index2';
import Home3 from './page/index3';
import Header2 from './components/Header/Header2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header2 />} />
          <Route path='/home' element={<Home />} />

          <Route path='/resume' element={<Home2 />} />
          <Route path='/letter' element={<Home1 />} />
          <Route path='/resumenew' element={<Home3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
  <Routes>
    <Route path='/' element={<Navigate replace to='/quotes' />} />
    <Route path='/quotes' element={<AllQuotes />} />
    <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
      <Route
        path=''
        element={
          <div className='centered'>
            <Link className='btn--flat' to={`comments`}>
              Load Comments
            </Link>
          </div>
        }
      />
      <Route path={`comments`} element={<Comments />} />
    </Route>
    <Route path='/new-quote' element={<NewQuote />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
*/ 