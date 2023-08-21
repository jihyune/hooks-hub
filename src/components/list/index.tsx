import { useState } from 'react';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';
import { Hook } from '~/types';

import { ButtonSmall } from '../buttons/button-small';
import { IconGood } from '../icons';

interface Props {
  data: Hook;
  connected: boolean;
  onClick: () => void;
}

export const List = ({ data, connected, onClick }: Props) => {
  const [liked, like] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);

  const handleLike = () => {
    if (!connected) return;
    liked ? setLikes(prev => prev - 1) : setLikes(prev => prev + 1);
    like(prev => !prev);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{data.title}</Title>
        <InfoWrapper>
          <Info>
            <IconGood color={liked ? COLOR.PURPLE1 : COLOR.PURPLE2} onClick={handleLike} />
            <Text>{likes}</Text>
          </Info>
          {connected && (
            <ButtonWrapper>
              <ButtonSmall text="Apply" onClick={onClick} />
            </ButtonWrapper>
          )}
        </InfoWrapper>
      </TitleWrapper>
      Description
      <Description>{data.description}</Description>
    </Wrapper>
  );
};
const Wrapper = tw.div`
  flex flex-col gap-5 font-m-18 text-gray1 bg-purple3 rounded-20 p-20
`;

const TitleWrapper = tw.div`flex justify-between`;
const Title = tw.div`text-white font-b-24`;
const InfoWrapper = tw.div`flex-center gap-12`;
const Info = tw.div`flex gap-4 clickable`;
const Text = tw.div`text-gray3 font-m-14`;

const ButtonWrapper = tw.div``;
const Description = tw.div`text-white`;
