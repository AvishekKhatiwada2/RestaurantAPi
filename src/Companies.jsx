import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Companies = ({ loggedUsername,setLoggedCompany,setcurrentFiscalyear }) => {
    const username = loggedUsername;
    const [companyList, setCompanyList] = useState('');
    let navigate = useNavigate();


    useEffect(() => {
        fetch('http://api.myswastikonline.com/api/Company/CompanyList?UserName=2228&LicId=2622&NoOfBranch=0', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTc1Njc4NDUsImlzcyI6IkhpdGVjaEFQSUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSGl0ZWNoQVBJU2VydmljZVBvc3RNYW5DbGllbnQifQ.amJBJmY9Svb9bp97fbZfBZ0lAxwv0zeJtktSmc3FtqA'
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
            <Navbar username={username} />
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