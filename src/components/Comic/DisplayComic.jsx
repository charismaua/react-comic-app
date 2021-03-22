import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComic, comicInitState } from "../../actions/Actions";
import Comic from "./Comic";
import Search from "../Search/Search";
import PropTypes from "prop-types";

const DisplayComic = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value !== "") {
      props.dispatch(fetchComic(event.target[0].value));
    } else {
      props.dispatch(comicInitState());
    }
  };

  useEffect(() => {
    props.dispatch(comicInitState());
    // eslint-disable-next-line
  }, []);

  return (
    <section id="findComic">
      <Search onSubmit={onSubmit} />
      <Comic />
    </section>
  );
};

DisplayComic.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (dispatch) => ({ dispatch });

export default withRouter(connect(null, mapStateToProps)(DisplayComic));
