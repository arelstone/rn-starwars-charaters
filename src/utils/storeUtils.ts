export const getNumber = (string: string) => Number(string.replace(/\D/g, ''));

export const nextPage = (response: any): number => {
    return response.next && getNumber(response.next);
};
