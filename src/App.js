import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';
import Header from './components/Header/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
