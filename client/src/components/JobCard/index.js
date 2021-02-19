import React from 'react';
import {
  JobCardWrapper,
  Row,
  Logo,
  Title,
  Button,
  Description,
  Location,
  Remote,
  Type,
  Close
} from './styles';

const JobCard = ({ job, admin, funcion }) => {

  const {
    logo,
    title,
    description,
    location,
    remote,
    tipo,
    end,
    linkedIn,
  } = job;

  return (
    <JobCardWrapper>
      {admin ?
        <Close onClick={funcion} />
        :
        null
      }
      <Row>
        <Logo src={logo} />
        {/* <EnterpriseName>{enterprise}</EnterpriseName> */}
      </Row>
      <Type>
        {end} - {tipo}
      </Type>
      <Row>
        <Title>{title}</Title>
        {
          remote ?
            <Remote>Remoto</Remote>
            : null
        }
      </Row>
      <Location>{location}</Location>
      <Description>{description}</Description>
      <Button href={linkedIn} target={"_blank"}>LinkedIn</Button>

    </JobCardWrapper>
  );
};

export default JobCard;
