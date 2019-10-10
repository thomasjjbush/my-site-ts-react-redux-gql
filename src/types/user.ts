export interface Company {
    name: string;
    role: string;
    logo: string;
    domain: string;
    start: string;
};
export enum Role {
    ADMIN = 'ADMIN',
    STANDARD = 'STANDARD',
};

export interface Settings {
    darkMode: boolean;
    emailNotifications: boolean;
    forgottenPassword: boolean;
    expiresIn: number;
};

export interface User {
    _id: string;
    name: string;
    gender: string;
    email: string;
    password: string | null;
    displayPicture: string;
    company: Company;
    settings: Settings;
    role: Role;
    online: boolean;
    notificationCounter: number;
    notifications: Notification[];
};