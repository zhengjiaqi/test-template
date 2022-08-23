import { Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import './index.scss'
import { commonFunction } from '../../utils'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager('./pages/*.tsx')

const routes = Object.keys(pages)?.map(path => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1] ?? ''
  return {
    name,
    path: name === 'Home' ? '/react-c' : `/react-c/${name.toLowerCase()}`,
    component: pages[path].default
  }
})

commonFunction()

const App = (): JSX.Element => (
  <>
    <nav>
      <ul>
        {routes?.map(({ name, path }) => {
          return (
            <li key={path}>
              <Link to={path}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
    <Switch>
      {routes?.map(({ path, component: RouteComp }) => {
        return (
          <Route key={path} path={path}>
            <RouteComp />
          </Route>
        )
      })}
    </Switch>
  </>
)

export default App
