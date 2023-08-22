import { createHash } from 'crypto';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { signAndSubmit, utils } from 'xrpl-accountlib';

import { COLOR } from '~/assets/colors';
import { NET } from '~/constants';
import { useWalletStore } from '~/states/wallet-info';
import { Hook } from '~/types';

import { ButtonSmall } from '../buttons/button-small';
import { IconGood } from '../icons';

interface Props {
  data: Hook;
  connected: boolean;
}

export const List = ({ data, connected }: Props) => {
  const [liked, like] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);
  const [isLoading, setIsLoading] = useState(false);
  const [success, succeed] = useState(false);

  const { wallet } = useWalletStore();

  const applyHook = async () => {
    if (!wallet) return;
    setIsLoading(true);

    const networkInfo = await utils.txNetworkAndAccountValues(NET, wallet);
    console.log(networkInfo);

    const nameSpace = createHash('sha256')
      .update(data.title + data.id.toString(), 'utf-8')
      .digest('hex');

    const tx = {
      TransactionType: 'SetHook',
      Hooks: [
        {
          Hook: {
            CreateCode: data.file, // in prod, encoded data from BE should be here :P
            Flags: 1,
            HookApiVersion: 0,
            HookNamespace: nameSpace,
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

  const handleLike = () => {
    if (!connected) return;
    liked ? setLikes(prev => prev - 1) : setLikes(prev => prev + 1);
    like(prev => !prev);
  };

  const handleClick = async () => {
    await applyHook();
    succeed(true);
  };

  useEffect(() => {
    if (success) setIsLoading(false);
  }, [success]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{data.title}</Title>
        <InfoWrapper>
          <Info>{data.price && <Text>{data.price} XRP</Text>}</Info>
          <Info>
            <IconGood color={liked ? COLOR.PURPLE1 : COLOR.PURPLE2} onClick={handleLike} />
            <Text>{likes}</Text>
          </Info>
          {connected && (
            <ButtonWrapper>
              <ButtonSmall
                text={data.price ? 'Buy' : 'Apply'}
                onClick={handleClick}
                isLoading={isLoading}
              />
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
