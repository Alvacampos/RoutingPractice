import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route, Link } from 'react-router-dom';
import './Posts.css';
class Posts extends Component {
	state = {
        posts: [],

    }

    loadData = () => {
    	axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    componentDidMount () {    	
        this.loadData();
    }    

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

	render () {
		let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
              	/* Use link to generate anchor tag for every component mapped, 
              	this allows us to pass id as a parameter */
                	<Link key={post.id} to = {`/posts/${post.id}`}>
	                		<Post 	                			                     
		                    title={post.title} 
		                    author={post.author}
		                    clicked={() => this.postSelectedHandler(post.id)} />	
                	</Link>
                ); 
            });
        }
		return (
			<div>
				<section className = 'Posts'>
					{posts}	
				</section>
				<Route path = {`${this.props.match.url}/:id`} exact component = { FullPost } />
			</div>	
		);
	}
}

export default Posts;