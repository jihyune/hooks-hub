import tw from 'twin.macro';

import { Hook } from '~/types';

import { List } from '.';

const meta = {
  title: 'Components/List',
};

export default meta;

export const _List = () => {
  const data: Hook = {
    title: 'Carbon',
    description:
      'the account to send a 1% carbon-offset txn each time another txn is sent from the account.',
    likes: 123,
    liked: false,
  };
  return (
    <Wrapper>
      <List data={data} connected={false} />
      <List data={data} connected={true} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-10
`;
