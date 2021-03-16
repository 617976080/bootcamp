import React from 'react';
import './essay_nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Essay_nav extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedKey: '',
            isListVisualized: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(text: string) {
        this.setState({
            selectedKey: text,

        })
    }
    render() {
        let title = this.props.title;
        let Li = this.props.secondaryTitle.map((element: string) =>
            <li onClick={() => {
                this.handleChange(element)
                this.props.handleChange(title)
            }}
                style={{ listStyle: 'none', fontSize: '18px' }}
                className='hover'>
                <Link to={'/' + element}
                    id={this.props.selectedKey == title && this.state.selectedKey == element ? 'selectedKey' : 'unselectedKey'}
                    className={this.props.theme == 'light' ? 'tab_li_light' : 'tab_li_dark'}>
                    {element}
                </Link></li>);
        const route = this.props.route.map((element: any) =>
            <Route exact path={element.path}>
            </Route>)
        return (
            <Router>
                <div className='sidebar'>
                    <div className={this.state.isListVisualized ? 'a_container showlist' : 'a_container noshowlist'}
                        onClick={() => this.setState({ isListVisualized: !this.state.isListVisualized })}>
                        <a>
                            <Link to={'/' + title}
                                id={this.props.selectedKey == title ? 'selected_a' : 'unselected_a'}
                                className={this.props.theme == 'light' ? 'tab_li_light' : 'tab_li_dark'}>{title}</Link>
                        </a>
                    </div>
                    <ul className={this.state.isListVisualized ? 'show' : 'hide'}>
                        {Li}
                    </ul>
                </div>
                <Switch>
                    {route};
                </Switch>
            </Router>


        )
    }
}