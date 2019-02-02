import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import DataTable from './Components/DataTable';

class Suppliers extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <div className="row animated slideInUpTiny animation-duration-3">
                    <CardBox styleName="col-12" cardStyle=" p-0" heading="List des fournisseurs"
                            headerOutside>
                        <DataTable/>
                    </CardBox>
                </div>
            </div>
        );
    }
}

export default Suppliers;