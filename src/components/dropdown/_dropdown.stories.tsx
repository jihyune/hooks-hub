import tw from 'twin.macro';

import { Dropdown } from './dropdown';

const meta = {
  title: 'Components/Dropdown',
};

export default meta;

export const _Dropdown = () => {
  return (
    <Wrapper>
      <Dropdown connect={() => console.log('connect !')} />
      <Dropdown
        address="ra2ev63Q2sKKUNZB95NgFW165QUKGiXCqr"
        disconnect={() => console.log('disconnect !')}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-10
`;
