import React from 'react'
import "./search.css"

function Search() {
  return (
    <>
    <header className='search-nav'>
      <h1>github finder </h1>
      <p>By <a href="https://github.com/VicGriffin" target='_blank'>Victor kamau</a></p>
      <div className='search-place'>
      <input type="text" value="" placeholder='search'/>
      <button>search</button>
      </div>
    </header>
    </>
  )
}

export default Search