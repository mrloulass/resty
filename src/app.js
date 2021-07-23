import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Form from './components/form/index.js';
import Results from './components/results/index.js';

function App(props) {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParms] = useState({});
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
    setRequestParms(requestParams)
  }

  useEffect(() => {
    if (Object.keys(request).length)axios(request).then(res => {
      setResponse(res);
    });
  }, [request]);


  return (
    <React.Fragment>
      <Header />
      <div >Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} handleRequest={setRequest} />
      <Results data={data} response={response} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
