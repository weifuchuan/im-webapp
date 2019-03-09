import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface Props {
  index: number;
  onChange: (index: number) => void;
  actions: { label: string; icon: string | React.ReactElement<any> }[];
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxHeight: '48px'
  }
});

function BottomNav({ index, onChange, actions }: Props) {
  const style = useStyles();

  return (
    <BottomNavigation
      classes={style}
      value={index}
      onChange={(e, i) => onChange(i)}
      showLabels
    >
      {actions.map(({ label, icon }, i) => (
        <BottomNavigationAction key={label} label={label} icon={icon} />
      ))}
    </BottomNavigation>
  );
}

export default BottomNav;
