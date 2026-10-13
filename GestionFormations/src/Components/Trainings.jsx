import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Trainings(){
    const [trainings,setTrainings]=useState([]);

    useEffect(()=>{
        fetch('https://api.sampleapis.com/codingresources/codingResources?_limit=10')
          .then((res)=>res.json())
          .then((data)=>setTrainings(data))
          .catch((err)=>console.error("Error",err));
    },[]);

    return(
        <div>
            <h2>Liste des formations</h2>
            <ul>
                {trainings.map((training) => (
                <li key={training.id}>
                    <h3>{training.title}</h3>
                    <p>{training.description}</p>
                    <Link to={`/trainings/${training.id}`}>Détails</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Trainings;