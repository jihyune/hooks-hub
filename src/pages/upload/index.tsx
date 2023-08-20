import { ChangeEventHandler, RefObject, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { ButtonMedium } from '~/components/buttons/button-medium';
import { Gnb } from '~/components/gnb';
import { TextField } from '~/components/textfield';
import { useHooksStore } from '~/states/hook-info';
import { useWalletStore } from '~/states/wallet-info';

const UploadPage = () => {
  const { wallet } = useWalletStore();
  const { createHook } = useHooksStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, uploadFile] = useState<File>();
  const navigate = useNavigate();
  const hiddenFileInput: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (!wallet) navigate('/');
  }, [navigate, wallet]);

  const handleFile = () => {
    hiddenFileInput.current?.click();
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      uploadFile(uploadedFile);
    }
  };

  const handleShare = () => {
    createHook({ title, description, file });
    navigate('/');
  };

  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        <Title>Upload</Title>
        <TextFieldWrapper>
          <TextField onChange={e => setTitle(e.target.value)} placeholder="Title..." />
          <TextField
            onChange={e => setDescription(e.target.value)}
            placeholder="Description..."
            row={5}
          />
        </TextFieldWrapper>
        <BottomWrapper>
          <FileWrapper>
            <ButtonMedium text="Upload" onClick={handleFile} />
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: 'none' }}
              accept=".c"
            />
            {file && <Text>{file.name}</Text>}
          </FileWrapper>
          <ButtonWrapper>
            <ButtonMedium text="Share" onClick={handleShare} />
          </ButtonWrapper>
        </BottomWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
export default UploadPage;

const Wrapper = tw.div`flex flex-col relative px-30`;
const ContentWrapper = tw.div`
  flex flex-col pt-180 gap-30 px-20
`;
const Title = tw.div`font-b-28 underline text-purple1`;
const TextFieldWrapper = tw.div`
  flex flex-col gap-12
`;
const BottomWrapper = tw.div`flex justify-between`;
const FileWrapper = tw.div`flex-center gap-10`;
const ButtonWrapper = tw.div``;
const Text = tw.div`font-m-18 text-black`;
