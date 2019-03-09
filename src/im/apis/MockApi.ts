import { IApi } from '@/common/apis';
import { IAccount, IRoom } from '@/common/models';
import mockAvatar from './mockAvatar';
import sleep from '@/common/kit/functions/sleep';

export class MockApi implements IApi {
  async loadAccount(id: string): Promise<IAccount> {
    await sleep(500);
    return {
      id,
      name: id,
      avatar: mockAvatar
    };
  }

  async getMe(): Promise<IAccount> {
    await sleep(1000);
    return {
      id: '1000',
      name: 'test',
      avatar: mockAvatar
    };
  }
  
  joinedRooms(): Promise<IRoom> {
    throw new Error("Method not implemented.");
  }
}
