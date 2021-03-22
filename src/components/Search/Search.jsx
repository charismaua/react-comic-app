import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { lighten, darken } from "polished";

const StyledSearch = styled.div`
  width: 100%;
  background-color: #114b88;

  .search__wrapper {
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
  }

  .search__form-element {
    height: 48px;
    padding: 0 20px;
    border-style: solid;
    border-width: 1px;
    line-height: 1;
    font-weight: normal;
    outline: none;
    border-radius: 2px;
    font-size: 16px;
  }

  .search__input {
    width: 100%;
    border-color: #d9dce7;
    color: #141432;
    background-color: #fff;
    transition: box-shadow 0.25s ease-out;
    margin-right: 20px;

    &:focus {
      box-shadow: 0 0 10px #57a3ff;
    }
  }

  .search__button {
    border: 1px solid #3590cf;
    color: #fff;
    background-color: #3590cf;
    transition: background-color 0.25s ease-out;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${lighten(0.05, "#3590cf")};
    }

    &:active {
      background-color: ${darken(0.05, "#3590cf")};
    }
  }

  .search__form {
    display: flex;
    width: 100%;
  }
`;

const Search = ({ onSubmit }) => {
  return (
    <StyledSearch data-testid="Search">
      <div className="search__wrapper">
        <form className="search__form" onSubmit={onSubmit}>
          <input
            className="search__form-element search__input"
            type="number"
            placeholder="Type the comic's number here..."
          />
          <button type="submit" className="search__form-element search__button">
            Submit
          </button>
        </form>
      </div>
    </StyledSearch>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: null,
};

export default Search;
