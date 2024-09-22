import { Link } from 'react-router-dom';
import useFetch from './useFetch'
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const ProductTable = () => {
    const { data, error, loading } = useFetch('http://api.myswastikonline.com/api/Master/ProductList?Event=44&UserId=2228&Invoice_No=0&Product_Code=0&ProGroup_Code=0&Branch_Code=0&init=KK990001');

    const columns = [
        {
            name: 'Description',
            selector: row => row.p_Desc,
            sortable: true
        },
        {
            name: 'ShortName',
            selector: row => row.p_ShortName
        },
        {
            name: 'ProductGroup',
            selector: row => row.pr_GrpDesc
        },
        {
            name: 'Unit',
            selector: row => row.unit
        },
        {
            name: 'SalesRate',
            selector: row => row.sales_Rate
        }
    ];
    const tableData = [
        {
            id: 1,
            p_Desc: 'Apple',
            p_ShortName: 'a00001',
            pr_GrpDesc: 'fruit',
            unit: 'KG',
            sales_Rate: '120'
        },
        {
            id: 2,
            p_Desc: 'Banana',
            p_ShortName: 'b00002',
            pr_GrpDesc: 'Fruit',
            unit: 'Dozen',
            sales_Rate: '60'
        },
        {
            id: 3,
            p_Desc: 'Carrot',
            p_ShortName: 'c00003',
            pr_GrpDesc: 'Vegetable',
            unit: 'KG',
            sales_Rate: '80'
        },
        {
            id: 4,
            p_Desc: 'Milk',
            p_ShortName: 'm00004',
            pr_GrpDesc: 'Dairy',
            unit: 'Liter',
            sales_Rate: '50'
        },
        {
            id: 5,
            p_Desc: 'Eggs',
            p_ShortName: 'e00005',
            pr_GrpDesc: 'Poultry',
            unit: 'Dozen',
            sales_Rate: '100'
        },
        {
            id: 6,
            p_Desc: 'Orange',
            p_ShortName: 'o00006',
            pr_GrpDesc: 'Fruit',
            unit: 'KG',
            sales_Rate: '150'
        },
        {
            id: 7,
            p_Desc: 'Tomato',
            p_ShortName: 't00007',
            pr_GrpDesc: 'Vegetable',
            unit: 'KG',
            sales_Rate: '40'
        },
        {
            id: 8,
            p_Desc: 'Yogurt',
            p_ShortName: 'y00008',
            pr_GrpDesc: 'Dairy',
            unit: 'Liter',
            sales_Rate: '60'
        },
        {
            id: 9,
            p_Desc: 'Potato',
            p_ShortName: 'p00009',
            pr_GrpDesc: 'Vegetable',
            unit: 'KG',
            sales_Rate: '30'
        },
        {
            id: 10,
            p_Desc: 'Chicken',
            p_ShortName: 'c00010',
            pr_GrpDesc: 'Poultry',
            unit: 'KG',
            sales_Rate: '200'
        },
        {
            id: 11,
            p_Desc: 'Eggs',
            p_ShortName: 'e00005',
            pr_GrpDesc: 'Poultry',
            unit: 'Dozen',
            sales_Rate: '100'
        },
        {
            id: 12,
            p_Desc: 'Orange',
            p_ShortName: 'o00006',
            pr_GrpDesc: 'Fruit',
            unit: 'KG',
            sales_Rate: '150'
        },
        {
            id: 13,
            p_Desc: 'Tomato',
            p_ShortName: 't00007',
            pr_GrpDesc: 'Vegetable',
            unit: 'KG',
            sales_Rate: '40'
        },
        {
            id: 14,
            p_Desc: 'Yogurt',
            p_ShortName: 'y00008',
            pr_GrpDesc: 'Dairy',
            unit: 'Liter',
            sales_Rate: '60'
        },
        {
            id: 15,
            p_Desc: 'Potato',
            p_ShortName: 'p00009',
            pr_GrpDesc: 'Vegetable',
            unit: 'KG',
            sales_Rate: '30'
        },
        {
            id: 16,
            p_Desc: 'Chicken',
            p_ShortName: 'c00010',
            pr_GrpDesc: 'Poultry',
            unit: 'KG',
            sales_Rate: '200'
        }
    ];
    const [records, setRecords] = useState(tableData)
    const handleFilter =(e) =>{
        const newData = tableData.filter (row =>  {
            return row.p_Desc.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newData);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className='text-end'><input type="text" placeholder='search by description' onChange={handleFilter}/></div>
            <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
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