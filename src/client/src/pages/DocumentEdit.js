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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import DocumentActions from "../redux/actions/DocumentActions";
import VindicationCaseActions from "../redux/actions/VindicationCaseActions";

// END IMPORT ACTIONS

/** APIs

* actionsDocument.create
*	@description CRUD ACTION create
*
* actionsVindicationCase.findByDocument
*	@description CRUD ACTION findByDocument
*	@param Objectid key - Id della risorsa Document da cercare
*
* actionsDocument.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDocument.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class DocumentEdit extends Component {
  // Init document
  constructor(props) {
    super(props);
    this.state = {
      document: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDocument.loadDocument(this.props.match.params.id);
      this.props.actionsVindicationCase.findByDocument(this.props.match.params.id);
    }
    
  }

  // Insert props document in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      document: props.document
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.document._id) {
      this.props.actionsDocument.saveDocument(this.state.document).then(data => {
        this.props.history.push("/documents/");
      });
    } else {
      this.props.actionsDocument.createDocument(this.state.document).then(data => {
        this.props.history.push("/documents/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Document Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="AddDate"
            label="AddDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.document.AddDate
                ? new Date(this.state.document.AddDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "document", "AddDate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="AnswerDate"
            label="AnswerDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.document.AnswerDate
                ? new Date(this.state.document.AnswerDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "document", "AnswerDate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="AnswerExpireDate"
            label="AnswerExpireDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.document.AnswerExpireDate
                ? new Date(this.state.document.AnswerExpireDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "document", "AnswerExpireDate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="DocumentDate"
            label="DocumentDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.document.DocumentDate
                ? new Date(this.state.document.DocumentDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "document", "DocumentDate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="Type">
              Type
            </InputLabel>
            <Select
              value={this.state.document.Type || ""}
              onChange={Utils.handleChangeSelect.bind(this, "document")}
              inputProps={{
                id: "Type",
                name: "Type"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Pismo"}>Pismo</MenuItem>
            </Select>
          </FormControl>
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
            <Link to="/documents/">Back to list</Link>

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
    actionsDocument: bindActionCreators(DocumentActions, dispatch),
    actionsVindicationCase: bindActionCreators(VindicationCaseActions, dispatch),
  };
};

// Validate types
DocumentEdit.propTypes = { 
  actionsDocument: PropTypes.object.isRequired,
  actionsVindicationCase: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    document: state.DocumentEditReducer.document,
    listVindicationCase: state.DocumentEditReducer.listVindicationCase
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentEdit);
