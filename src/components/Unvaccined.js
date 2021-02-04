import React, { useState } from 'react';




const users = [
    {name:'Ram Hari',id:2344,contact:'ram@gmail.com',patient_id:'ram@123',location:'chabahil-04'},
    {name:'Shyam Hari',id:2344,contact:'9846525654',patient_id:'shyam@123',location:'chabahil-04'},
    {name:'Hari Ram',id:2344,contact:'ram@gmail.com',patient_id:'hari@123',location:'chabahil-04'},
    {name:'Geeta Kumari',id:2344,contact:'ram@gmail.com',patient_id:'geeta@123',location:'chabahil-04'},
    {name:'Seeta Kumari',id:2344,contact:'9849854654',patient_id:'seeta@123',location:'chabahil-04'},
  ];

const Unvaccined = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index);
  // };
  

    // const active = index === activeIndex ? 'active' : '';

    return (
      <div className="container">
      <div className="py-4">
        <h1>Unvaccined Regisstered Users</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Patient Id</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.patient_id}</td>
                <td>{user.contact}</td>
                <td>{user.location}</td>
                <td>
                  <div class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    Fix Appointment
                  </div>
                  
                  <div
                    class="btn btn-danger"
                    // onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Unvaccined;
