import { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { userNameContext } from './context/context';

const Companies = () => {
    
    const [companyList, setCompanyList] = useState('');
    const mycontext = useContext(userNameContext);
    const token = mycontext.mytoken;
    let navigate = useNavigate();


    useEffect(() => {
        fetch('http://api.myswastikonline.com/api/Company/CompanyList?UserName=2228&LicId=2622&NoOfBranch=0', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('error Fetching Data');
                }
                return res.json()
            }).then(response => {
                setCompanyList(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error.message);
            })
    }, []);
    
    const handleCompanyClick = (companyName,fiscalYear,initial) =>{
        mycontext.setLoggedCompany(companyName);
        mycontext.setcurrentFiscalyear(fiscalYear);
        mycontext.setInitial(initial);
        navigate('/Dashboard');
    }

    return (
        <>
            <div className="main-panel mt-3">
                <div className="panel-heading pt-2 mb-0">
                    <b>Select Company</b>
                </div>
                <hr />
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Fiscal Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyList?.length > 0 ? (
                                companyList && companyList.map((company, i) => (
                                    <tr key={i}>
                                        <td onClick={() => handleCompanyClick(company.companyName,company.fiscalYear,company.initial)}>{company.companyName}</td>
                                        <td>{company.fiscalYear}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Companies;