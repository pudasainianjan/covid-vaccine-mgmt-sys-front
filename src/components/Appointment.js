import React, { useState } from 'react';




const users = [
    {name:'Ram Hari',apo_id:2344,contact:'ram@gmail.com',username:'ram@123',appointment_date:'2077/10/12',completed:'yes'},
    {name:'Shyam Hari',apo_id:2344,contact:'9846525654',username:'shyam@123',appointment_date:'2077/10/19',completed:'no'},
    {name:'Hari Ram',apo_id:2344,contact:'ram@gmail.com',username:'hari@123',appointment_date:'2077/11/19',completed:'yes'},
    {name:'Geeta Kumari',apo_id:2344,contact:'ram@gmail.com',username:'geeta@123',appointment_date:'2077/12/19',completed:'no'},
    {name:'Seeta Kumari',apo_id:2344,contact:'9849854654',username:'seeta@123',appointment_date:'2077/08/19',completed:'yes'},
  ];

const Appointment = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index);
  // };
  

    // const active = index === activeIndex ? 'active' : '';

    return (
      <div className="container">
      <div className="py-4">
        <h1>Appointment Status</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Apo. Id</th>
              <th scope="col">Contact</th>
              <th scope="col">Username</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.apo_ids}</td>
                <td>{user.contact}</td>
                <td>{user.username}</td>
                <td>{user.appointment_date}</td>
                <td>{user.completed}</td>
                <td>
                  <div class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
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

export default Appointment;
