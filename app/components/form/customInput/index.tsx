import FormFieldWrapper, { FormFieldProps } from '../formFieldWrapper';

const CustomInput: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  required,
  disabled,
}) => {
  return (
    <FormFieldWrapper id={id} label={label} required={required}>
      <input
        id={id}
        type={type}
        required={required}
        {...register(id)}
        className={`
          border
          h-[50px]
          rounded
          px-4
          text-textBody
          focus:outline-secondary
          ${errors[id] ? 'border-negativeAction' : 'border-borderColor'}
          ${disabled ? 'cursor-not-allowed' : 'cursor-auto'}
          ${disabled ? 'pointer-events-none' : 'pointer-events-all'}
        `}
      />
      {errors[id] && (
        <strong className='text-negativeAction text-[13px]'>
          {errors[id]?.message as string}
        </strong>
      )}
    </FormFieldWrapper>
  );
};

export default CustomInput;
