import FormFieldWrapper, { FormFieldProps } from '../formFieldWrapper';

type CustomTextAreaProps = Omit<FormFieldProps, 'type'> & {
  cols?: number;
  rows?: number;
};

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  disabled,
  errors,
  id,
  label,
  register,
  required,
  cols,
  rows = 5,
}) => {
  return (
    <FormFieldWrapper id={id} label={label} required={required}>
      <textarea
        {...register(id)}
        className={`
          border 
          outline-secondary 
          rounded
          p-4
          text-textBody
          focus:outline-secondary
          ${errors[id] ? 'border-negativeAction' : 'border-borderColor'}
          ${disabled ? 'cursor-not-allowed' : 'cursor-auto'}
          ${disabled ? 'pointer-events-none' : 'pointer-events-all'}
        `}
        id={id}
        cols={cols}
        rows={rows}
      />
    </FormFieldWrapper>
  );
};

export default CustomTextArea;
