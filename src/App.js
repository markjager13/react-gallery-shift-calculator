import React, {useState} from 'react';
// Components
import Header from "./Header";
import InputForm from "./InputForm";
import Modal from './Modal';

function App() {

  // hook to manage shift results
  const [results, setResults] = useState();
  // hook to manage modal window
  const [showModal, setShowModal] = useState(false);
  
  // function to getShifts
  const getResults = (resultsData) => {
    setResults(resultsData);
  }

  // function to trigger modal
  const triggerModal = (e) => {
    setShowModal(true);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputForm getResults={getResults} triggerModal={triggerModal} />
        <Modal results={results} showModal={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default App;
