import React from 'react';
import './css/essay_nav.css';
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
        const title = this.props.title;
        const path = this.props.route_path;
        const Li = this.props.object.map((element: any) =>
            <li onClick={() => {
                this.handleChange(element.secondaryTitle);
                this.props.handleChange(title);
            }}
                style={{ listStyle: 'none', fontSize: '18px',color:'black'}}
                className='hover'>
                <Link to={element.path}
                    id={this.props.selectedKey == title && this.state.selectedKey == element ? 'selectedKey' : 'unselectedKey'}
                    >{element.secondaryTitle}
                </Link></li>);
        return (
            <Router>
                <div className='sidebar'>
                    <div className={this.state.isListVisualized ? 'a_container showlist' : 'a_container noshowlist'}
                        onClick={() => this.setState({ isListVisualized: !this.state.isListVisualized })}>
                        <a>
                           {title}
                        </a>
                    </div>
                    <ul className={this.state.isListVisualized ? 'show' : 'hide'}>
                        {Li}
                    </ul>
                </div>
            </Router>


        )
    }
}