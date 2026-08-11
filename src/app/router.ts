import { createRoute, createRootRoute, createRouter } from '@tanstack/react-router'
import RootLayout from './layout'
import IndexPage from './page'
import UsersPage from './users/page'

const rootRoute = createRootRoute({ component: RootLayout })
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: IndexPage })
const usersRoute = createRoute({ getParentRoute: () => rootRoute, path: '/users', component: UsersPage })

const routeTree = rootRoute.addChildren([indexRoute, usersRoute])
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
