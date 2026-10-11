import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and merges Tailwind classes intelligently
 * @param {...any} inputs - Class names to combine
 * @returns {string} - Merged class names
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // returns 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500') // conditional classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format number with thousands separator
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll to element with offset for fixed header
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset in pixels (default: 80)
 */
export function scrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }
}
