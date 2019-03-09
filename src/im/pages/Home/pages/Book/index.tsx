import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react-lite';
import { packToClassComponent } from '@/common/kit/functions/packToClassComponent';

const Book:FunctionComponent=observer(()=>{
  return <div>
    book
  </div>
})

export default packToClassComponent(Book)