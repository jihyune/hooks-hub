import tw from 'twin.macro';

import { data } from '~/data';

import { List } from '.';

const meta = {
  title: 'Components/List',
};

export default meta;

export const _List = () => {
  return (
    <Wrapper>
      {data.map(val => {
        return <List key={val.id} data={val} connected={false} />;
      })}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-10
`;
