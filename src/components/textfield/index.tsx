import { InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  row?: number;
}

export const TextField = ({ placeholder, row = 1, ...rest }: Props) => {
  return (
    <Wrapper>
      <TextFieldWrapper height={56 * row} placeholder={placeholder} {...rest}></TextFieldWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
const TextFieldWrapper = tw.input`
  flex items-center bg-purple3 px-20 py-16 text-white placeholder:text-gray3
  border-none rounded-8 font-m-14 caret-white
`;
