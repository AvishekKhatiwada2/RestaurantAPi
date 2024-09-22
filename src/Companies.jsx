import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Companies = ({ loggedUsername,setLoggedCompany,setcurrentFiscalyear,token }) => {
    
    const [companyList, setCompanyList] = useState('');
    // const [url, setUrl] = useState('');
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
                setLoggedCompany(response.data[0].companyName)
            }).catch(error => {
                console.log(error.message);
            })
    }, []);
    
    const handleCompanyClick = (companyName,fiscalYear) =>{
        setLoggedCompany(companyName);
        setcurrentFiscalyear(fiscalYear);
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
                                        <td onClick={() => handleCompanyClick(company.companyName,company.fiscalYear)}>{company.companyName}</td>
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