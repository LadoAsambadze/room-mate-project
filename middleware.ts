export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/profile', '/search', '/protected/:path*'],
}
