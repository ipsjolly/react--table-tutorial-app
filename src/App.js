// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basic.table';
import FilterTableComponent from './components/filter.table';
import PaginationTableComponent from './components/pagination.table';
import SortingTableComponent from './components/sorting.table';
import ExpandableTableComponent from './components/expandable.table';

function App() {

  return (
    <div className="App">

      <h3>Basic Table using <code>react-table</code></h3>

      <BasicTableComponent />

      <h3>Filter Table using <code>react-table</code></h3>

      <FilterTableComponent />

      <h3>Table with Pagination using <code>react-table</code></h3>

      <PaginationTableComponent />

      <h3>Sorting on Table using <code>react-table</code></h3>

      <SortingTableComponent />

      <h3>Expandable on Table using <code>react-table</code></h3>

      <ExpandableTableComponent />

    </div>
  );
}

export default App;
