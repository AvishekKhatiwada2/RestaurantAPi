import { Link } from 'react-router-dom';
import useFetch from './useFetch'
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

const ProductTable = () => {
    // let [records, setRecords] = useState([])
    const { data, error, loading } = useFetch('http://api.myswastikonline.com/api/Master/ProductList?Event=44&UserId=2228&Invoice_No=0&Product_Code=0&ProGroup_Code=0&Branch_Code=0&init=KK990001');
    const [search, setSearch] = useState(''); 

    const columns = [
        { name: 'Sno',selector: row=> row.sn,sortable: true,compact:true,width:'40px'},
        { name: 'Description',selector: row => row.p_Desc,sortable: true,width:'250px' },
        { name: 'ShortName',selector: row => row.p_ShortName,compact: true },
        { name: 'ProductGroup',selector: row => row.pr_GrpDesc,compact: true },
        { name: 'Unit',selector: row => row.unit,width:'70px' },
        { name: 'SalesRate',selector: row => row.sales_Rate,compact: true },
        { name: 'Action',
                cell: row => (
                    <div>
                        <Link onClick={()=> handleEdit(row)} className="actionEditButton">Edit</Link>&nbsp;
                        <Link onClick={()=> handleDelete(row)} className="actionDeleteButton">Delete</Link>
                    </div>
                )
        }
    ];
    // const tableData = [
    //     {
    //         id: 1,
    //         p_Desc: 'Apple',
    //         p_ShortName: 'a00001',
    //         pr_GrpDesc: 'fruit',
    //         unit: 'KG',
    //         sales_Rate: '120'
    //     },
    //     {
    //         id: 2,
    //         p_Desc: 'Banana',
    //         p_ShortName: 'b00002',
    //         pr_GrpDesc: 'Fruit',
    //         unit: 'Dozen',
    //         sales_Rate: '60'
    //     },
    //     {
    //         id: 3,
    //         p_Desc: 'Carrot',
    //         p_ShortName: 'c00003',
    //         pr_GrpDesc: 'Vegetable',
    //         unit: 'KG',
    //         sales_Rate: '80'
    //     },
    //     {
    //         id: 4,
    //         p_Desc: 'Milk',
    //         p_ShortName: 'm00004',
    //         pr_GrpDesc: 'Dairy',
    //         unit: 'Liter',
    //         sales_Rate: '50'
    //     },
    //     {
    //         id: 5,
    //         p_Desc: 'Eggs',
    //         p_ShortName: 'e00005',
    //         pr_GrpDesc: 'Poultry',
    //         unit: 'Dozen',
    //         sales_Rate: '100'
    //     }
    // ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const records = data.data.map(item=>({
        sn: item.sn,
        p_Desc: item.p_Desc,
        p_ShortName: item.p_ShortName,
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
            <div className='text-end'><input type="text" placeholder='Search....' value={search} onChange={(e) => setSearch(e.target.value)}/></div>
            <DataTable
                columns={columns}
                data={filteredRecords}
                // selectableRows
                fixedHeader
                responsive
                highlightOnHover
                dense
                pagination
            ></DataTable>
            {/* <DataTable data={Products}className='display'></DataTable> */}
            {/* <table id='ProductTable' className="table table-bordered table-hover no-footer">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Description</th>
                        <th>ShortName</th>
                        <th>Product Group</th>
                        <th>Unit</th>
                        <th>Sales Rate</th>
                        <th className='actionColumn'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.sn}>
                            <td>{item.sn}</td>
                            <td>{item.p_Desc}</td>
                            <td>{item.p_ShortName}</td>
                            <td>{item.pr_GrpDesc}</td>
                            <td>{item.unit}</td>
                            <td>{item.sales_Rate}</td>
                            <td>
                                <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                <Link to={'/'} className="actionDeleteButton">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    );
}

export default ProductTable;