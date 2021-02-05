import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import OfferCard from '../OfferCard/index';
import Layout from '../../containers/Layout';

// Styled Components
import { CatalogueWrapper, EmpleosColumn } from './styles';


const Catalogo = ()=>{
  const [empleo, setEmpleo] = useState([
    // _id: "",
    // title:"",
    // description: "",
    // location: "",
    // remote: "",
    // tipo: "",
    // end: "",
    // linkedIn:""
]);

useEffect(() => {
  getAllEmpleos();
}, []);

const getAllEmpleos = () => {
  axios.get("http://localhost:5000/empleos/")
  .then((response)=>{
    setEmpleo(response.data);
  }).catch((error)=>{
    console.log(error)})

  // setEmpleo([])
  // dispatch(getEmpleos());
};

  
  return (
    <Layout>
    <CatalogueWrapper>
      <EmpleosColumn>
        {empleo.map((empleo, index) => {
                    return (
                        <div key={index}>
                        <OfferCard empleo={empleo} />
                        </div>
                    );
                })}
        
      </EmpleosColumn>    
    </CatalogueWrapper>
    </Layout>
  );

};

export default Catalogo;