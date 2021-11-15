import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Addnewservices = () => {
    const servicenameRef = useRef();
    const shortdescriptionRef = useRef();
    const imageurlRef = useRef();
    const priceRef = useRef();
    const handleAddUser = e =>{
        const serviceName = servicenameRef.current.value;
        const shortdescription = shortdescriptionRef.current.value;
        const imageurl = imageurlRef.current.value;
        const price = priceRef.current.value;
        const services ={serviceName:serviceName,shortdescription:shortdescription,img:imageurl,price:price}

        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(services)
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
            <h2>Add New Service</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="" id="" ref={servicenameRef} placeholder="Service Name" />
                <input type="text" name="" id="" ref={shortdescriptionRef} placeholder="Short Descriptions" />
                <input type="text" name="" id="" ref={imageurlRef} placeholder="Image Url"/>
                <input type="text" name="" id="" ref={priceRef} placeholder="Price" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Addnewservices;