import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory, Link
} from "react-router-dom";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import postReducer, {fetchPostDetail, fetchPosts} from "../../api/redux/post";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import {Loading} from "../../components/Loading";

const MyComponent = () => {

    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.POSTS
        dispath(fetchPosts([api_url]))
    }, [])

    let getPost = useSelector(state => state.posts)

    return (
        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Projects</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <div className="post-wrap">
                    <h3>Projects</h3>
                    {getPost?.loading ? <Loading/> :
                        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                            {getPost?.posts?.slice(0, 10).map(data => (
                                <li key={data?.id} style={{
                                    width: '33%',
                                    border: '1px solid #DDD',
                                    padding: '10px',
                                    position: 'relative'
                                }}>
                                    <Link style={{position: 'absolute', top: '0', height: '100%', width: '100%'}}
                                          to={`/project/${data?.id}?id=${data?.id}`}/>
                                    <h4>{data?.title}</h4>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </StyledComponent>
        </HelmetProvider>

    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
