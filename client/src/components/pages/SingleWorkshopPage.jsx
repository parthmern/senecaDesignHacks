import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiConnector } from '../../services/apiConnector';
import { url } from '../../services/apis';

const SingleWorkshopPage = () => {

    const {id} = useParams();

    const [wp, setWp] = useState(null);

    async function getDetailsOfSingleWorkshop(){
        const res = await apiConnector("POST", url + "workshop/getDetailsOfSingleWorkshop", {id} );
        console.log(res);
        setWp(res?.data?.wpDetails[0]);
    }

    useEffect(()=>{
        getDetailsOfSingleWorkshop();
    }, []);

  return (
    <div className='text-white'>SingleWorkshopPage {id}</div>
  )
}

export default SingleWorkshopPage;
