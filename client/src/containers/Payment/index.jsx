import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserById } from '../../redux/actions/usersActions';
/* import Loading from '../../components/Loading'; */
import Layout from '../Layout';
import InfoUtil from '../../components/InfoUtil/index';
import Documentacion from '../../components/EnvioDeDocumentación/index'
import './estilos.css'

const Payment = () => {
    const { isAuth, user/* , loading  */ } = useSelector(state => state.auth);
    const [textArea, setTextArea] = useState("");
    const [sendEmail, setSendEmail] = useState(false);
    /*     const [adj, setAdj] = useState(null); */
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/')
        };
    }, [isAuth]);

    useEffect(() => {
        dispatch(getUserById(user._id));
    }, []);
    /*     
        if (loading)
            return <Loading />; */

    const handleSubmit = ((e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/sendMail", {
            subject: `Envio de documentacion de ${user.firstName} ${user.lastName}`,
            text: textArea
        })
            .then(setSendEmail(true))
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
                    <InfoUtil />
                </div>
                :
                <div>
                    <h2 className="hurra">Estado de cuenta</h2>
                    <div className='infoECuenta'>
                        <h3>{user.firstName}, tu deuda con Henry es de usd {user.debt}.</h3>
                    </div>
                    <br />
                    <div className='contenedor'>
                        <InfoUtil></InfoUtil>
                        {/* <div className="infoUtil">
                            <h2 className="infoTitulo">Información útil</h2><br />
                            <p>El <b>Acuerdo de Ingresos Compartidos</b> es la mejor manera de invertir en quienes tengan
                             el potencial y las ganas de cambiar su vida. Mediante este modelo, Henry se compromete
                            a invertir en ti, y tú te comprometes a pagar cuando consigas un empleo. </p><br />
                            <p>Una vez que finalizas la carrera pagarás mensualmente el <b>15% de tu ingreso bruto
                            (+ Impuestos)</b> hasta que sucedan alguna de las siguiente condiciones:</p><br />
                            <p><i class="fas fa-rocket" /> Realizas 24 pagos mensuales (no tienen que ser consecutivos)</p>
                            <p><i class="fas fa-rocket" /> La suma de tus pagos es de USD 4000 oficiales</p>
                            <p><i class="fas fa-rocket" /> Pasan 5 años sin haberse cumplido las condiciones anteriores</p><br />
                            <p>Solo pagarás los meses en los que tu ingreso bruto sea superior a <b>USD 500</b>. Si no tienes ingresos
                            o son menores a USD 500, ese mes no tienes que pagarle a Henry. Es decir, una vez graduado <b>comienzas
                            a pagar solo cuando consigas un trabajo que supere el ingreso mínimo</b>. Si has comenzado a pagar pero
                            algún mes dejas de tener dichos ingresos, se suspenden tus pagos hasta que vuelvas a tener ingresos
                            suficientes.</p>
                        </div> */}
                        <Documentacion user={user}></Documentacion>
                        {/* <div className="formulario">
                            <h2 className="infoTitulo">Enviar documentación</h2>
                            <br />
                            <p><b>Podes enviar documentacion que verifique tus ingresos.</b></p><br />
                            <form onSubmit={(e) => handleSubmit(e) , setAdj(null) }>
                                <textarea
                                    className='infoTextarea'
                                    onChange={(e) => setTextArea(e.target.value)}
                                    placeholder='...desea ingresar un comentario?'
                                    value={textArea}
                                />
                                <br /><br />
                                <div>
                                    <input className='formButton' type="file" name="adjunto" enctype="multipart/form-data"   onChange={(e) => setAdj(e.target.value)} ></input>
                                </div>
                                <br />
                                <div>
                                    <button className='formButton' type="submit"><b>Enviar</b></button>
                                </div>
                            </form>
                            <br />
                            <div>
                                {sendEmail ?
                                    <div>
                                        <h4 className="infoDocumentacion"><button className='infoDocButton' onClick={() => setSendEmail(false)}>X</button>Tu documentacion ha sido enviada con exito. </h4>
                                        <div className='infoEDocumentacion'>
                                            <p><b>Pronto recibiras en tu casilla de correo los pasos a seguir para realizar tu pago.</b></p>
                                        </div>
                                    </div>

                                    : null}
                            </div>
                        </div> */}
                    </div>
                </div>

            } </div>
        </Layout>
    );
};

export default Payment;