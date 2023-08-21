import tw from 'twin.macro';
import { signAndSubmit, utils } from 'xrpl-accountlib';

import { Gnb } from '~/components/gnb';
import { List } from '~/components/list';
import { ConnectPopup } from '~/components/popup-connect';
import { NET, POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useHooksStore } from '~/states/hook-info';
import { useWalletStore } from '~/states/wallet-info';

const MainPage = () => {
  const { wallet } = useWalletStore();
  const { hooks } = useHooksStore();
  const { opened } = usePopup(POPUP_ID.CONNECT);

  const applyHook = async () => {
    if (!wallet) return;

    const networkInfo = await utils.txNetworkAndAccountValues(NET, wallet);
    console.log(networkInfo);

    const tx = {
      TransactionType: 'SetHook',
      Hooks: [
        {
          Hook: {
            CreateCode:
              '0061736D01000000011C0460057F7F7F7F7F017E60037F7F7E017E60027F7F017F60017F017E02230303656E76057472616365000003656E7606616363657074000103656E76025F670002030201030503010002062B077F0141B088040B7F004180080B7F0041A6080B7F004180080B7F0041B088040B7F0041000B7F0041010B07080104686F6F6B00030AC4800001C0800001017F230041106B220124002001200036020C41920841134180084112410010001A410022002000420010011A41012200200010021A200141106A240042000B0B2C01004180080B254163636570742E633A2043616C6C65642E00224163636570742E633A2043616C6C65642E22',
            Flags: 1,
            HookApiVersion: 0,
            HookNamespace: 'F'.repeat(64),
            HookOn: 'F'.repeat(58) + 'BFFFFE',
          },
        },
      ],

      ...networkInfo.txValues,
      Fee: '4000000',
    };

    const submitted = await signAndSubmit(tx, NET, wallet);

    console.log(submitted);
  };

  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        {hooks.map(val => {
          return <List key={val.id} data={val} connected={!!wallet?.address} onClick={applyHook} />;
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
