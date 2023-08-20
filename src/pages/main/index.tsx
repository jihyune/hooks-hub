import tw from 'twin.macro';

import { Gnb } from '~/components/gnb';
import { List } from '~/components/list';
import { ConnectPopup } from '~/components/popup-connect';
import { POPUP_ID } from '~/constants';
import { data } from '~/data';
import { usePopup } from '~/hooks/pages/use-popup';
import { useWalletStore } from '~/states/wallet-info';

const MainPage = () => {
  const menus = [
    { name: 'Hooks', path: '/' },
    { name: 'Upload Hook', path: '/upload' },
  ];

  const { wallet } = useWalletStore();
  const { opened } = usePopup(POPUP_ID.CONNECT);

  return (
    <Wrapper>
      <Gnb menus={menus} />
      <ContentWrapper>
        {data.map(val => {
          return <List key={val.id} data={val} connected={!!wallet?.classicAddress} />;
        })}
      </ContentWrapper>
      {opened && <ConnectPopup />}
    </Wrapper>
  );
};
export default MainPage;

const Wrapper = tw.div`flex flex-col relative px-30`;
const ContentWrapper = tw.div`
  flex flex-col pt-200 gap-20
`;
