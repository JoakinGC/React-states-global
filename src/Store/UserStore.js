// store/userStore.js
import create from 'zustand'

const useUserStore = create((set) => ({
    users: [
        { username: "user1", password: "pass1", anotherField: "Some data" },
        { username: "user2", password: "pass2", anotherField: "Some other data" },
        { username: "user3", password: "pass3", anotherField: "Yet another data" },
    ],
    currentUser: null,
    login: (username, password) =>
        set((state) => {
            const user = state.users.find(u => u.username === username && u.password === password);
            return { currentUser: user ? { ...user } : null };
        }),
    updateUser: (username, updatedData) =>
        set((state) => {
            const users = state.users.map(user =>
                user.username === username ? { ...user, ...updatedData } : user
            );
            return { users, currentUser: users.find(u => u.username === username) };
        }),
    // En tu store de Zustand
    logout: () => set({ currentUser: null }),

}));

export default useUserStore;
