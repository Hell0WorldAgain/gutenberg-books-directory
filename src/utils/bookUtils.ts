import { Book, ViewableFormat } from '@/types/book.types';


export const getViewableLink = (book: Book): ViewableFormat | null => {
  const formats = book.formats || {};

  // Filter out .zip files
  const isNotZip = (url: string) => !url.includes('.zip');

  // Check for HTML format
  const htmlEntry = Object.entries(formats).find(
    ([mime, url]) => mime.includes('text/html') && isNotZip(url)
  );
  if (htmlEntry) {
    return { format: 'html', url: htmlEntry[1] };
  }

  // Check for PDF format
  const pdfEntry = Object.entries(formats).find(
    ([mime, url]) => mime.includes('application/pdf') && isNotZip(url)
  );
  if (pdfEntry) {
    return { format: 'pdf', url: pdfEntry[1] };
  }

  // Check for TXT format
  const txtEntry = Object.entries(formats).find(
    ([mime, url]) => mime.includes('text/plain') && isNotZip(url)
  );
  if (txtEntry) {
    return { format: 'txt', url: txtEntry[1] };
  }

  return null;
};


// Get book cover image URL

export const getBookCoverUrl = (book: Book): string | undefined => {
  const formats = book.formats || {};
  return formats['image/jpeg'] || formats['image/png'] || undefined;
};


// Format author names

export const formatAuthors = (book: Book): string => {
  if (!book.authors || book.authors.length === 0) {
    return 'Unknown Author';
  }
  return book.authors.map((author) => author.name).join(', ');
};


// Truncate text with ellipsis

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};


// Debounce function for search input

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};


// Format download count

export const formatDownloadCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};
