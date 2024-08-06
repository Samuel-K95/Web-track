export default interface formType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface verifyType {
  email: string;
  otp: string;
}

export interface loginType {
  email: string;
  password: string;
}
