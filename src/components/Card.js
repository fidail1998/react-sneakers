

import React from 'react'

const Card = () => {
  return (
    <div className="card">
    <div className="favorite">
    <img src ='/img/heart-unliked.svg' />
    </div>
      <img  width={133} height={112} src="/img/sneakers/1.jpg"/>
      <h5>Мужские Кроссовки Nike Air Max 270</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>12999 руб.</b>
        </div>
        <button className="button">
        <img width={11} height={11} src='/img/plus.svg'/>
        </button>
      </div>
     </div>
  )
}

export default Card