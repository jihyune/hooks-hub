import tw from 'twin.macro';

import { Gnb } from '~/components/gnb';

const MainPage = () => {
  const menus = [
    { name: 'Hooks', path: '/' },
    { name: 'Upload Hook', path: '/upload' },
  ];

  return (
    <Wrapper>
      <Gnb menus={menus} />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

export default MainPage;
