export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
};

export const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0;
};