import React from 'react';
import { IAccount, IRoom } from '@/common/models';

export interface IApi {
  getMe(): Promise<IAccount>;
  loadAccount(id: string): Promise<IAccount>;
  joinedRooms(): Promise<IRoom>;
  
}

export const ApiContext = React.createContext({} as IApi);
