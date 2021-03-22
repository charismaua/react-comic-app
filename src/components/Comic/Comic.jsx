import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Wood = styled.div`
  background-color: #6f3300;
  width: 100%;
  height: 88px;
`;

const StyledComic = styled.div`
  max-width: 100%;

  .comic__link {
    background-color: #8ec1e4;
    display: inline-block;
    padding: 60px 20px 20px;
    box-shadow: 2px 2px 10px #536912;
    position: relative;
    z-index: 1;
    text-decoration: none;
    max-width: min(400px, 100%);

    &:before {
      // sticker
      content: "";
      position: absolute;
      top: -50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-left: 50px solid #f9c60c;
      border-bottom: 10px solid transparent;
      border-top: 7px solid transparent;
      width: 0;
      height: 75px;
      opacity: 0.9;
      z-index: 2;
    }

    .comic__image {
      max-width: 100%;
      height: auto;
    }

    .comic__title {
      color: #2d2d2d;
      margin: 10px 0;
    }
  }
`;

const Comic = (status) => {
  const { error, loading, successData, beforeLoad } = status;
  const { img, num, alt, title } = successData;
  const comicLink = `https://xkcd.com/${num}`;

  if (error) {
    return <p>Something went wrong. Please try again later</p>;
  } else if (beforeLoad) {
    return null;
  } else if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Wood />
      <StyledComic>
        <a
          className="comic__link"
          href={comicLink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="comic__image" src={img} alt={alt} />
          <h1 className="comic__title">{title}</h1>
        </a>
      </StyledComic>
    </>
  );
};

const mapStateToProps = (state) => ({
  successData: state.successData,
  beforeLoad: state.beforeLoad,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(Comic);
