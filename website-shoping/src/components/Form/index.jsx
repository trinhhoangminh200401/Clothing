import './form.scss'
const FormInput = ({label,...inputProperty}) => {
  return (
    <div className="group">
     <input className="form-input"
        {...inputProperty}
      />
    {label && (
      <label className={`${inputProperty.value.length ? 'shrink' :''} form-input-label`}>{label}</label>
    )}
     
    </div>
  );
};
export default FormInput