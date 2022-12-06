import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter ";
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from "./validation/email-validator-protocol";

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Email é valido (CLASS)");
  } else {
    console.log("Email é inválido (CLASS)");
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("Email é valido (FN)");
  } else {
    console.log("Email é inválido (FN)");
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), "moluco@gmail.com");
validaEmailFn(emailValidatorFnAdapter, "moluco@gmail.com");
