import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './css/navlist.css';
import Doc from './doc';
export default class Navlist extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTheme: 'Recoil',
            nav_theme: ['Recoil', 'Docs', 'Blog']
        }
    }
    render() {
        let span = this.state.nav_theme.map((element: any) =>
            <span
                onClick={() => {
                    this.setState({
                        selectedTheme: element
                    })
                }}>
                <Link to={'/' + element}
                    id={this.state.selectedTheme == element ? 'selected' : 'noneselected'}
                    className={this.props.theme == 'light' ? 'word_black navlist_ele' : 'word_white navlist_ele'}
                >{element}</Link>
            </span>);
        return (
            <Router>
                <div className='navlist'>
                    {span}
                </div>
                <Switch>
                    <Route exact path='/Recoil'>
                    </Route>
                    <Route exact path='/Docs'>
                        <Doc />
                    </Route>
                    <Route path='/Blog'>
                    </Route>
                </Switch>
            </Router>

        )
    }
}