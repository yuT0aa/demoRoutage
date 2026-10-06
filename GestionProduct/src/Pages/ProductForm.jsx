import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductForm({products,dispatch}){
    const{id}=useParams();
    const navigate=useNavigate();

    const[name,setName]=useState('');
    const[price,setPrice]=useState('');

    useEffect(()=>{
        if(isEditMode){
            const existiongProduct=products.find((p)=>p.id===parseInt(id));
            if(existingProduct){
                setName(existingProduct.name);
                setPrice(existingProduct.price);
            }
        }
    },[id,products,isEditMode]);

    const handleSubmit=(e)=>{
        e.
    }
    
}