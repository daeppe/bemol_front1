import { Container, InputContainer } from "./styles";

function Input({ error = "", label, icon: Icon, register, name, ...rest }) {
  return (
    <Container>
      <div>
        {label}
        {error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={error}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
export default Input;