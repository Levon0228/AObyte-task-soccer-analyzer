/** @format */

import { connect } from "react-redux";
import CompareArea from "./compareArea";
import { CompareItemsCreator } from "../../redux/PlayersDeducer";

const mapStateToProps = (state) => {
  return {
    compareItems: state.PlayersDeducer.compareItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDragEnd: (result) => dispatch(CompareItemsCreator(result)),
  };
};
const LeagueContanier = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareArea);
export default LeagueContanier;
