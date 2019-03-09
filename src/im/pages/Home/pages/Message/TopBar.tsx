import React, { useContext, useState, useCallback } from 'react';
import styled from 'styled-components';
import colors from '@/common/styles/colors';
import { Avatar, Menu, MenuItem, IconButton } from '@material-ui/core';
import { StoreContext } from '@/im/store';
import { observer } from 'mobx-react-lite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default observer(function TopBar() {
  const store = useContext(StoreContext);
  const me = store.me!;

  const [ openMenu, setOpenMenu ] = useState(false);
  const [ menuAnchorEl, setMenuAnchorEl ] = useState<any>(null);

  const onOpenMenu = useCallback(
    (e: React.MouseEvent<any, MouseEvent>) => {
      setMenuAnchorEl(e.currentTarget);
      setOpenMenu(true);
    },
    [ setMenuAnchorEl, setOpenMenu ]
  );

  const onCloseMenu = useCallback(
    () => {
      setMenuAnchorEl(null);
      setOpenMenu(false);
    },
    [ setMenuAnchorEl, setOpenMenu ]
  );

  const menuItems = [
    {
      title: '创建群聊',
      onClick: () => {
        onCloseMenu();
      }
    },
    {
      title: '加好友/群',
      onClick: () => {
        onCloseMenu();
      }
    }
  ];

  return (
    <_TopBar>
      <div>
        <Avatar
          src={me.avatar}
          style={{ height: '28px', width: '28px' }}
          onClick={() => bus.emit('home/drawer/open', true)}
        />
      </div>
      <div>
        <span>消息</span>
      </div>
      <div>
        <MoreVertIcon
          aria-label="More"
          aria-owns={openMenu ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={onOpenMenu}
        />
        <Menu
          anchorEl={menuAnchorEl}
          id="long-menu"
          open={openMenu}
          onClose={onCloseMenu}
        >
          {menuItems.map(({ title, onClick }) => (
            <MenuItem key={title} onClick={onClick} defaultChecked={false} >
              {title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </_TopBar>
  );
});

const _TopBar = styled.div`
  width: 100%;
  background-color: ${colors.DoderBlue};
  color: #fff;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > div:nth-child(1) {
  }
  > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  > div:nth-child(3) {
  }
`;
