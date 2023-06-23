import { createContext } from "react";

export interface IUser{
    IDNumber: string;
    Name: string;
    LastName: string;
    Password: string;
    PhoneNumber: string;
    EmailAddress: string;
}

export interface ILogin{
    id?: string;
    username?: string;
    password?: string;
    email?:string
}

export interface IUsersStateContext{
    readonly UserGotten?:Array<IUser>;
    readonly UserCreated?: IUser;
    readonly Login?: Array<ILogin>;
    readonly errorMessage?: string;
    readonly logout?: boolean;
}

export const  INITIAL_STATE: IUsersStateContext = {
    UserGotten:[],
}
export interface IUsersActionContext{
    getUser?:() => void;
    createUser?:(payload:IUser) => void;
    login?:(payload: ILogin) => void;
    logout?: () => void;

}

const UserContext = createContext<IUsersStateContext>(INITIAL_STATE);
export const USersStateContext = createContext<IUsersStateContext>({});
export const UsersActionsContext = createContext<IUsersActionContext | undefined>(undefined);

export {UserContext};