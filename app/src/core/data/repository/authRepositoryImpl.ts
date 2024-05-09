import { AxiosResponse } from 'axios';
import IAuthRepository from '@/core/domain/repository/authRepository';
import HttpAdapter from '../adapter/httpAdapter';
import {
  SignInFormType,
  SignUpFormType,
  ResetPassLinkType,
  ResetPassType,
  ChangePassType,
} from '@/types/authForm';

class AuthRepositoryImpl extends HttpAdapter implements IAuthRepository {
  signIn(formData: SignInFormType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  signUp(formData: SignUpFormType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  resetPassLink(formData: ResetPassLinkType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  resetPass(formData: ResetPassType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  signOut(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  reAuthenticate(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  changePass(formData: ChangePassType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }
  getStatus(type: 'yard' | 'docks'): Promise<AxiosResponse> {
    return this.get(`/yard/status`, { params: { type } });
  }
}

export default AuthRepositoryImpl;
