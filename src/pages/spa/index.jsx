import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchPostDetail } from "../../api/redux/post";
import { apiEndPoints } from "../../api/network/apiEndPoints";
import styled from "styled-components";

const Spa = () => {
  const dispath = useDispatch();

  // api call
  useEffect(() => {
    let api_url = apiEndPoints.POSTS;
    dispath(fetchPosts([api_url]));
  }, []);

  let getPost = useSelector((state) => state.posts);

  return (
    <StyledSection>
      <h2>Spa Section</h2>
    </StyledSection>
  );
};

const StyledSection = styled.section``;

export default Spa;
