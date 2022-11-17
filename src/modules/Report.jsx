import React from 'react'
import Table from '../components/Table'
import { Container } from 'reactstrap'

const columns = [
    {
        name: 'Application',
        selector: row => row.app_name,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row => row.action_name,
        sortable: true,
    },
    {
        name: 'Trigger',
        selector: row => row.trigger_name,
        sortable: true,
    },
]

const Report = ({data}) => {
    return (
        <Container>
             <Table columns={columns} data={data}/>
        </Container>
    )
}

export default Report



