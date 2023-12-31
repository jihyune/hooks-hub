import tw from 'twin.macro';

import { Gnb } from '~/components/gnb';
import { List } from '~/components/list';
import { ConnectPopup } from '~/components/popup-connect';
import { POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useHooksStore } from '~/states/hook-info';
import { useWalletStore } from '~/states/wallet-info';

const MainPage = () => {
  const { wallet } = useWalletStore();
  const { hooks } = useHooksStore();
  const { opened } = usePopup(POPUP_ID.CONNECT);

  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        {hooks.map(val => {
          return <List key={val.id} data={val} connected={!!wallet?.address} />;
        })}
      </ContentWrapper>
      {opened && <ConnectPopup />}
    </Wrapper>
  );
};
export default MainPage;

const Wrapper = tw.div`flex flex-col relative px-30`;
const ContentWrapper = tw.div`
  flex flex-col pt-200 gap-20 pb-150
`;
