import tw from 'twin.macro';

import { ButtonSmall } from '~/components/buttons/small/button-small';

const MainPage = () => {
  return (
    <Wrapper>
      <ButtonSmall text={'text here'} />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

export default MainPage;
