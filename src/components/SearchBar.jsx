
import * as React from 'react';
import { useState } from "react";
import '../App.css';

let searchtask = [];

  export default function SSearchBar({ filterText, toggle, onFilterTextChange, ontoggleChange }) {
    return (
      <div>
        <div className="componant" aria-roledescription="search">
          <input
            onChange={(e) => {
              onFilterTextChange(e.target.value);
            }}
            title="SearchInput"

            type="search"
            className="searchBar"
            placeholder="Search for a task"
          />
        </div>
        <label>
          <input
          title="DisplayToggle"
            type="checkbox"
            checked={toggle}
            onChange={(e) => ontoggleChange(e.target.checked)}
          />{" "}
          check to hide to dos
        </label>
      </div>
    );
  }