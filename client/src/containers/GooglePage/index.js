import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoLoginUser } from '../../redux/actions/authActions';
import Loading from '../../components/Loading';
import { Centered } from './styles';

const GooglePage = (props) => {
  const { token } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("HJWT", token);
    dispatch(autoLoginUser());
    props.history.push("/");
  }, []);


  return (
    <Centered>
      <Loading />
    </Centered>
  );
};

export default GooglePage;
