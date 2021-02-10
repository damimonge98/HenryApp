import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import routes from '../../routes';
import { quotes } from "../../data";

// Components
import Loading from '../Loading';

// Actions
import { autoLoginUser } from "../../redux/actions/authActions";

// Styles
import { AppWrapper, CenterInPage, Quote, QuoteWrapper, Author } from './styles';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(autoLoginUser());
  }, []);

  if (loading && window.location.pathname !== '/login') {
    const num = Math.round(Math.random() * (quotes.length - 1));
    return (
      <CenterInPage>
        <Loading />
        <QuoteWrapper>
          <Quote>‟{quotes[num].text}”</Quote>
          <Author>{quotes[num].author}</Author>
        </QuoteWrapper>
      </CenterInPage>
    );
  };

  return (
    <AppWrapper>
      {routes()}
    </AppWrapper>
  );
}

export default App;
