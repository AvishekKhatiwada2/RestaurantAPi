import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Dashboard = ({ loggedUsername,loggedCompany,currentFiscalyear }) => {
    return ( 
        <>
            <div className="main-panel mt-3">
                <div className="panel-heading pt-2 mb-0">
                    <b>Product Lists</b>
                </div>
                <hr />
                <div className='panel-body'>
                    Dashboard
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;