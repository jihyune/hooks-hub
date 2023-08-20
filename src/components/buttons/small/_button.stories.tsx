import tw from 'twin.macro';

import { ButtonLarge } from './button-large';
import { ButtonMedium } from './button-medium';
import { ButtonSmall } from './button-small';

const meta = {
  title: 'Components/Buttons',
};

export default meta;

export const _Buttons = () => {
  return (
    <Wrapper>
      <SmallWrapper>
        <ButtonSmall
          text="Text here"
          isLoading={false}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonSmall
          text="Text here"
          isLoading={true}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonSmall
          text="Text here"
          isLoading={false}
          disabled={true}
          onClick={() => console.log('clicked')}
        />
      </SmallWrapper>
      <MediumWrapper>
        <ButtonMedium
          text="Text here"
          isLoading={false}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonMedium
          text="Text here"
          isLoading={true}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonMedium
          text="Text here"
          isLoading={false}
          disabled={true}
          onClick={() => console.log('clicked')}
        />
      </MediumWrapper>
      <LargeWrapper>
        <ButtonLarge
          text="Text here"
          isLoading={false}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonLarge
          text="Text here"
          isLoading={true}
          disabled={false}
          onClick={() => console.log('clicked')}
        />
        <ButtonLarge
          text="Text here"
          isLoading={false}
          disabled={true}
          onClick={() => console.log('clicked')}
        />
      </LargeWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-10
`;
const SmallWrapper = tw.div`
  flex gap-5
`;
const MediumWrapper = tw.div`
  flex gap-5
`;
const LargeWrapper = tw.div`
  flex gap-5
`;
