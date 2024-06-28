import React from 'react'
import { useParams } from 'react-router-dom';

const SingleWorkshopPage = () => {

    const {id} = useParams();

  return (
    <div>SingleWorkshopPage {id}</div>
  )
}

export default SingleWorkshopPage;
