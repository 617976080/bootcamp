import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navlist from './navlist';
import './task.css';
import './navlist.css';
import Doc from './doc';
export default class Task extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            backgroundState:'light',
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
                    className={this.state.backgroundState == 'light' ? 'word_black navlist_ele' : 'word_white navlist_ele'}
                >{element}</Link>
            </span>);
        return (
            <Router>
                <div>
                    <div className={this.state.backgroundState == 'light' ? 'top_light' : 'top_dark'}>
                        <div className='left_nav'>
                            <div className='navlist'>
                                {span}
                            </div>
                            </div>
                            <div className='right_nav'>
                                <a href='https://github.com/facebookexperimental/Recoil' className='link_github'>Github</a>
                                <a href='https://recoiljs.org/' className='link_chineseweb'>中文官网</a>
                                <button className={this.state.backgroundState == 'dark' ? 'activeButton button1' : 'unactiveButton button1'}
                                    onClick={() => this.setState({
                                        backgroundState: 'dark',
                                    })}>暗色</button>
                                <button className={this.state.backgroundState == 'light' ? 'activeButton button2' : 'unactiveButton button2'}
                                    onClick={() => this.setState({
                                        backgroundState: 'light',
                                    })}>亮色</button>
                                <input type='text' placeholder='search' className='search'></input>
                            </div>
                            </div >
                            <div className={this.state.backgroundState=='light'?' main_light main_wrapper':'main_dark main_wrapper'}>
                                <Switch>
                                    <Route exact path='/Recoil'>
                                    </Route>
                                    <Route path='/Docs'>
                                        <Doc theme={this.state.backgroundState}/>
                                    </Route>
                                    <Route path='/Blog'>
                                    </Route>
                                </Switch>
                            </div>
                    
                </div>
            </Router>
        )
    }
}