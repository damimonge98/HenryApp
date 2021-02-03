import React from 'react';

import { TableWrapper, TableHeader, TableHead, TableBody, Row, Cell, ActionBox } from './styles';

const Table = ({ columns = [], rows, actions = [] }) => {
  return (
    <TableWrapper>

      <TableHeader>
        {
          columns.map((col) => (
            <TableHead key={col.id}>
              {col.text}
            </TableHead>
          ))
        }
      </TableHeader>

      <TableBody>
        {
          rows.map(({ _id, ...row }) => {
            console.log("ID", _id);
            const arrValues = Object.values(row);
            return (
              <Row key={_id} >
                {arrValues.map(val => (
                  <Cell>{String(val)}</Cell>
                ))}
                <Cell>
                  {
                    actions.map((a, i) => {
                      console.log("ROW", row);
                      console.log("ID", _id);
                      return (
                        <ActionBox key={i} onClick={() => a.handleClick(_id)}>
                          {a.icon}
                        </ActionBox>
                      );
                    })
                  }
                </Cell>
              </Row>
            );
          })
        }
      </TableBody>

    </TableWrapper>
  );
};

export default Table;
