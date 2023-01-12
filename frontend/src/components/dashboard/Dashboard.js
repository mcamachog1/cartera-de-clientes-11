// frontend/src/componenets/dashboard/Dashboard.js

// import React from 'react'
// import { Container } from 'react-bootstrap'

// function Dashboard () {
//         return (
//             <Container>
//                 <h1>Dashboard</h1>
//             </Container>
//         )
// }

// export default Dashboard;

function dedupe(list) {
  
	// Container for the objects id´s
	let object_ids = []

	for (let i = 0; i < list.length; i++) {
		for (const property in list[i]) {
			// Save each id
			if (property === 'id') {
				object_ids.push(list[i][property])
			}
		}
	}

	// Create a new id´s container just with duplicates ids 
	let new_container = []
	// And another container to save duplicates id
	let dup_container = []
	// And another container to save object index
	let obj_index = []
	for (let i = 0; i < object_ids.length; i++) {
		// if id is not on the new container, add it
		if (!new_container.includes(object_ids[i])) {
			new_container.push(object_ids[i])
		}
		else {
			dup_container.push(object_ids[i])
			obj_index.push(i)
		}
	}	

	console.log(obj_index)
	let obj1 = list[obj_index[0]]
	let obj2 = list[obj_index[1]]
	// // Loop throught the dup index container in order to merge or delete
	// for (let i = 0; i < obj_index.length; i++) {
	// 	// Select objects in list where id is duplicated
	// 	let obj1 = list[]
	// }	
	//console.log(object_ids)
	console.log(obj1)
	console.log(obj2)
	// console.log(`${property}: ${list[i][property]}`);
  
  
  return list;
}

const list = [
	{
		id: 2,
		name: 'John Doe'
	},
	{
		id: 1,
		name: 'Jane Doe'
	},
	{
		id: 3,
		name: 'Samuel Soe',
		phone: '+12223334444'
	},
	{
		id: 2,
		name: 'John Doe'
	},
	{
		id: 4,
		name: 'John Doe'
	},
]

console.log(dedupe(list))