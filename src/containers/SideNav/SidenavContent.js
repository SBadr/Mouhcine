import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const that = this;
        const pathname = `#${history.location.pathname}`;// get current path

        const subMenuLi = document.querySelectorAll('.sub-menu > li');
        for (let i = 0; i < subMenuLi.length; i++) {
            subMenuLi[i].onclick = function (event) {
                event.stopPropagation();
            }
        }

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
                event.stopPropagation();
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (error) {

        }

        return null;
    }

    render() {
        return (
            <CustomScrollbars className="scrollbar">
                <ul className="nav-menu">

                    <li className="nav-header"><IntlMessages id="sidebar.main"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.dashboard"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/reporting1">
                                    <span className="nav-text"><IntlMessages id="pages.dashboard.reporting1"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/reporting2">
                                    <span className="nav-text"><IntlMessages id="pages.dashboard.reporting2"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/reporting3">
                                    <span className="nav-text"><IntlMessages id="pages.dashboard.reporting3"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/reporting4">
                                    <span className="nav-text"><IntlMessages id="pages.dashboard.reporting4"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>

                    <li className="nav-header">
                        <IntlMessages id="sidebar.management"/>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementSuppliers"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/suppliers/listSuppliers">
                                <span className="nav-text"><IntlMessages id="pages.listSuppliers"/></span>
                            </NavLink>
                            <NavLink className="prepend-icon" to="/app/suppliers/addSupplier">
                                <span className="nav-text"><IntlMessages id="pages.addSuppliers"/></span>
                            </NavLink>
                            <NavLink className="prepend-icon" to="/app/suppliers/updateSupplier">
                                <span className="nav-text"><IntlMessages id="pages.updateSuppliers"/></span>
                            </NavLink>                            
                        </ul>

                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementCustomers"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/customers">
                                <span className="nav-text"><IntlMessages id="pages.listCustomers"/></span>
                            </NavLink>
                            <NavLink className="prepend-icon" to="/app/customers">
                                <span className="nav-text"><IntlMessages id="pages.addCustomers"/></span>
                            </NavLink>
                            <NavLink className="prepend-icon" to="/app/customers">
                                <span className="nav-text"><IntlMessages id="pages.updateCustomers"/></span>
                            </NavLink>                            
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementRemises"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/checks">
                                <span className="nav-text"><IntlMessages id="pages.listChecks"/></span>
                            </NavLink>
                            <NavLink className="prepend-icon" to="/app/checks">
                                <span className="nav-text"><IntlMessages id="pages.listRemises"/></span>
                            </NavLink>                        
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementEmis"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/sample-page">
                                <span className="nav-text"><IntlMessages id="pages.listEmis"/></span>
                            </NavLink>                     
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementOrders"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/orders">
                                <span className="nav-text"><IntlMessages id="pages.listOrders"/></span>
                            </NavLink>          
                            <NavLink className="prepend-icon" to="/app/orders">
                                <span className="nav-text"><IntlMessages id="pages.addOrders"/></span>
                            </NavLink>  
                            <NavLink className="prepend-icon" to="/app/orders">
                                <span className="nav-text"><IntlMessages id="pages.updateOrders"/></span>
                            </NavLink>                                                                     
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-truck zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.managementUsers"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <NavLink className="prepend-icon" to="/app/sample-page">
                                <span className="nav-text"><IntlMessages id="pages.listUsers"/></span>
                            </NavLink>          
                            <NavLink className="prepend-icon" to="/app/sample-page">
                                <span className="nav-text"><IntlMessages id="pages.addUsers"/></span>
                            </NavLink>  
                            <NavLink className="prepend-icon" to="/app/sample-page">
                                <span className="nav-text"><IntlMessages id="pages.updateUsers"/></span>
                            </NavLink>                                                                     
                        </ul>
                    </li>                    

                    {/*<li className="menu no-arrow">
                        <NavLink to="/app/sample-page">
                            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="pages.samplePage"/> </span>
                        </NavLink>
        </li>*/}
                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
