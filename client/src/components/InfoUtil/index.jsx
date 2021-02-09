import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export default function InfoUtil() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}><b>Información útil</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
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
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}