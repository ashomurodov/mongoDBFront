// login inputs
const loginEmailInput = document.getElementById("login-email-input") as HTMLInputElement;
const loginPasswordInput = document.getElementById("login-password-input") as HTMLInputElement;
const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
const loginForm = document.getElementById("login-form") as HTMLFormElement;

// register inputs
const registerEmailInput = document.getElementById("register-email-input") as HTMLInputElement;
const registerPhoneInput = document.getElementById("register-phone-input") as HTMLInputElement;
const registerNameInput = document.getElementById("register-name-input") as HTMLInputElement;
const registerPasswordInput = document.getElementById("register-password-input") as HTMLInputElement;
const registerRepasswordInput = document.getElementById("register-repassword-input") as HTMLInputElement;
const registerForm = document.getElementById("register-form") as HTMLFormElement;

const fetchDataLogin = async () => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginEmailInput.value,
        password: loginPasswordInput.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json();
    // console.log(response.status);
    console.log(json);
    // if (response.status === 200) {
    //   window.location.href = "http://127.0.0.1:5500/public/main.html";
    // }
    // console.log(json);
  } catch (error) {
    console.log(error);
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchDataLogin();
  loginForm.reset();
});

const fetchDataRegister = async () => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: registerEmailInput.value,
        phone: registerPhoneInput.value,
        name: registerNameInput.value,
        password: registerPasswordInput.value,
        confirm_password: registerRepasswordInput.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchDataRegister();
  registerForm.reset();
});
