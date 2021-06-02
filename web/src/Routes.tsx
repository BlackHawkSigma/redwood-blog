// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
      </Set>

      <Set wrap={BlogLayout}>
        <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
        <Route path="/about" page={AboutPage} name="about" prerender />
        <Route path="/" page={HomePage} name="home" prerender />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
