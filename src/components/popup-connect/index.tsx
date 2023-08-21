import { useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';
import { derive } from 'xrpl-accountlib';

import { COLOR } from '~/assets/colors';
import { POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useWalletStore } from '~/states/wallet-info';

import { ButtonIcon } from '../buttons/button-icon';
import { ButtonMedium } from '../buttons/button-medium';
import { IconCancle } from '../icons';
import { TextField } from '../textfield';

export const ConnectPopup = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { close } = usePopup(POPUP_ID.CONNECT);
  const { setWallet } = useWalletStore();
  useOnClickOutside(popupRef, close);

  const [connectingLoading, setConnectingLoading] = useState<boolean>();
  const [seed, setSeed] = useState<string>();

  const connectWallet = async () => {
    if (!seed) return;
    setConnectingLoading(true);
    const wallet = derive.familySeed(seed);
    setWallet(wallet);
    console.log(wallet);
    close();
  };

  return (
    <Wrapper>
      <PopupWrapper ref={popupRef}>
        <ConnectWrapper>
          <ConnectTitleWrapper>
            <Title>Connect XRP wallet</Title>
            <IconWrapper onClick={close}>
              <ButtonIcon icon={<IconCancle color={COLOR.GARY3} />} />
            </IconWrapper>
          </ConnectTitleWrapper>
          <TextField placeholder="Enter your seed..." onChange={e => setSeed(e.target.value)} />
        </ConnectWrapper>

        <ButtonWrapper>
          <ButtonMedium
            text="Connect"
            onClick={connectWallet}
            isLoading={connectingLoading}
            disabled={!seed}
          />
        </ButtonWrapper>
      </PopupWrapper>
      <Dim />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

const PopupWrapper = tw.div`
  w-480 fixed flex flex-col bg-white z-11 absolute-center rounded-20 p-20 gap-32
`;

const ConnectWrapper = tw.div`
  flex flex-col gap-20
`;

const ConnectTitleWrapper = tw.div`
  flex w-full h-40 items-center justify-between
`;

const Title = tw.div`
  font-b-18 text-purple1
`;

const IconWrapper = tw.div`
  flex flex-center clickable
`;

const Dim = tw.div`
  fixed w-screen h-screen bg-[#000000]/60 z-10 top-0 left-0
`;

const ButtonWrapper = tw.div`
  flex flex-col w-full flex-center gap-16
`;
