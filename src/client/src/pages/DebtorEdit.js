/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dbafeb029bdd95510990bea
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import DebtorActions from "../redux/actions/DebtorActions";
import VindicationCaseActions from "../redux/actions/VindicationCaseActions";

// END IMPORT ACTIONS

/** APIs

* actionsDebtor.create
*	@description CRUD ACTION create
*
* actionsVindicationCase.findByDebtor
*	@description CRUD ACTION findByDebtor
*	@param Objectid key - Id della risorsa Debtor da cercare
*
* actionsDebtor.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDebtor.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class DebtorEdit extends Component {
  // Init debtor
  constructor(props) {
    super(props);
    this.state = {
      debtor: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDebtor.loadDebtor(this.props.match.params.id);
      this.props.actionsVindicationCase.findByDebtor(this.props.match.params.id);
    }
    
  }

  // Insert props debtor in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      debtor: props.debtor
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.debtor._id) {
      this.props.actionsDebtor.saveDebtor(this.state.debtor).then(data => {
        this.props.history.push("/debtors/");
      });
    } else {
      this.props.actionsDebtor.createDebtor(this.state.debtor).then(data => {
        this.props.history.push("/debtors/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Debtor Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.debtor.Name || ""}
            onChange={Utils.handleChange.bind(this, "debtor")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Pesel"
            label="Pesel"
            value={this.state.debtor.Pesel || ""}
            onChange={Utils.handleChange.bind(this, "debtor")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Surname"
            label="Surname"
            value={this.state.debtor.Surname || ""}
            onChange={Utils.handleChange.bind(this, "debtor")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with VindicationCase */}
          
          <h3>VindicationCase</h3>
          {(!this.props.listVindicationCase || this.props.listVindicationCase.length === 0) && 
            <div>No VindicationCase associated</div>
          }
          {this.props.listVindicationCase &&
            this.props.listVindicationCase.map((item, i) => {
              return (
                <Link to={"/vindicationcases/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/debtors/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDebtor: bindActionCreators(DebtorActions, dispatch),
    actionsVindicationCase: bindActionCreators(VindicationCaseActions, dispatch),
  };
};

// Validate types
DebtorEdit.propTypes = { 
  actionsDebtor: PropTypes.object.isRequired,
  actionsVindicationCase: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    debtor: state.DebtorEditReducer.debtor,
    listVindicationCase: state.DebtorEditReducer.listVindicationCase
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebtorEdit);