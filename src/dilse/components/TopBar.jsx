import React from 'react';
import { IoMdSearch } from "react-icons/io";
const TopBar = () => {
  return (
    <section className="topBarSection">
      {/* Company Title */}
      <div className="companyTitle">
        Dilse
      </div>

      {/* Search Section */}
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"><IoMdSearch /></i>
        </button>
      </div>
      {/* User Authentication Section */}
      <div className="userAuth">
        Login / Signup
      </div>
    </section>
  );
};

export default TopBar;
