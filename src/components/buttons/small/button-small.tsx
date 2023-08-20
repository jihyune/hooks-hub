import lottie from 'lottie-web/build/player/lottie_light';
import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';

import loading from '~/assets/lottie/loading-dot.json';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
}
export const ButtonSmall = ({ text, isLoading, disabled, ...rest }: Props) => {
  const warpperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!warpperRef.current || !isLoading) return;
    lottie.loadAnimation({
      container: warpperRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loading,
    });

    return () => {
      lottie.destroy();
    };
  }, [warpperRef, isLoading]);

  return (
    <Wrapper isLoading={isLoading} disabled={isLoading || disabled} {...rest}>
      <TextWrapper isLoading={isLoading}>{text}</TextWrapper>
      <LottieWrapper ref={warpperRef} />
    </Wrapper>
  );
};

interface LoadingProps {
  isLoading?: boolean;
}
const Wrapper = styled.button<LoadingProps>(({ isLoading }) => [
  tw`
    h-34 px-12 py-6 flex-center relative text-white font-m-14
    rounded-8 bg-purple1 clickable
    hover:(bg-purple2)
    disabled:(bg-gray3 non-clickable hover:(bg-gray3) text-gray2)
  `,
  isLoading &&
    tw`text-transparent non-clickable bg-purple2 disabled:(bg-purple2 hover:(bg-purple2))`,
]);

const TextWrapper = styled.div<LoadingProps>(({ isLoading }) => [isLoading && tw`opacity-0`]);
const LottieWrapper = tw.div`
  w-full h-full flex-center absolute absolute-center
`;
