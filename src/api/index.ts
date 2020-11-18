export const serverLogin = async (email: string, password: string) => {
    return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`)
        .then(res => res.json())
        .then(data => data.success);
};
