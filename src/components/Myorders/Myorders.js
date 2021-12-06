import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Myorders = () => {
    const [orders,setOrder] = useState([]);
    const {user,logout} = useAuth();
    useEffect(()=>{
        fetch(`https://shielded-river-31281.herokuapp.com/myorders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    const order = orders.filter(order=> order.email !== user.email)
    const hangleDeleteUser = id =>{
        const proceed = window.confirm('Are You Delete it?');
        if(proceed){
            const url= `https://shielded-river-31281.herokuapp.com/orders/${id}`;
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingUser = orders.filter(order=> order._id !== id);
                    const shemol = orders.filter(order=> order.email)
                    setOrder(remainingUser,shemol);
                }
            })
        }
    }
    return (
        <div className="order-form container">
            <h2>My Orders</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Addresh</th>
                    <th scope="col">City</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    user.email ?
                    orders.map(order=>
                    <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.ordername}</td>
                    <td>{order.address}</td>
                    <td>{order.city}</td>
                    <td>{order.phone}</td>
                    <td>Update</td>
                    <td onClick={()=>hangleDeleteUser(order._id)}>X</td>
                    </tr>):
                    <td></td>
                }
                </tbody>
                </table>
        </div>
    );
};

export default Myorders;