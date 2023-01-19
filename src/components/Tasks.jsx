import * as React from 'react';
import { useState } from "react";
import ToDo from './ToDo';
import '../App.css';

let searchtask = [];

  export default function Tasks({ displaytodo, filterText, toggle }) {
    if (toggle) displaytodo = [];
    const searchQuery = filterText.toLowerCase();
    searchtask = [];
    for (let j = 0; j < displaytodo.length; j++) {
      let str = displaytodo[j];
      let t = str.task;
  
      if (t.includes(searchQuery)) {
          searchtask.push(str);
      }
    }
    displaytodo = searchtask.slice(0);
    return (
      <div>
        <div className="tasks" title='DisplaySpace'>
          {displaytodo.map((todo) => {
            return <ToDo todo={todo} filtertext={filterText} toggle={toggle}/>;
          })}
        </div>
      </div>
    );
  }
  