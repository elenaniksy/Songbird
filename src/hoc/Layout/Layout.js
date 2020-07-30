import React, {Component} from "react";
import classes from './Layout.module.scss';
import Header from "../../containers/Header/Header";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header />

                <main>
                    {this.props.children}
                </main>

            </div>
        )
    }
}

export default Layout;