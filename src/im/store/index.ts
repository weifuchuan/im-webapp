import React from 'react';
import { IAccount, IRoom } from '@/common/models';
import { observable, computed } from 'mobx';
import { IApi } from '@/common/apis';

export class Store {
  private readonly api: IApi;

  @observable me?: IAccount;
  @observable readonly accounts: IAccount[] = [];
  @computed
  get idToAccount(): Map<string, IAccount> {
    return this.accounts.reduce(
      (prev, curr) => prev.set(curr.id, curr),
      new Map<string, IAccount>()
    );
  }
  @observable readonly rooms:IRoom[]=[];

  constructor(api: IApi) {
    this.api = api;

    api.getMe().then((me) => {
      this.me = observable(me);
    });
  }
}

export const StoreContext = React.createContext(
  /* unuseful */ (void 0 as unknown) as Store
);
