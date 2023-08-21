import { Hook } from '~/types';

export const data: Hook[] = [
  {
    id: 1,
    title: 'Carbon',
    description:
      'Making the account to send a 1% carbon-offset txn each time another txn is sent from the account.',
    likes: 123,
    liked: false,
  },
  {
    id: 2,
    title: 'Liteacc',
    description:
      'Making the account to become a multi-party pool account with each user acquiring a unique dest tag with which they can receive funds on the account.',
    likes: 321,
    liked: true,
  },
  {
    id: 3,
    title: 'Firewall',
    description:
      'Installing this hook causes transactions from blacklisted accounts to be rejected Installing is a two step process, first create the blacklist storage account and install the blacklist itself:',
    likes: 0,
    liked: false,
    price: 10,
  },
];
