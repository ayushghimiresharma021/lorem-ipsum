
import { useState } from 'react';
import './App.css';
import text_01 from './data';

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([])

  const increase = (e) => {
    e.preventDefault()
    let amount = parseInt(count)

    if (amount<=0){
      amount = 0
    }
    else if(amount>8){
      amount=8
    }
    setText(text_01.slice(0,amount))
  }
  return (
    <section className='section-center'> 
      <h3>tired of boring lorem Ipsum</h3>
      <form className='lorem-form' onSubmit={increase}>
        <label htmlFor='amount' >Paragraphs</label>
        <input value ={count} id='amount' name='amount' type='number' onChange={(e) => setCount(e.target.value)} />
        <button className='btn' type='submit' >Generate</button>
      </form>
        <article className='lorem-text'>
          {text}
        </article>
      
    </section>
  );
}

export default App;
