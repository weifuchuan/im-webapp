import React, {
  useEffect,
  useState,
  useContext,
  FunctionComponent
} from 'react';
import {
  SwipeableDrawer,
  Divider,
  List,
  Avatar,
  IconButton,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/im/store';
import { makeStyles, StyleRules } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles<StyleRules<{}>>({
  avatar: {
    width: '60px !important',
    height: '60px !important',
    margin: '8px 0'
  }
});

export default observer(function Drawer() {
  const store = useContext(StoreContext);
  const me = store.me;

  const [ openDrawer, setOpenDrawer ] = useState(false);

  const styles = useStyles();

  useEffect(() => {
    const f = (open: boolean) => {
      setOpenDrawer(open);
    };
    bus.addListener('home/drawer/open', f);
    return () => {
      bus.removeListener('home/drawer/open', f);
    };
  }, []);

  return (
    <SwipeableDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
    >
      <DrawerContent>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: '100%', height: '100%' }}
        >
          <Header>
            <div>
              <Avatar
                alt=""
                src={me ? me.avatar : void 0}
                className={styles.avatar}
              />
              <Info
                id={me ? me.id : ''}
                name={me ? me.name : ''}
                onClick={() => {}}
              />
            </div>
            <div />
          </Header>
          <Divider />
          <List subheader={<ListSubheader>Personal Info</ListSubheader>}>
            <ListItem button onClick={()=>{}} >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="设置" />
            </ListItem>
          </List>
        </Scrollbars>
      </DrawerContent>
    </SwipeableDrawer>
  );
});

const DrawerContent = styled.div`
  width: 260px;
  height: 100%;
  * {
    overflow: hidden !important;
  }
`;

const Header = styled.div`
  padding: 16px 16px 8px;
  display: flex;
  flex-direction: column;
`;

const _Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 8px 0; */

  > div:nth-child(1) {
    flex: 1;
    display: flex;
    flex-direction: column;

    > span:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
    }

    > span:nth-child(2) {
      font-size: 12px;
    }
  }
`;

const Info: FunctionComponent<{
  name: string;
  id: string;
  onClick: () => void;
}> = ({ id, name, onClick }) => {
  return (
    <_Info>
      <div>
        <span>{name}</span>
        <span>{id}</span>
      </div>
      <IconButton onClick={onClick}>
        <ArrowDropDownIcon />
      </IconButton>
    </_Info>
  );
};
