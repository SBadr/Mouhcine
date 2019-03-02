import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DatePicker } from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleRequestClose = () => {
        this.props.handleCloseModal()
    };

    createOrder = () => {
        console.log(this.props.selected)
          
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
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="prepa">Préparation</InputLabel>
                            <Select
                                inputProps={{
                                name: 'bank',
                                }}
                                value={this.state.bank}
                                onChange={this.handleInputChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                            </Select>
                        </FormControl>
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