export type UserProfileToken = {
    user: UserProfile;
    accessToken: string;
};

export type UserProfile = {
    uuid: string;
    email: string;
    username: string;
    role: string;
};