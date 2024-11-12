import {useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let api = "http://localhost:8080/employee/userdisplay";
        axios.get(api).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.firstname}</td>
                    <td>{key.secondname}</td>
                    <td>{key.userid.username}</td>
                    <td>{key.userid.email}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>display data</h1>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Secondname</th>
                    <th>User ID</th>
                    <th>Email</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default Display;