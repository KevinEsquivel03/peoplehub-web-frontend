// Formatea fechas a formato local
export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
};

// Verifica si un objeto está vacío
export const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0;
};