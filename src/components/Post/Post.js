import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
	console.log(props);
	return (
		<article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
		);
}
/*withRouter is a HOC that makes the component route aware,
 adds this.props to other components with the nearest loaded route*/
export default withRouter(post);