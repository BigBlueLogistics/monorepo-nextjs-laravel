import { inject, injectable } from 'tsyringe';
import type IAuthRepository from '@/core/domain/repository/authRepository';
import {
  ChangePassType,
  ResetPassLinkType,
  ResetPassType,
  SignInFormType,
  SignUpFormType,
} from '@/types/authForm';

@injectable()
class AuthUseCases {
  constructor(@inject('AuthRepositoryImpl') private authRepo: IAuthRepository) {}

  async signIn(formData: SignInFormType) {
    const res = await this.authRepo.signIn(formData);

    return res.data;
  }

  async signOut() {
    const res = await this.authRepo.signOut();

    return res.data;
  }

  async signUp(formData: SignUpFormType) {
    const res = await this.authRepo.signUp(formData);

    return res.data;
  }

  async changePass(formData: ChangePassType) {
    const res = await this.authRepo.changePass(formData);

    return res.data;
  }

  async reAuthenticate() {
    const res = await this.authRepo.reAuthenticate();

    return res.data;
  }

  async resetPass(formData: ResetPassType) {
    const res = await this.authRepo.resetPass(formData);

    return res.data;
  }

  async resetPassLink(formData: ResetPassLinkType) {
    const res = await this.authRepo.resetPassLink(formData);

    return res.data;
  }
}

export default AuthUseCases;
