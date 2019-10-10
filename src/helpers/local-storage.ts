export const getItem = async (key: string): Promise<string> => await localStorage.getItem(key);

export const setItem = async (key: string, value: any): Promise<void> => await localStorage.setItem(key, value.toString());

export const deleteItem = async (key: string): Promise<void> => await localStorage.removeItem(key);