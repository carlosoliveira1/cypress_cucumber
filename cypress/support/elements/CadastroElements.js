class CadastroElements {
  cadBotaoLogin = () => {
    return 'a[class="login"]';
  };

  emailCad = () => {
    return 'input[name="email_create"]';
  };

  botaoCreateAcount = () => {
    'button[name="SubmitCreate"]';
  };

  radioGender = () => {
    return 'input[id="id_gender1"]';
  };

  fieldName = () => {
    return "input[id=customer_firstname]";
  };

  fieldLastName = () => {
    return 'input[name="customer_lastname"]';
  };

  fieldPassw = () => {
    return 'input[type="password"]';
  };

  selectDays = () => {
    return 'select[name="days"]';
  };

  selectMonths = () => {
    return 'select[name="months"]';
  };

  years = () => {
    return 'select[name="years"]';
  };
  newsletter = () => {
    return 'input[type="checkbox"][name="newsletter"]';
  };

  optin = () => {
    return 'input[type="checkbox"][name="optin"]';
  };

  companyName = () => {
    return 'input[name="company"]';
  };

  adress1 = () => {
    return 'input[name="address1"]';
  };

  adress2 = () => {
    return 'input[name="address2"]';
  };

  cityName = () => {
    return 'input[name="city"]';
  };

  idState = () => {
    'select[name="id_state"]';
  };

  postcode = () => {
    return 'input[name="postcode"]';
  };

  other = () => {
    return 'textarea[name="other"]';
  };

  phone = () => {
    return 'input[name="phone"]';
  };

  phone_mobile = () => {
    return 'input[name="phone_mobile"]';
  };

  alias = () => {
    return 'input[name="alias"]';
  };
}

export default CadastroElements;
