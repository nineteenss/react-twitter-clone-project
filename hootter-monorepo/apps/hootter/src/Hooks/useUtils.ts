export const useUtils = () => {
  /** Default date formatter, short or full version */
  const formatDate = (dateString: string | undefined, full: boolean) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = String(date.getDate()).padStart(2, '0');

    switch (full) {
      case true:
        return `${day} ${month} ${year}`;
      case false:
        return `${month} ${year}`
    }
  };

  /** Locale date formatter, pass locale to change from default */
  const formatDateLocale = (dateString: string | undefined, locale?: string) => {
    if (!dateString) return '';

    /** locale example: 'en-US'  */
    return new Date(dateString).toLocaleDateString(locale || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  };

  return {
    formatDate,
    formatDateLocale,
  };
};
