import React from 'react';
import Essay_nav from './essay_nav';
import './doc.css';
import Tab from './Tab';
export default class Doc extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedKey: '简介'
        }
    }
    render() {
        return (
            <div>
                 <Tab theme={this.props.theme} />
            </div>
           
        )

    }
}