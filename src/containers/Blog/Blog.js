import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        let guard = null;
        {/* Set up a conditional as a guard for auth users */}
        if(this.state.auth){
            guard = <Route path = '/new-post' component = { NewPost } />
        }
        return (
            <div className = 'Blog'>
                <header>
                    <nav>
                        <ul>
                            {/* Link allows us to create a link, similar to anchor tag
                             but react-router will create the anchor tag and prevent the
                             send request, it handles all on it self.
                                IT DOESNT RELOAD THE APP */}
                            <li><NavLink 
                                to ='/posts/' 
                                exact
                                activeStyle = {{
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to = {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header> 
                {/* Switch tells to load only one route */}
                <Switch>                    
                    {guard}
                    {/* sets the route path, exact makes the app look for the exact route and not all that fits the search
                        component renders an external component, or you can render a custom tag E.g */}
                    <Route path ='/posts' component = { Posts } />
                    {/* Use to redirect and as guard */}
                    <Redirect from = '/' to = 'posts' />
                </Switch>                
            </div>
        );
    }
}

export default Blog;