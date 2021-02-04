import React, { useState } from 'react';



const users = [
    {name:'abcd drugs',availability:'available',vacc_number:'100',type:'covid-19',id:2344,contact:'ram@gmail.com',patient_id:'ram@123',location:'chabahil-04'},
    {name:'xero-55',availability:'available',vacc_number:'200',type:'covid-19',id:2344,contact:'9846525654',patient_id:'shyam@123',location:'chabahil-04'},
    {name:'alpha-99',availability:'available',vacc_number:'150',type:'covid-19',id:2344,contact:'ram@gmail.com',patient_id:'hari@123',location:'chabahil-04'},
    {name:'nepal-medicine',availability:'available',vacc_number:'0',type:'covid-19',id:2344,contact:'ram@gmail.com',patient_id:'geeta@123',location:'chabahil-04'},
    {name:'vaccine-99',availability:'available',vacc_number:'10',type:'covid-19',id:2344,contact:'9849854654',patient_id:'seeta@123',location:'chabahil-04'},
  ];

const Vaccine = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index);
  // };
  

    // const active = index === activeIndex ? 'active' : '';

    return (
      <div className="container">
      <div className="py-4">
        <h1>People Who Just Vaccinated(details)</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Availability</th>
              <th scope="col">No. of vaccine</th>
              <th scope="col">Type</th>
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
                <td>{user.availability}</td>
                <td>{user.vacc_number}</td>
                <td>{user.type}</td>
                <td>{user.patient_id}</td>
                <td>{user.contact}</td>
                <td>{user.location}</td>
                <td>
                  <div class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </div>
                  <div
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
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

export default Vaccine;
