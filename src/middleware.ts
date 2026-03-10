import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isDashboard = createRouteMatcher(['/dashboard(.*)'])
const isNoAccess = createRouteMatcher(['/dashboard/no-access'])

export default clerkMiddleware(async (auth, req) => {
  if (!isDashboard(req)) return NextResponse.next()

  const { userId, sessionClaims } = await auth()

  // No autenticado → sign-in
  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  // Ya está en no-access → dejar pasar
  if (isNoAccess(req)) return NextResponse.next()

  // Leer rol desde publicMetadata (configurado en Clerk Dashboard)
  const role = (sessionClaims?.metadata as { role?: string } | undefined)?.role

  // Recepcionista → redirigir a no-access
  if (role === 'recepcionista') {
    return NextResponse.redirect(new URL('/dashboard/no-access', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*'],
}
