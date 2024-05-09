import { AxiosResponse } from 'axios';
import {
  SignInFormType,
  SignUpFormType,
  ResetPassLinkType,
  ResetPassType,
  ChangePassType,
} from '@/types/authForm';

interface IAuthRepository {
  signIn(formData: SignInFormType): Promise<AxiosResponse>;

  signUp(formData: SignUpFormType): Promise<AxiosResponse>;

  resetPassLink(formData: ResetPassLinkType): Promise<AxiosResponse>;

  resetPass(formData: ResetPassType): Promise<AxiosResponse>;

  signOut(): Promise<AxiosResponse>;

  reAuthenticate(): Promise<AxiosResponse>;

  changePass(formData: ChangePassType): Promise<AxiosResponse>;
}

export default IAuthRepository;
