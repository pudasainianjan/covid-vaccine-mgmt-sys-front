import React, { useState } from 'react';


const users = [
    {name:'Dr.Ram',department:'dep-1',id:2344,email:'ram@gmail.com',id:'ram@123',doc_id:'04'},
    {name:'Dr.Shyam',department:'dep-2',id:2344,email:'ram@gmail.com',id:'shyam@123',doc_id:'05'},
    {name:'Dr.Hari',department:'dep-3',id:2344,email:'ram@gmail.com',id:'hari@123',doc_id:'05'},
    {name:'Dr.Geeta',department:'dep-4',id:2344,email:'ram@gmail.com',id:'geeta@123',doc_id:'07'},
    {name:'Dr.Seeta',department:'dep-5',id:2344,email:'ram@gmail.com',id:'seeta@123',doc_id:'08'},
  ];

const Doctor = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index);
  // };
  

    // const active = index === activeIndex ? 'active' : '';

    return (
      <div className="container">
      <div className="py-4">
        <h1>Info of all our doctors working in covid-19 vaccine</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Available</th>
              <th scope="col">Department</th>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">doc_id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
              <th scope="col">Available</th>
              <th scope="col">{user.department}</th>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.doc_id}</td>
                <td>
                  <div class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    Contact
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

export default Doctor;
