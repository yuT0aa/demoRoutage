import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TrainingDetails(){
    const {id}=useParams();
    const [training,setTraining]=useState(null);

    sueEffect(()=>{
        fetch(https://api.sampleapis.com/codingresources/codingResources`)
    })
}