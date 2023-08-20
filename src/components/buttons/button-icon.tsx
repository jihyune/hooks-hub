import { ButtonHTMLAttributes, ReactNode } from 'react';
import tw, { css, styled } from 'twin.macro';

import { COLOR } from '~/assets/colors';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const ButtonIcon = ({ icon, ...rest }: Props) => {
  return <Wrapper {...rest}>{icon}</Wrapper>;
};

const Wrapper = styled.button(() => [
  tw`
    w-40 h-40 flex-center clickable rounded-full bg-purple1
    hover:(bg-purple3)
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
