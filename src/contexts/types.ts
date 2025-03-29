export interface IAuthProvider {
    children: React.JSX.Element | React.JSX.Element[]
};

export interface IUser {
    user? : {
        id?: string;
        name?: string;
        email?: string;
        balance?: number;
        created_at?: Date;
        updated_at?: Date;
    }
}

export interface IContext extends IUser {
    signUp: (name: string, email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoadingAuth: boolean;
    signed: boolean;
    loading: boolean;
}