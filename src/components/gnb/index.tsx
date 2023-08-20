import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import favicon from '~/assets/images/favicon.png';
import logo from '~/assets/images/logo_3.png';
import { POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useWalletStore } from '~/states/wallet-info';
import { Menu } from '~/types/index';

import { Dropdown } from './dropdown/dropdown';

export const Gnb = () => {
  const navigate = useNavigate();
  const { open, close } = usePopup(POPUP_ID.CONNECT);
  const { wallet, reset } = useWalletStore();

  const menus: Menu[] = [
    { name: 'Hooks', path: '/', isVisible: true },
    { name: 'Upload Hook', path: '/upload', isVisible: !!wallet?.classicAddress },
  ];

  const disconnect = () => {
    reset();
    close();
    navigate('/');
  };

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <LogoImage style={{ width: '80px' }} src={favicon} alt="favicon" />
        <LogoImage style={{ height: '30px' }} src={logo} alt="logo" />
      </LogoWrapper>
      <MenuWrapper>
        {menus.map(menu => {
          if (!menu.isVisible) return;
          return (
            <MenuButton key={menu.name} onClick={() => navigate(menu.path)}>
              {menu.name}
            </MenuButton>
          );
        })}
        <Dropdown address={wallet?.classicAddress} disconnect={disconnect} connect={open} />
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  fixed top-0 left-0 w-full h-115 flex justify-between items-center z-10 px-20
`;

const LogoWrapper = tw.div`
  flex items-center gap-12 clickable
`;

const LogoImage = tw.img`
  object-cover
`;

const MenuWrapper = tw.div`flex gap-20 items-center`;

const MenuButton = tw.div`font-b-28 underline text-purple1 clickable`;
