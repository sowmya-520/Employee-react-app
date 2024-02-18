import {createStore} from 'redux';
const DUMP_EMPLOYEES=[
    {id:"e1",name:"shvs",experience:9,date:new Date(2023,6,9)},
    {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
    {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
    {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)},
  ];

const employeeReducer=(state={items:DUMP_EMPLOYEES},action)=>
{
    const updatedEmployees=[...state.items]
    if (action.type==='ADD_EMPLOYEE')
    {
            const employeeData=
            {
                ...action.payload,
                id:Math.random().toString()
            };
           updatedEmployees.push(employeeData)
           return {items:updatedEmployees}
    }
    if(action.type==='REMOVE_EMPLOYEE')
    {
        //
    }
    return state;
}

const employeeStore=createStore(employeeReducer);
export default employeeStore;