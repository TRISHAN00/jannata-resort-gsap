import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyComponent = () => {
    return (
        <StyledComponent>
            <ul>
                <li><Link to={'/'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
