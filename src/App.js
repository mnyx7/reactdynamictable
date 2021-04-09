import React, { Fragment } from 'react';
import './App.scss';

import Header from './components/Header';
import Table from './components/Table';

const driversData = [
  {
      "id": 1,
      "name": "Leanne ",
      "surname": "Graham",
      "dateofbirth": "15.12.1989",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 2,
      "name": "Adam ",
      "surname": "Graham",
      "dateofbirth": "4.03.1999",
      "phonenumber": "1-770-736-8031",
      "position": "Developer"
  },
  {
      "id": 3,
      "name": "Janna ",
      "surname": "Graham",
      "dateofbirth": "21.12.1987",
      "phonenumber": "1-770-736-8031",
      "position": "Product Owner"
  },
  {
      "id": 4,
      "name": "Maria ",
      "surname": "Celvin",
      "dateofbirth": "3.09.1997",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 5,
      "name": "Leanne ",
      "surname": "Graham",
      "dateofbirth": "3.09.1995",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 6,
      "name": "Sara ",
      "surname": "Graham",
      "dateofbirth": "19.03.1997",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 8,
      "name": "Jane ",
      "surname": "Graham",
      "dateofbirth": "9.11.1992",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 9,
      "name": "Laura ",
      "surname": "Graham",
      "dateofbirth": "2.02.1984",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 10,
      "name": "Leanne ",
      "surname": "Smith",
      "dateofbirth": "16.04.1992",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 11,
      "name": "Maya ",
      "surname": "Graham",
      "dateofbirth": "8.05.1976",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 12,
      "name": "Leanne ",
      "surname": "Graham",
      "dateofbirth": "12.09.1997",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  },
  {
      "id": 13,
      "name": "Leanne ",
      "surname": "Graham",
      "dateofbirth": "1.12.1989",
      "phonenumber": "1-770-736-8031",
      "position": "Head of unit"
  }
];


const App = () => {
  return (
    <Fragment>
      <Table 
        tableData={driversData}
        headingColumns={['#', 'Name', 'Surname', 'Date of Birth', 'Phone Number', 'Position']}
        title="List of employees"
      />
   
    </Fragment>
  );
}

export default App;
