export const showError = (errors) => {
  let errorMessage = null;
  if (Object.keys(errors).length > 1) {
    errorMessage = "Пожалуйста заполните все поле";
  } else if (errors?.firstname) {
    errorMessage = errors?.firstname;
  } else if (errors?.lastname) {
    errorMessage = errors?.lastname;
  } else if (errors?.phoneNumber) {
    errorMessage = errors?.phoneNumber;
  } else if (errors?.email) {
    errorMessage = errors?.email;
  } else if (errors?.password) {
    errorMessage = errors?.password;
  } else if (errors?.confirmPassword) {
    errorMessage = errors?.confirmPassword;
  }
  return errorMessage;
};
