import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Invalid email",
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be greater than 2 ",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Can't include @ on username",
      },
    ];
  }

  if (options.password.length <= 5) {
    return [
      {
        field: "password",
        message: "length must be greater than 5 ",
      },
    ];
  }
  return null;
};
