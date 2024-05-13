import {
  NextRequest,
  NextResponse,
  type NextFetchEvent,
  type NextMiddleware,
} from 'next/server'

const currentPathMiddleware: NextMiddleware = (req: NextRequest) => {
  const headers = new Headers(req.headers)
  headers.set('x-current-path', req.nextUrl.pathname)

  return NextResponse.next({ headers })
}

const withCurrentPathMiddleware = (middleware: NextMiddleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const newReq = new NextRequest(req)
    newReq.headers.set('x-current-path', req.nextUrl.pathname)

    return middleware(newReq, event)
  }
}

const redirectMiddleware: NextMiddleware = (req: NextRequest) => {
  if (req.nextUrl.pathname !== '/about') {
    const url = req.nextUrl.clone()
    url.pathname = '/about'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// works good
export default currentPathMiddleware

// not working

// export default withCurrentPathMiddleware(redirectMiddleware)
