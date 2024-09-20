import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Dashboard = ({ loggedUsername,loggedCompany,currentFiscalyear }) => {
    return ( 
        <>
            <Navbar username={loggedUsername} loggedCompany={loggedCompany} currentFiscalyear={currentFiscalyear}/>

            <div className="main-panel mt-3">
                <div className="panel-heading pt-2 mb-0">
                    <b>Product Lists</b>
                </div>
                <hr />
                <div>
                    <table id='ProductTable' className="table table-bordered table-hover no-footer">
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Description</th>
                                <th>ShortName</th>
                                <th>HsCode</th>
                                <th>BarCode</th>
                                <th>Group</th>
                                <th>MRP</th>
                                <th>Buy Rate</th>
                                <th>Sales Rate</th>
                                <th>Unit</th>
                                <th>Image</th>
                                <th className='actionColumn'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Test Product</td>
                                <td>Te0001</td>
                                <td>21469853</td>
                                <td>245445535434</td>
                                <td>TestGroup</td>
                                <td>120</td>
                                <td>90</td>
                                <td>110</td>
                                <td>KG</td>
                                <td><img src="./vite.svg" alt="image" /></td>
                                <td>
                                    <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                    <Link to={'/'} className="actionDeleteButton">Delete</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Test Product2</td>
                                <td>Te0002</td>
                                <td>21469853</td>
                                <td>245445535434</td>
                                <td>TestGroup</td>
                                <td>120</td>
                                <td>90</td>
                                <td>110</td>
                                <td>KG</td>
                                <td><img src="./vite.svg" alt="image" /></td>
                                <td>
                                    <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                    <Link to={'/'} className="actionDeleteButton">Delete</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Test Product2</td>
                                <td>Te0002</td>
                                <td>21469853</td>
                                <td>245445535434</td>
                                <td>TestGroup</td>
                                <td>120</td>
                                <td>90</td>
                                <td>110</td>
                                <td>KG</td>
                                <td><img src="./vite.svg" alt="image" /></td>
                                <td>
                                    <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                    <Link to={'/'} className="actionDeleteButton">Delete</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Test Product2</td>
                                <td>Te0002</td>
                                <td>21469853</td>
                                <td>245445535434</td>
                                <td>TestGroup</td>
                                <td>120</td>
                                <td>90</td>
                                <td>110</td>
                                <td>KG</td>
                                <td><img src="./vite.svg" alt="image" /></td>
                                <td>
                                    <Link to={'/'} className="actionEditButton">Edit</Link>&nbsp;
                                    <Link to={'/'} className="actionDeleteButton">Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;