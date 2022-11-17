import React from 'react'
import DataTable from 'react-data-table-component'

const Table = ({columns, data}) => {
    const ExpandedComponent =({ data }) => {
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    }

    return (
        <DataTable 
            columns={columns} 
            data={data} 
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
        />
    )
}

export default Table
