import React, { FunctionComponent, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { packToClassComponent } from '@/common/kit/functions/packToClassComponent';
import Container from './Container';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { StoreContext } from '@/im/store';
import { makeStyles, StyleRules } from '@material-ui/styles';
import TopBar from './TopBar';
import { ListView } from 'antd-mobile';

const Message: FunctionComponent = observer(() => {
  const store = useContext(StoreContext);

  const me = store.me!;
 
  return (
    <Container>
      <TopBar />
      <div style={{ flex: 1 }}>
        {/* <ListView
          dataSource={[]}
          renderRow={(
            rowData: any,
            sectionID: string | number,
            rowID: string | number,
            highlightRow?: boolean
          ) => {
            return <div />;
          }}
        /> */}
      </div>
    </Container>
  );
});

export default packToClassComponent(Message);
