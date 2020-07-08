// src/components/expandable.table.js
import React from "react";

import { useTable, useExpanded } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

import makeData from './makeData'

function Table({ columns: userColumns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded },
    } = useTable(
        {
            columns: userColumns,
            data,
        },
        useExpanded // Use the useExpanded plugin hook
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
            <pre>
                <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
            </pre>
        </div >
    )
}

function ExpandableTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                id: 'expander', // Make sure it has an ID
                Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
                    <span {...getToggleAllRowsExpandedProps()}>
                        {isAllRowsExpanded ? '👇' : '👉'}
                    </span>
                ),
                Cell: ({ row }) =>
                    row.canExpand ? (
                        <span
                            {...row.getToggleRowExpandedProps({
                                style: {
                                    paddingLeft: `${row.depth * 2}rem`,
                                },
                            })}
                        >
                            {row.isExpanded ? '👇' : '👉'}
                        </span>
                    ) : null,
            },
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "motion-cq4n1",
            "lastName": "gold-c44qg",
            "age": 5,
            "visits": 89,
            "progress": 70,
            "status": "relationship",
            "subRows": [
                {
                    "firstName": "digestion-67zau",
                    "lastName": "presence-f0w8w",
                    "age": 17,
                    "visits": 89,
                    "progress": 67,
                    "status": "relationship",
                    "subRows": [
                        {
                            "firstName": "destruction-xbuvr",
                            "lastName": "growth-mrmei",
                            "age": 2,
                            "visits": 28,
                            "progress": 48,
                            "status": "complicated"
                        }
                    ]
                },
                {
                    "firstName": "rifle-1kwh3",
                    "lastName": "awareness-qmhrt",
                    "age": 0,
                    "visits": 32,
                    "progress": 65,
                    "status": "complicated",
                    "subRows": [
                        {
                            "firstName": "aftermath-g4ydv",
                            "lastName": "mixture-hykkg",
                            "age": 11,
                            "visits": 94,
                            "progress": 70,
                            "status": "complicated"
                        }
                    ]
                }
            ]
        },
        {
            "firstName": "philosophy-068q6",
            "lastName": "sticks-07qdm",
            "age": 9,
            "visits": 47,
            "progress": 6,
            "status": "relationship",
            "subRows": [
                {
                    "firstName": "hole-eeai8",
                    "lastName": "historian-yhikw",
                    "age": 26,
                    "visits": 32,
                    "progress": 97,
                    "status": "relationship",
                    "subRows": [
                        {
                            "firstName": "stitch-lsuft",
                            "lastName": "suggestion-j7r61",
                            "age": 17,
                            "visits": 23,
                            "progress": 99,
                            "status": "single"
                        },
                        {
                            "firstName": "world-2wi9s",
                            "lastName": "courage-q0fvw",
                            "age": 20,
                            "visits": 27,
                            "progress": 1,
                            "status": "relationship"
                        }
                    ]
                },
                {
                    "firstName": "pen-y8060",
                    "lastName": "magazine-uxycr",
                    "age": 6,
                    "visits": 57,
                    "progress": 83,
                    "status": "single",
                    "subRows": [
                        {
                            "firstName": "problem-393nd",
                            "lastName": "product-efasy",
                            "age": 12,
                            "visits": 13,
                            "progress": 1,
                            "status": "single"
                        }
                    ]
                }
            ]
        }
    ]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default ExpandableTableComponent;