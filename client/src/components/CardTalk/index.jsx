import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTalks } from '../../redux/actions/talkActions';

const CardTalk = ({ talk }) => {

  const { title, description, imagen, url } = talk;


  return (
    <Link to={url}>
      <h3>{title}</h3>
      <img src={imagen} alt={title} />
      <p>{description}</p>
    </Link>
  );
};

export default CardTalk;
