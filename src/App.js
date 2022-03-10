import React, {useState} from 'react';
// Components
import Header from "./Header";
import InputForm from "./InputForm";
import Modal from './Modal';

function App() {

  // hook to manage results
  const [results, setResults] = useState();
  // hook to manage modal window
  const [showModal, setShowModal] = useState(false);
  
  // function to getResults and toggle modal to open
  const getResults = (resultsData) => {
    setResults(resultsData);
    setShowModal(true);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputForm getResults={getResults} />
        <Modal results={results} showModal={showModal} handleClose={() => setShowModal(false)} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default App;
