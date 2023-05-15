'use client';

import { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

interface UploadImageProps {
  label: string;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  label,
  value,
  disabled,
  onChange,
}) => {
  const handleSubmit = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleSubmit}
      uploadPreset='nslmwncb'
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div className='flex flex-col gap-y-3' onClick={() => open?.()}>
            <span className='font-bold text-[14px]'>{label}</span>
            <div
              className={`
                border-borderColor
                rounded
                h-[30px]
                ${disabled ? 'pointer-events-none' : 'pointer-events-all'}
                ${value && 'bg-secondary'}
                ${value ? 'border-none' : 'border-[1px]'}
              `}
              placeholder='Logotipo'
            >
              <span
                className='
                  bg-neutralGray 
                  text-[14px] 
                  rounded 
                  p-2
                  mr-2
                  cursor-pointer
                '
              >
                {value ? 'Escolher outra imagem' : 'Escolher imagem'}
              </span>
              <span
                className={`
                  ${value && 'text-neutralLight'}
                  text-[15px]
                  p-2
                `}
              >
                {value ? 'Imagem carregada' : 'Nenhuma imagem'}
              </span>
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadImage;
