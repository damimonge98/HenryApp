import React from 'react';
// Components
import OfferCard from '../OfferCard/index';
import Layout from '../../containers/Layout';
// Styled Components
import { CatalogueWrapper, EmpleosColumn } from './styles';


const Catalogo = ()=>{
  const [empleo, setEmpleo] = useState([{
    _id: "",
    title:"",
    description: "",
    location: "",
    remote: "",
    tipo: "",
    end: "",
    linkedIn:""
}]);
  
  return (
    <Layout>
    <CatalogueWrapper>
      <EmpleosColumn>
        <OfferCard empleo={empleo} />
      </EmpleosColumn>    
    </CatalogueWrapper>
    </Layout>
  );

};

export default Catalogo;