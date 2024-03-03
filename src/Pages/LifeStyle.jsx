import React, { useState } from "react";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { useNavigate } from "react-router-dom";

const LifeStyle = ({ register, setRegister }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setRegister(true);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };

  const initialData = [
    { id: 1, category: 'Food and drink products', name: '' },
    { id: 2, category: 'Pharmaceuticals', name: ''},
    { id: 3, category: 'Clothes, textiles and shoes', name: ''},
    { id: 4, category: 'Paper based products (e.g. books, magazines, newspapers)', name: ''},
    { id: 5, category: 'Computers and IT equipment', name: '' },
    { id: 6, category: 'Television, radio and phone (equipment)', name: ''}
  ];

  const [inputData, setInputData] = useState(initialData);

  const handleNameChange = (id, newName) => {
    const newData = inputData.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setData(newData);
  };

  const usernameOptions = [ 'Month', 'Year'];
  const [data, setData] = useState(initialData);

  const handleUsernameChange = (id, newUsername) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, username: newUsername };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="d-flex">
      <SideBar handleLogOut={handleLogOut} />
      <div
        className="inner-home-page"
      >
        <NavBar handleLogOut={handleLogOut} />

        <div className="card-body">
            <div className="table-body">
                <div className="table-bg">
                    <table className="table">
                        <tbody>
                            {data.map(item => (
                            <tr key={item.id}>
                                <td style={{width:'80px'}}>{item.id}</td>
                                <td>{item.category}</td>
                                <td>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.464,6c1.43,0,2.779,0.613,3.799,1.726l1.475-1.352C17.334,4.843,15.461,4,13.464,4c-1.998,0-3.87,0.843-5.272,2.375 C7.491,7.139,6.951,8.031,6.589,9H4v2h2.114c-0.038,0.33-0.064,0.663-0.064,1s0.026,0.67,0.064,1H4v2h2.589 c0.362,0.97,0.901,1.861,1.603,2.626C9.594,19.157,11.466,20,13.464,20c1.997,0,3.87-0.843,5.273-2.374l-1.475-1.352 C16.243,17.387,14.894,18,13.464,18s-2.778-0.612-3.798-1.726C9.316,15.893,9.041,15.457,8.801,15H13v-2H8.139 c-0.05-0.328-0.089-0.66-0.089-1s0.039-0.672,0.089-1H13V9H8.801c0.24-0.457,0.516-0.893,0.865-1.274 C10.686,6.613,12.034,6,13.464,6z"></path></svg>
                                    <input
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handleNameChange(item.id, e.target.value)}
                                    />
                                </td>
                                <td>
                                <select
                                    value={item.username}
                                    onChange={(e) => handleUsernameChange(item.id, e.target.value)}
                                >
                                    {usernameOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="row next-btn">
            <div className="col-3 pdf-btn">
                <button>Save as PDF</button>
            </div>
            <div className="col-3">
                <Button title="Generate Report" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;
