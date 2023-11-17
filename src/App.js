import ToDoApp from './pages/ToDoApp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import PostsPage from './pages/PostsPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App () {
   return (
      <>
         <Router>
            <Header />
            <Switch>
               <Route exact path='/'>
                  <Home />
               </Route>
               <Route path='/todoapp'>
                  <ToDoApp />
               </Route>
               <Route path='/posts'>
                  <PostsPage />
               </Route>
               <Route path='/*'>
                  <NotFound />
               </Route>
            </Switch>
         </Router>
      </>
   )
}

export default App
