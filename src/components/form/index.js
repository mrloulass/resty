import React from 'react';

import {useState} from 'react';

import './form.scss';

function Form(props) {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall({url, method});
    props.handleRequest({url, method});
  }

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleClickGet = (e) => {
    setMethod(e.target.value)
  }
  const handleClickPost = (e) => {
    setMethod(e.target.value)
  }
  const handleClickPut = (e) => {
    setMethod(e.target.value)
  }
  const handleClickDelete = (e) => {
    setMethod(e.target.value)
  }

  return (
    <>
      <form data-testid="formSubmit" onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleChange} />
          <input type="reset" value="Reset"/>
        </label>
        <label className="methods">
          <button data-testid="method" id="get" type="submit" value="GET"  onClick={handleClickGet}>GET</button>
          <button id="post" type="submit" value="POST" onClick={handleClickPost}>POST</button>
          <button id="put" type="submit" value="PUT" onClick={handleClickPut}>PUT</button>
          <button id="delete" type="submit" value="DELETE" onClick={handleClickDelete}>DELETE</button>
        </label>
      </form>
    </>
  );

}

export default Form;
