import React, { useEffect } from "react";
import { fetchComic } from "../../actions/Actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comic from "./Comic";
import PropTypes from "prop-types";

const TheLatestComic = (props) => {
  useEffect(() => {
    props.dispatch(fetchComic());
    // eslint-disable-next-line
  }, []);

  return <Comic />;
};

const mapStateToProps = (dispatch) => ({ dispatch });

TheLatestComic.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapStateToProps)(TheLatestComic));
