import { FamilyMember } from './Components/types';
import FamilyTreeExplorer from './Components/FamilyTreeExplorer';

const familyData: FamilyMember = [
  {
    id: 1,
    name: 'John Doe',
    birthYear: 1945,
    children: [
      {
        id: 2,
        name: 'Anna Doe',
        birthYear: 1973,
        children: [
          {
            id: 5,
            name: 'Ella Doe',
            birthYear: 2000,
            children: [],
          },
          {
            id: 6,
            name: 'Lucas Doe',
            birthYear: 2003,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: 'Robert Doe',
        birthYear: 1978,
        children: [
          {
            id: 7,
            name: 'Sophie Doe',
            birthYear: 2010,
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 'Emily Doe',
        birthYear: 1985,
        children: [
          {
            id: 8,
            name: 'James Doe',
            birthYear: 2015,
            children: [
              {
                id: 9,
                name: 'Mia Doe',
                birthYear: 2030,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Jane Smith',
    birthYear: 1950,
    children: [
      {
        id: 11,
        name: 'Ethan Smith',
        birthYear: 1980,
        children: [],
      },
    ],
  },
];

function App() {
  return (
    <div>
      <h1>Family Tree Explorer</h1>
      <FamilyTreeExplorer rootMembers={familyData} />
    </div>
  );
}

export default App;
