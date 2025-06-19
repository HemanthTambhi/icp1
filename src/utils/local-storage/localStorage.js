export const setItemWithExpiry = (key, value, ttlInHours = 24) => {
    const now = new Date();
    const item = {
        value,
        expiry: now.getTime() + ttlInHours * 60 * 60 * 1000, // Convert hours to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};