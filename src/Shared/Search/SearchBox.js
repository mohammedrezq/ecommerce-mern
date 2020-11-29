import React, { useState } from "react"
;
// import SearchIcon from '@material-ui/icons/Search';

import './SearchBox.css';

const SearchBox = ( {history} ) => {
    const [keyword, setKeyword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

  return (
      <form className={`search-box`} type="search" onSubmit={submitHandler}>
          <button className={`search-icon-button`} >
              {/* <SearchIcon /> */}
              <svg className="pre-search-input-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24"><path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path></svg>
          </button>
          <input className={`search-input-box`} type="search" name="q" onChange={(e) => setKeyword(e.target.value)} placeholder="Search" />
      </form>
  )
};

export default SearchBox;
