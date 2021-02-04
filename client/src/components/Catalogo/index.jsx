import React from 'react';
import {useDispatch} from 'react-redux';
// Components
import OfferCard from '../OfferCard/index';
import Layout from '../../containers/Layout';
//import {getEmpleos} from '';
// Styled Components
import { CatalogueWrapper, EmpleosColumn } from './styles';

//crear action que traiga los empleos

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
const dispatch = useDispatch();

// useEffect(() => {
//   getAllEmpleos();
// }, []);

// const getAllEmpleos = () => {
//   setEmpleo([])
//   dispatch(getEmpleos());
// };

  
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