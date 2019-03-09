import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback
} from 'react';
import { HomeContainer } from './HomeContainer';
import BottomNav from './BottomNav';
import MessageIcon from '@material-ui/icons/Message';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExploreIcon from '@material-ui/icons/Explore';
import Drawer from './Drawer';
import { Control } from 'react-keeper';
import { packToClassComponent } from '@/common/kit/functions/packToClassComponent';

const Home: FunctionComponent = ({ children }) => {
  const [ bottomNavActionIndex, setBottomNavActionIndex ] = useState(0);

  useEffect(() => {
    if (/\/home\/.+/.test(Control.path)) {
      if (/\/home\/message/.test(Control.path)) {
        setBottomNavActionIndex(0);
      } else if (/\/home\/book/.test(Control.path)) {
        setBottomNavActionIndex(1);
      } else if (/\/home\/explore/.test(Control.path)) {
        setBottomNavActionIndex(2);
      }
    } else Control.go('/home/message');
  }, []);

  const onNavChange = useCallback(
    (i: number) => {
      setBottomNavActionIndex(i);
      if (i === 0) {
        Control.go('/home/message');
      } else if (i === 1) {
        Control.go('/home/book');
      } else if (i === 2) {
        Control.go('/home/explore');
      }
    },
    [ setBottomNavActionIndex ]
  );

  return (
    <HomeContainer>
      <div style={{ flex: 1 }}>{children}</div>
      <BottomNav
        index={bottomNavActionIndex}
        onChange={onNavChange}
        actions={[
          { label: '消息', icon: <MessageIcon /> },
          { label: '通讯录', icon: <AssignmentIndIcon /> },
          { label: '发现', icon: <ExploreIcon /> }
        ]}
      />
      <Drawer />
    </HomeContainer>
  );
};

export default packToClassComponent(Home);
