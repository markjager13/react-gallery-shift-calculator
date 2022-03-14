import React, {useState} from 'react';
import styles from './App.module.css';

// Components
import Header from "../Header/Header";
import InputForm from "../Form/InputForm";
import Modal from '../Modal/Modal';

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
  console.log(results);

  return (
    <div className="App">
      <div className={styles.appContainer}>
        <Header />
        <InputForm getResults={getResults} />
        <Modal results={results} showModal={showModal} handleClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default App;
