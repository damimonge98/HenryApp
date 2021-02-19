import React from 'react';
import {
  JobCardWrapper,
  Row,
  Logo,
  EnterpriseName,
  Title,
  Button,
  Description,
  Location,
  Remote,
  Type
} from './styles';

const JobCard = ({ job }) => {
  const {
    enterprise,
    logo,
    title,
    description,
    location,
    remote,
    tipo,
    end,
    linkedIn,
  } = job;
  console.log(job);
  return (
    <JobCardWrapper>
      <Row>
        <Logo src={logo} />
        {/* <EnterpriseName>{enterprise}</EnterpriseName> */}
      </Row>
      <Type>
        {tipo}
      </Type>
      <Row>
        <Title>{title}</Title>
        {
          remote ?
            <Remote>Remote</Remote>
            : null
        }
      </Row>
      <Location>{location}</Location>
      <Description>{description}</Description>
      <Button href={linkedIn} target={"_blank"}>Linked In</Button>

      {/* <Row>
      </Row> */}

    </JobCardWrapper>
  );
};

export default JobCard;
