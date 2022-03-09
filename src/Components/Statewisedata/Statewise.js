import React, { useEffect, useState } from "react";
import "./Statewise.css";
const Statewise=()=>{

    const[data,setData]=useState([]);

    const getCovidData=async()=>{
        const result=await fetch('https://data.covid19india.org/data.json');
        const actual=await result.json();
    //    console.log(actual.Statewise);
        setData(actual.Statewise);
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <>
            <div className="container-fluid mt-5">
                <div>
                <h1><span>INDIA</span>This is covid tracker</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((current,index)=>{
                                return(
                                    <tr>
                                        <th>{current.state}</th>
                                        <td>Confirmed</td>
                                        <td>Recovered</td>
                                        <td>deaths</td>
                                        <td>active</td>
                                        <td>updated</td>
                                    </tr>
                                )      
                                })
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Statewise;