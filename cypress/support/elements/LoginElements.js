class LoginElements {
  botaoLogin = () => {
    return 'a[class="login"]';
  };

  inputEmail = () => {
    return 'input[name="email"][data-validate="isEmail"]';
  };

  inputSenha = () => {
    return 'input[type="password"]';
  };

  botaoSignIn = () => {
    return 'button[type="submit"][name="SubmitLogin"]';
  };
}

export default LoginElements;
