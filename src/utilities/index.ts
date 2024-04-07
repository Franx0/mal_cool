export const isProd = () => {
   return process.env.NODE_ENV === "production"
};

export const formatDate = (date: string): String => {
  return new Date(date).toLocaleDateString(
    'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Europe/Madrid',
    }
  )
}
