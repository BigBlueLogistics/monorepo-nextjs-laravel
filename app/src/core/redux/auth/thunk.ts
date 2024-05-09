import { createAsyncThunk } from '@reduxjs/toolkit';
import { container } from '@/core/dependencies';
import { SignInFormType, SignUpFormType, ResetPassLinkType, ResetPassType } from '@/types/authForm';
import AuthUseCases from '@/core/usecases/auth';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: SignInFormType) => {
    try {
      const response = await container
        .resolve<AuthUseCases>(AuthUseCases)
        .signIn({ email, password });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error.message;
      }
    }
  }
);

export const signUp = createAsyncThunk('auth/signup', async (payload: SignUpFormType) => {
  try {
    const response = await container.resolve<AuthUseCases>(AuthUseCases).signUp(payload);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error.message;
    }
  }
});

export const resetPassLink = createAsyncThunk(
  'auth/reset-pass-link',
  async (payload: ResetPassLinkType) => {
    try {
      const response = await container.resolve<AuthUseCases>(AuthUseCases).resetPassLink(payload);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error.message;
      }
    }
  }
);

export const resetPass = createAsyncThunk('auth/reset-pass', async (payload: ResetPassType) => {
  try {
    const response = await container.resolve<AuthUseCases>(AuthUseCases).resetPass(payload);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error.message;
    }
  }
});

export const signOut = createAsyncThunk('auth/logout', async () => {
  try {
    const response = await container.resolve<AuthUseCases>(AuthUseCases).signOut();
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error.message;
    }
  }
});

export const reAuthenticate = createAsyncThunk('auth/is-authenticated', async () => {
  try {
    const response = await container.resolve<AuthUseCases>(AuthUseCases).reAuthenticate();
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error.message;
    }
  }
});
