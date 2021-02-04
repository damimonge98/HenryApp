import styled from 'styled-components';

export const CatalogueWrapper = styled.div`
  display: flex;
  /* margin: 2rem 0; */
  /* margin-bottom: 113px; */
  background: #f4f5f7;
  padding: 40px 20px;
`;

export const EmpleosColumn = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

