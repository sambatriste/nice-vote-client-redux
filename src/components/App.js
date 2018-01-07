import React from 'react'

import { Provider } from 'react-redux'
import ThemeList from './ThemeList'
import Theme from './Theme'
import NewTheme from './NewTheme'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li><Link to='/themes'>投票一覧</Link></li>
            <li><Link to='/new'>新規テーマ登録</Link></li>
          </ul>
          <Route exact path='/themes' component={ThemeList}/>
          <Route path='/themes/:themeId' component={Theme} />
          <Route path='/new' component={NewTheme} />
        </div>
      </Router>
    </Provider>
  )
}

export default App