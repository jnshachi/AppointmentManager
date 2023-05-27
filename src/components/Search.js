import React, {useState} from 'react';
import { BiSearch, BiCaretDown ,BiCheck } from 'react-icons/bi';
import '../style/Search.scss'

const DropDown = ({sortBy,onSortByChange,orderBy,onOrderByChange}) => {
  return (
    <div className="dropdown">
      <div className="dropdown-menu">
        <div className="dropdown-item" onClick={()=>onSortByChange('patientname')}>
          Patient Name{ (sortBy === 'patientname')&& <BiCheck className='tick' />}
        </div>
        <div className="dropdown-item" onClick={()=>onSortByChange('aptDate')} >
          Date{ (sortBy === 'aptDate') && <BiCheck className='tick' />}
        </div>
        <div className="dropdown-item" onClick={()=>onOrderByChange('asc')}>
          Asc{(orderBy === 'asc') && <BiCheck className='tick'/>}
        </div>
        <div className="dropdown-item" onClick={()=>onOrderByChange('dsc')} >
          Desc{ (orderBy === 'dsc') && <BiCheck className='tick' />}
        </div>
      </div>
    </div>
  );
};

const Search = ({query, onQueryChange ,sortBy, onSortByChange, orderBy, onOrderByChange}) => {
  let [toogleDropdown,setToogleDropdown] = useState(false);
  return (
    <div className="search-container">
      <div className="search-input">
        <div className="search-icon">
          <BiSearch />
        </div>
        <input className="search-input-field"
          type="text"
          name="query"
          placeholder="Search"
          value={query}
          onChange={(event)=>{onQueryChange(event.target.value)}}
        />
        <div className="search-button">
          <button type="button" onClick={()=> setToogleDropdown(!toogleDropdown)} >
            Sort By <BiCaretDown className="button-icon" />
          </button>
          {
            toogleDropdown &&
            <DropDown 
              sortBy = {sortBy}
              onSortByChange = {mySort => onSortByChange(mySort)}
              orderBy = {orderBy}
              onOrderByChange = {myOrder => onOrderByChange(myOrder)}
            />
          }
          
        </div>
      </div>
    </div>
  );
};

export default Search;