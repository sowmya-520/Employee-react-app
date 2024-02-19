import EmployeeDate from './EmployeeDate';
import './EmployeeItem.css';
import Card from '../UI/Card';
import React, {useState} from 'react';
import { EmployeeContext } from './employee-context';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../Store';

const EmployeeItem=(props) => {
    const dispatch = useDispatch();

    const deleteHandler = (param) => 
    {
        console.log(param);
        dispatch(employeeActions.removeEmployee(param));
    };
    return(
        <li>
            <Card className="employee-item">
                <div><EmployeeDate date={props.date}/></div>

                <div className="employee-item_description">
                    <h2>{props.name}</h2>
                    <div className="employee-experience">Experience: {props.experience}</div>   
                </div>

                <button onClick={()=>deleteHandler(props.empid)} >--</button>

            </Card>
        </li>
    );
}
export default EmployeeItem;


