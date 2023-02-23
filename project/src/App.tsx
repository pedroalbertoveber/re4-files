import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import File from './components/File';
import Files from './components/Files';
import Footer from './components/Footer';
import Header from './components/Header';

const App = ():React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <HashRouter>
          <Routes>
              <Route path='/' element={ <Files /> }/>
              <Route path='/:id' element={ <File /> }/>
          </Routes>
        </HashRouter>
      </Container>
      <Footer />
    </>
  );
};

export default App;