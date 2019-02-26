import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';



class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleRequestClose = () => {
        this.props.handleCloseModal()
    };

    createOrder = () => {
        fetch('http://localhost:4000/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }).then( r => {
            this.handleRequestClose();
            this.handleUpdateData();
          })
          
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        console.log(value)
        console.log(event)
        this.setState({
          [name]: value
        });
      }

      handleDateChange = date => {
        this.setState({ issuedDate: date });
      };
    render() {
        return (
            <div>
                <Dialog open={true} onClose={this.handleRequestClose}>
                    <DialogTitle>Nouvelle remise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Veuillez saisir les détails de la remise.
                        </DialogContentText>
                        <TextField
                        name="remiseNumber"
                        label="Numero de remise"
                        type="number"
                        margin="normal"
                        fullWidth
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        />
                        <DatePicker
                        id="remiseDate"
                        label="Date de remise"
                        value={this.state.issuedDate}
                        onChange={this.handleDateChange}
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="secondary">
                            Annuler
                        </Button>
                        <Button onClick={this.createOrder} color="primary">
                            Créer
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog;