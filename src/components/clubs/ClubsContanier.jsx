/** @format */

import { connect } from "react-redux";
import Clubs from "./Clubs";

const mapStateToProps = (state) => {
  return {
    clubs: state.PlayersDeducer.clubs,
    clubOrder: state.PlayersDeducer.clubOrder,
  };
};
const mapDispatchToProps = (dispach) => {
  return {
    dispach: () => {},
  };
};
const LeagueContanier = connect(mapStateToProps, mapDispatchToProps)(Clubs);
export default LeagueContanier;
