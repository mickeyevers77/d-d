import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
      this.handleConfirmDialog = this.handleConfirmDialog.bind(this);
    }

    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }

    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }

    handleConfirmDialog() {
        localStorage.setItem("data", "[]");
        localStorage.setItem("current", "");

        this.setState({
            openDialog: false
        });
     }

    render() {
      return (
        <div>
          <Button colored onClick={this.handleOpenDialog} raised ripple>
            Verwijder de opgeslage data.
          </Button>
          <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>Verwijder opgeslage data</DialogTitle>
            <DialogContent>
              <p>
                Bent u zeker dat u de opgeslage data wil verwijderen?
              </p>
            </DialogContent>
            <DialogActions>
              <Button type="button" class="buttonTrue" onClick={this.handleConfirmDialog}>Ja</Button>
              <Button type="button" class="buttonFalse" onClick={this.handleCloseDialog}>Nee</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

export default Settings;
