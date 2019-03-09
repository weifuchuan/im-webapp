export interface IAccount {
  id: string;
  name: string;
  avatar: string;
}

export interface IRoom {
  id: string;
  type: 'oneOnOne' | 'groupChat'; // 一对一 | 群聊
  members:string[]; 
}

export interface IMessage {
  sender: string;
  to: string;
  sendAt: number;
}
