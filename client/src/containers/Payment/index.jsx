import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserById } from '../../redux/actions/usersActions';
import Layout from '../Layout';
import './estilos.css'

const Payment = () => {
    const { isAuth, user } = useSelector(state => state.auth);
    const [textArea, setTextArea] = useState("");
    const [adjunto, setAdjunto] = useState("");
    const [sendEmail, setSendEmail] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) history.push('/');
    }, [isAuth]);

    useEffect(() => {
        dispatch(getUserById(user._id));
    }, []);

    console.log(typeof attachments, "aa")

    const handleSubmit = (() => {
        axios.post("http://localhost:5000/sendMail", {
            subject: `Envio de documentacion de ${user.firstName} ${user.lastName}`,
            text: textArea
        })
            .then(setSendEmail(true));
    });


    return (
        <Layout>
            <div>{(user.debt == 0)
                ?
                <div>
                    <h2 className="hurra">Hurra!</h2>
                    <div className='infoECuenta'>
                        <h3>{user.firstName}, en este momento no tenés deuda con Henry.</h3>
                    </div>
                </div>
                :
                <div>
                    <h2 className="hurra">Estado de cuenta</h2>
                    <div className='infoECuenta'>
                        <h3>{user.firstName}, tu deuda con Henry es de usd {user.debt}.</h3>
                    </div>
                    <div className='contenedor'>
                        <div className="infoUtil">
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
                        </div>
                        <div className="formulario">
                            <h2>Enviar documentación</h2>
                            <form onSubmit={handleSubmit}>
                                <textarea onChange={(e) => setTextArea(e.target.value)}
                                    placeholder='...desea ingresar un comentario?'
                                />
                                <div>
                                    <input type="file" on={(e) => setAdjunto(e.target.value)} name="adjunto" enctype="multipart/form-data"></input>
                                </div>
                                <div>
                                    <button type="submit"> Enviar</button>
                                </div>
                            </form>
                            <br />
                            <br />
                            <br />
                            <div>
                                {sendEmail ?
                                    <div>
                                        <h2 className="hurra">Tu documentacion ha sido enviada con exito. <button onClick={() => setSendEmail(false), setAdjunto("")}>X</button></h2>
                                        <div className='infoECuenta'>
                                            <h3>Pronto recibiras en tu casilla de correo los pasos a seguir para realizar tu pago.</h3>
                                        </div>
                                    </div>

                                    : null}
                            </div>
                        </div>
                    </div>
                </div>

            } </div>
        </Layout>
    );
};

export default Payment;