import { createAction } from "redux-actions";
import { ILogin, IUser, IUsersStateContext } from "./context";

export enum UsersActionEnums{
    GetUserRequest = 'GET_USER',
    LoginUserRequest = 'LOGIN',
    CreateUserRequest = 'CREATE',
    CreateUserSuccess = 'CREATE_USER_SUCCESS',
    CreateUserError = 'CREATE_USER_ERROR',
    LogoutUser = 'LOGOUT_USER',
}

export const LoginUserRequestAction = createAction<IUsersStateContext, Array<ILogin>>(UsersActionEnums.LoginUserRequest, (Login) => ({Login}));
export const GetUserRequestAction = createAction<IUsersStateContext, Array<IUser>>(UsersActionEnums.GetUserRequest, (UserGotten) => ({UserGotten}));
export const CreateUserRequestAction = createAction<IUsersStateContext, IUser>(UsersActionEnums.CreateUserRequest, (UserCreated) => ({UserCreated}));
export const CreateUserSuccessAction = createAction<IUsersStateContext, IUser>(UsersActionEnums.CreateUserRequest, (UserCreated) => ({UserCreated}));
export const CreateUserErrorAction = createAction<IUsersStateContext, string>(UsersActionEnums.CreateUserError, (errorMessage) => ({errorMessage}));
export const LogoutUserAction = createAction<IUsersStateContext>(UsersActionEnums.LogoutUser);