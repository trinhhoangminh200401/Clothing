import{FormInputLabel,Group,Input} from './form-input.styles.jsx'
const FormInput = ({label,error,...inputProperty}) => {
    // console.log({...inputProperty})
    return (
    <Group>
      <Input {...inputProperty} />
      {label && (
        <FormInputLabel shrink={inputProperty.value.length}>
          {label}
        </FormInputLabel>
      )}
       {error && (
        <span className="error-message">{error}</span>
      )}
    </Group>
  );
};
export default FormInput
// rest params  
//  + function nhạn param là tham số 
//   param nó sẽ tách [1,2,3,4]