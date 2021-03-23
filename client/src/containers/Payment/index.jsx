import axios from "../../configAxios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserById } from '../../redux/actions/usersActions';
/* import Loading from '../../components/Loading'; */
import Layout from '../Layout';
import InfoUtil from '../../components/InfoUtil/index';
import Documentacion from '../../components/EnvioDeDocumentación/index';
import './estilos.css';

const Payment = () => {
  const { isAuth, user/* , loading  */ } = useSelector(state => state.auth);
  const [textArea, setTextArea] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  /*     const [adj, setAdj] = useState(null); */
  const dispatch = useDispatch();
  const history = useHistory();

  if (user.companyName) {
    history.push('/empleos');
    return null;
  }

  useEffect(() => {
    if (!isAuth) {
      history.push('/');
    };
  }, [isAuth]);

  useEffect(() => {
    dispatch(getUserById(user._id));
  }, []);
  /*     
      if (loading)
          return <Loading />; */

  const handleSubmit = ((e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/sendMail", {
      subject: `Envio de documentacion de ${user.firstName} ${user.lastName}`,
      text: textArea
    })
      .then(setSendEmail(true));
    setTextArea("");
    /*       setAdj(null) */
  });
  /* 
     
   */


  return (
    <Layout>
      <br></br>
      <div>{(user.debt == 0)
        ?
        <div>
          <h2 className="hurra">Hurra!</h2>
          <div className='infoECuenta'>
            <h3>{user.firstName}, en este momento no tenés deuda con Henry.</h3>
          </div>
          <br />
          <InfoUtil />
        </div>
        :
        <div>
          <h2 className="hurra">Estado de cuenta</h2>
          <div className='infoECuenta'>
            <h3>{user.firstName}, tu deuda con Henry es de USD {user.debt}.</h3>
          </div>
          <br />
          <div className='contenedor'>
            <InfoUtil></InfoUtil>
            <Documentacion user={user}></Documentacion>
          </div>
        </div>

      } </div>
    </Layout>
  );
};

export default Payment;
