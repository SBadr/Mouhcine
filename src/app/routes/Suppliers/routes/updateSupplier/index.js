import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import ContainerHeader from 'components/ContainerHeader/index';


class Suppliers extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.updateSuppliers"/>}/>
                <div className="row animated slideInUpTiny animation-duration-3">
              
                </div>
            </div>
        );
    }
}

export default Suppliers;