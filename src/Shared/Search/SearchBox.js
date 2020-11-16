import React, { useState } from "react"
;
import SearchIcon from '@material-ui/icons/Search';

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
        console.log("Search Box")
    }

  return (
      <form className={`search-box`} type="search" onSubmit={submitHandler}>
          <button className={`search-icon-button`} ><SearchIcon /></button>
          <input className={`search-input-box`} type="search" name="q" onChange={(e) => setKeyword(e.target.value)} placeholder="Search" />
      </form>
  )
};

export default SearchBox;
