export const isAuthenticated = state => state.auth.token;

export const getUserName = state => state.auth.user.name;

export const authSelectors = { isAuthenticated, getUserName };
