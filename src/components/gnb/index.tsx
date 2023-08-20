import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import logo from '~/assets/images/logo.png';
import { POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { Menu } from '~/types/index';

import { Dropdown } from './dropdown/dropdown';

interface Props {
  menus: Menu[];
}

export const Gnb = ({ menus }: Props) => {
  const navigate = useNavigate();
  const { open } = usePopup(POPUP_ID.CONNECT);

  // TODO : get address by seed
  const address = 'ra2ev63Q2sKKUNZB95NgFW165QUKGiXCqr';

  // TODO : remove address
  const disconnect = () => console.log('disconnect !');

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <LogoImage src={logo} alt="logo" />
      </LogoWrapper>
      <MenuWrapper>
        {menus.map(menu => {
          return (
            <MenuButton key={menu.name} onClick={() => navigate(menu.path)}>
              {menu.name}
            </MenuButton>
          );
        })}
        <Dropdown address={address} disconnect={disconnect} connect={open} />
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  fixed top-0 left-0 w-full h-115 flex justify-between items-center z-10 px-20
`;

const LogoWrapper = tw.div`
  flex items-end gap-12 clickable
`;

const LogoImage = tw.img`
  w-210
`;

const MenuWrapper = tw.div`flex gap-20 items-center`;

const MenuButton = tw.div`font-b-28 underline text-purple1 clickable`;
