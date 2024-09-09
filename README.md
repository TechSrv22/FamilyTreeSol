**Question**

You are tasked with building a small family tree explorer application using React and TypeScript. Given a nested data structure representing family members and their relationships, you must provide an interface that allows users to view the tree and search for members. 
Data Structure:
Every family member is represented as:
type FamilyMember = { 
   id: number; 
   name: string; 
   birthYear: number; 
   children: FamilyMember[]; 
}; 

Tasks: 
Family TreeDesign and 	implement a component that recursively renders the family tree. Each 	member should display their name, and children should be visually 	nested or indented underneath their parent. 
Count of Descendants: Create a function 	that, given a family member, calculates the total number of 	descendants that member has, which includes all children, 	grandchildren, and so on. To ensure efficient computation, use 	dynamic programming techniques to avoid redundant calculations, 	specifically memoization. 
React Skills: Implement a search input at 	the top of the application. As a user types a family member’s 	name, dynamically highlight matching names in the tree without 	re-rendering the entire tree. 
Performance: As you build, consider the 	application’s performance, especially as the tree’s size grows. 
 
Sample Data: 
const familyData = [ { id: 1, name: “John Doe”, birthYear: 1945, children: [ { id: 2, name: “Anna Doe”, birthYear: 1973, children: [ { id: 5, name: “Ella Doe”, birthYear: 2000, children: [] }, { id: 6, name: “Lucas Doe”, birthYear: 2003, children: [] } ] }, { id: 3, name: “Robert Doe”, birthYear: 1978, children: [ { id: 7, name: “Sophie Doe”, birthYear: 2010, children: [] } ] }, { id: 4, name: “Emily Doe”, birthYear: 1985, children: [ { id: 8, name: “James Doe”, birthYear: 2015, children: [ { id: 9, name: “Mia Doe”, birthYear: 2030, children: [] } ] } ] } ] }, { id: 10, name: “Jane Smith”, birthYear: 1950, children: [ { id: 11, name: “Ethan Smith”, birthYear: 1980, children: [] } ] } ]; 
