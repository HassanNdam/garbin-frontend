import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string | Date, format: string = 'fr') => {
  if (format === 'en') {
    return new Date(date).toISOString()
  } else {
    return new Date(date).toLocaleDateString('fr', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
}