import tw from 'twin.macro';

import { ButtonSmall } from '~/components/buttons/small';

const MainPage = () => {
  return (
    <Wrapper>
      <ButtonSmall text={'text here'} />
    </Wrapper>
  );
};

const Wrapper = tw.div``;
const Text = tw.div`
  font-r-14
`;

export default MainPage;
