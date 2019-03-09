import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react-lite';
import { packToClassComponent } from '@/common/kit/functions/packToClassComponent';

const Explore:FunctionComponent=observer(()=>{
  return <div>
    Explore
  </div>
})

export default packToClassComponent( Explore)