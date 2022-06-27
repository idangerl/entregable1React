import React, { useState } from 'react';
import quotes from '../quotes.json'

const colors = ['#845EC2','#2C73D2','#0081CF','#0089BA','#008E9B','#008F7A']


const QuoteBox = () => {

    const subIndex = Math.floor(Math.random() * quotes.length)

    const [index , setIndex] = useState(subIndex)

    const changeCite = () => {
        const subIndex2 = Math.floor(Math.random() * quotes.length)
        setIndex(subIndex2)
    }

    const randomColor = Math.floor(Math.random() * colors.length)
    const color = colors[randomColor]

    document.body.style = `background: ${color}; color: ${color}`
      

    return (
        <div className='container'>
            <i className='bx bxs-quote-left'></i>
            <span>{quotes[index].quote}</span>
            <br /><br /><br />
            <cite>{quotes[index].author}</cite>
            <br /><br /><br />
            <button onClick={changeCite} style={{background:color}}><i className='bx bx-chevron-right' ></i></button>
        </div>
    );
};

export default QuoteBox;