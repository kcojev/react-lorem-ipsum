import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world');
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
    <label htmlFor="amount">
      paragraphs: 
    </label>
    <input 
      type="number" 
      name='amount'
      id='amount'
      value={count}
      onChange={(e) => setCount(e.target.value)}
    />
    <button type='submit' className='btn'>
      generate
    </button>
    </form>
    <article className="lorem-text">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt molestias cumque necessitatibus fuga perspiciatis a ullam nostrum! Non labore porro nemo excepturi rerum, aspernatur cumque facere, expedita obcaecati doloribus numquam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius accusamus in placeat! Odit nisi dolor quos nihil natus, voluptatem in fuga magnam tempore placeat quas nostrum animi atque eligendi cumque.</p>
    </article>
  </section>
    )
}

export default App;
