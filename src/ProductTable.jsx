import { Link } from 'react-router-dom';
import useFetch from './useFetch'

const ProductTable = () => {
    const { data, error, loading } = useFetch('http://api.myswastikonline.com/api/Master/ProductList?Event=44&UserId=2228&Invoice_No=0&Product_Code=0&ProGroup_Code=0&Branch_Code=0&init=KK990001');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <table id='ProductTable' className="table table-bordered table-hover no-footer">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Description</th>
                        <th>ShortName</th>
                        <th>Product Group</th>
                        <th>Unit</th>
                        <th>Sales Rate</th>
                        {/* <th>Image</th> */}
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
                            {/* <td><img src="./vite.svg" alt="image" /></td> */}
                            <td>
                                <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                <Link to={'/'} className="actionDeleteButton">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;