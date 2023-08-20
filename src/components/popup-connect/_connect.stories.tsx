import tw from 'twin.macro';

import { ConnectPopup } from '.';

const meta = {
  title: 'Components/ConnectPopup',
};

export default meta;

export const _ConnectPopup = () => {
  return (
    <Wrapper>
      <ConnectPopup />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-10
`;
