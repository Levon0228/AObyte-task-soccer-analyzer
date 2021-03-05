/** @format */

import { connect } from "react-redux";
import Leagues from "./Leagues";
import { PlayerDragEndCreator } from "../../redux/PlayersDeducer";

const mapStateToProps = (state) => {
  return {
    leagues: state.PlayersDeducer.leagues,
    clubs: state.PlayersDeducer.clubs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDragEnd: (result) => dispatch(PlayerDragEndCreator(result)),
  };
};
const LeagueContanier = connect(mapStateToProps, mapDispatchToProps)(Leagues);
export default LeagueContanier;
