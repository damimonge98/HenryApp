import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";

const useStyles = makeStyles((theme) => ({    
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Documentacion({user}) {
    const [textArea, setTextArea] = useState("");
    const [sendEmail, setSendEmail] = useState(false);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}><b>Enviar documentación</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p><b>Podes enviar documentacion que verifique tus ingresos.</b></p><br />
                        <form onSubmit={(e) => handleSubmit(e)/* , setAdj(null) */}>
                            <textarea
                                className='infoTextarea'
                                onChange={(e) => setTextArea(e.target.value)}
                                placeholder='...desea ingresar un comentario?'
                                value={textArea}
                            />
                            <br /><br />
                            <div>
                                <input className='formButton' type="file" name="adjunto" enctype="multipart/form-data"  /* onChange={(e) => setAdj(e.target.value)} */></input>
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
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}