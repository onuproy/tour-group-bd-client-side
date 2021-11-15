import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Placeorder = () => {
    const {user} = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const ordernameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singledetails,setSingleDetails] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    useEffect(()=>{
        const detailsid = details.find(details => details._id === id)
        setSingleDetails(detailsid)
    },[details])
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const orderName = ordernameRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        const order ={name:name,email:email,ordername:orderName,address:address,city:city,phone:phone}
        console.log(order)

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(order)
        })
        .then( res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Inserted Successfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="order-form contact-form-area">
            <h2>My Orders</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" value={user.displayName} name="" id="" ref={nameRef} placeholder="Name" />
                <input type="email" value={user.email} name="" id="" ref={emailRef} placeholder="Email" />
                <input type="text" value={singledetails?.serviceName} name="" id="" ref={ordernameRef}/>
                <input type="text" name="" id="" ref={addressRef} placeholder="Address" />
                <input type="text" name="" id="" ref={cityRef} placeholder="City" />
                <input type="text" name="" id="" ref={phoneRef} placeholder="Phone" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Placeorder;