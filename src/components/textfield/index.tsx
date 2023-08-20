import { TextareaHTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  row?: number;
}

export const TextField = ({ placeholder, row = 1, ...rest }: Props) => {
  return (
    <Wrapper>
      <TextFieldWrapper rows={row} placeholder={placeholder} {...rest}></TextFieldWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;

const TextFieldWrapper = styled.textarea(() => [
  tw`
  flex items-center bg-purple3 px-20 py-16 text-white placeholder:text-gray3
  border-none rounded-8 font-m-14 caret-white
  `,
  css`
    border: 0 none #fff;
    overflow: hidden;

    -webkit-appearance: none;
    -moz-apperarance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  `,
]);
