export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/profile', '/protected/:path', '/search', '/protected/path'],
}
