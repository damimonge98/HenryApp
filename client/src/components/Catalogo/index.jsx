import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import OfferCard from '../OfferCard/index';
import Layout from '../../containers/Layout';

// Styled Components
import { CatalogueWrapper, EmpleosColumn } from './styles';


const Catalogo = ()=>{
  const [empleos, setEmpleo] = useState([
   { _id: "",
    title:"",
    description: "",
    location: "",
    remote: "",
    tipo: "",
    end: "",
    linkedIn:""}
]);

useEffect(() => {
  getAllEmpleos();
}, []);

const getAllEmpleos = () => {
  axios.get("http://localhost:5000/empleos/")
  .then((response)=>{
    setEmpleo(response.data);
    console.log(empleos, "sfgadg")
    console.log(response, "jhbfkjsh")
  })
  // setEmpleo([])
  // dispatch(getEmpleos());
};

  
  return (
    <Layout>
    <CatalogueWrapper>
      <EmpleosColumn>
        {empleos.map((empleo, index) => {
                    return (                      
                        
                        <OfferCard empleo={empleo} key={index}/>
                        
                    );
                })}
        
      </EmpleosColumn>
    </CatalogueWrapper>
    </Layout>
  );

};

export default Catalogo;