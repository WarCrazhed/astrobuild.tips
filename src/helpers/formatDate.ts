export const formatDate = (time: string) => {
    const parsedDate = new Date(time);
    const formattedDate = parsedDate.toLocaleDateString('es-ES', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return formattedDate;
}