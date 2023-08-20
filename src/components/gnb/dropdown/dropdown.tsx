import { useRef, useState } from 'react';
import tw, { css, styled } from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';
import { ButtonLarge } from '~/components/buttons/button-large';
import { IconLogout } from '~/components/icons';
import { truncateAddress } from '~/utils/string';

interface Props {
  connect?: () => void;
  disconnect?: () => void;
  address?: string;
}
export const Dropdown = ({ disconnect, address, connect }: Props) => {
  const [opened, open] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => open(false));

  return (
    <Wrapper opened={opened && !!address} ref={dropdownRef}>
      <ButtonLarge
        style={{ width: '194px', backgroundColor: address ? `${COLOR.PURPLE2}` : '' }}
        onClick={address ? () => open(prev => !prev) : () => connect?.()}
        text={address ? truncateAddress(address) : 'Connect Wallet'}
      />
      {opened && address && (
        <OpenedDropdown>
          <Disconnect>
            <IconLogout width={20} height={20} color={COLOR.GARY3} />
            <Text onClick={disconnect}>Disconnect</Text>
          </Disconnect>
        </OpenedDropdown>
      )}
    </Wrapper>
  );
};

interface WrapperProps {
  opened: boolean;
}

const Wrapper = styled.div<WrapperProps>(({ opened }) => [
  tw`flex items-center flex-col relative rounded-t-8 w-194`,
  opened && tw`bg-purple2`,
]);

const OpenedDropdown = tw.div`
  w-full absolute top-58 left-0 flex flex-col items-center rounded-b-8 z-11 bg-purple2 font-b-18
`;

const Text = tw.div`
  text-gray3 font-m-18 hover:text-white
`;

const Disconnect = styled.div(() => [
  tw`
    flex-center clickable gap-4 pt-10 pb-16
  `,
  css`
    &:hover {
      svg {
        path {
          fill: ${COLOR.WHITE};
        }
      }
    }
  `,
]);
