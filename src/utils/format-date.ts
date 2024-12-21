export const FormatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
    });
}