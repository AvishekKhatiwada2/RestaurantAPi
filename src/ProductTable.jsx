import { Link } from 'react-router-dom';
import useFetch from './useFetch'
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

const ProductTable = () => {
    // let [records, setRecords] = useState([])
    const { data, error, loading } = useFetch('http://api.myswastikonline.com/api/Master/ProductList?Event=44&UserId=2228&Invoice_No=0&Product_Code=0&ProGroup_Code=0&Branch_Code=0&init=KK990001');
    const [search, setSearch] = useState('');

    const columns = [
        { name: 'Sno', selector: row => row.sn, sortable: true, width: '40px', compact: 1 },
        { name: 'ShortName', selector: row => row.p_ShortName },
        { name: 'Description', selector: row => row.p_Desc, sortable: true, width: '250px' },
        { name: 'ProductGroup', selector: row => row.pr_GrpDesc },
        { name: 'Unit', selector: row => row.unit, width: '70px' },
        { name: 'SalesRate', selector: row => row.sales_Rate },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <Link onClick={() => handleEdit(row)} className="actionEditButton">Edit</Link>&nbsp;
                    <Link onClick={() => handleDelete(row)} className="actionDeleteButton">Delete</Link>
                </div>
            )
        }
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#e4e7e4',
                borderBottom: '2px solid black',
                color: '#000'

            }
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const records = data.data.map(item => ({
        sn: item.sn,
        p_ShortName: item.p_ShortName,
        p_Desc: item.p_Desc,
        pr_GrpDesc: item.pr_GrpDesc,
        unit: item.unit,
        sales_Rate: item.sales_Rate
    }));

    const filteredRecords = records.filter(record =>
        record.p_Desc.toLowerCase().includes(search.toLowerCase()) ||
        record.p_ShortName.toLowerCase().includes(search.toLowerCase()) ||
        record.pr_GrpDesc.toLowerCase().includes(search.toLowerCase())
    );
    // Edit handler
    const handleEdit = (row) => {
        console.log('Edit:', row); // Implement your edit logic here
    };

    // Delete handler
    const handleDelete = (row) => {
        console.log('Delete:', row); // Implement your delete logic here
        // You can also add a confirmation dialog before deleting
    };


    return (
        <>
            <div className='d-flex justify-content-end mb-1'>
                <input type="text" className='SearchBar' placeholder='Search....' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <DataTable
                columns={columns}
                data={filteredRecords}
                customStyles={customStyles}
                fixedHeader
                responsive
                highlightOnHover
                dense
                pagination
            ></DataTable>
        </>
    );
}

export default ProductTable;