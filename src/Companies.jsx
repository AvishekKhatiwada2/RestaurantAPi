import { useEffect, useState } from 'react';
import Navbar from './Navbar'

const Companies = ({ loggedUsername }) => {
    const username=loggedUsername;
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('http://api.myswastikonline.com/api/Company/CompanyList?UserName=2228&LicId=2622&NoOfBranch=0',{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTc1Njc4NDUsImlzcyI6IkhpdGVjaEFQSUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSGl0ZWNoQVBJU2VydmljZVBvc3RNYW5DbGllbnQifQ.amJBJmY9Svb9bp97fbZfBZ0lAxwv0zeJtktSmc3FtqA' 
            }
        })
        .then(res => {
            if(!res.ok)
            {
                throw new Error('error Fetching Data');
            }
            return res.json()
        }).then(data =>{
            setData(data);
            console.log(data);
        }).catch(error => {
            console.log(error.message);
        })
    },[]);

    return ( 
        <>
            <Navbar username={username}/>
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
                            {data ?? data.Map((cmpny,i) => (
                            <tr key={i}>
                               <td>{cmpny.data[0].companyName}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Companies;