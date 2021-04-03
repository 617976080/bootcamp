import React from 'react';
import Essay_nav from './essay_nav';
import './css/doc.css';
import Tab from './Tab';
import Core_concepts from './introduction/core_concepts';
import Getting_start from './introduction/Getting_start';
import Installation from './introduction/Installation';
import Motiavtion from './introduction/Motiavtion';
import Atoms from './basic-tutorial/Atoms';
import Intro from './basic-tutorial/Intro';
import Selectors from './basic-tutorial/Selectors';
import Testing from './guides/Testing';
import Asynchronous_data_queries from './guides/Asynchronous_data_queries';
import Atom_effects from './guides/Atom_effects';
import Dev_tools from './guides/Dev_tools';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Doc extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            selectedKey: '简介',
            docTheme: 'core_concepts',
            highLight: '概览',
            current: ' 2'
        }
        this.handleTopData = this.handleTopData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({
            current: '1'
        })
    }
    handleTopData(currentdocTheme: string, scrollDist: number) {
        switch (currentdocTheme) {
            case 'core_concepts': {
                if (0 <= scrollDist && scrollDist <= 150) {
                    this.setState({
                        highLight: '概览'
                    })
                }
                else if (150 < scrollDist && scrollDist <= 500)
                    this.setState({
                        highLight: 'Atoms'
                    })
                else
                    this.setState({
                        highLight: 'Selectors'
                    })
            }
        }
    }
    render() {
        return (
            <Router>
                <div className='class_doc'>
                    <Tab theme={this.props.theme} />
                    <div className='essay_part' onWheel={() => console.log('sdsd')}>
                        <Switch>
                            <Route path='/Docs/introduction/Motivation' component={Motiavtion}>
                               
                            </Route>
                            <Route path='/Docs/introduction/Core_concepts' >
                               <Core_concepts highLight={this.state.highLight} handleChange={this.handleChange} /> 
                            </Route>
                            <Route path='/Docs/introduction/Installation'>
                                <Installation />
                            </Route>
                            <Route path='/Docs/introduction/Getting-started'>
                                <Getting_start />
                            </Route>
                            <Route path='/Docs/basic-tutorial/Intro'>
                                <Intro />
                            </Route>
                            <Route path='/Docs/basic-tutorial/Atoms'>
                                <Atoms />
                            </Route>
                            <Route path='/Docs/basic-tutorial/Selectors'>
                                <Selectors />
                            </Route>
                            <Route path='/Docs/guide/Asynchronous-data-queries'>
                                <Asynchronous_data_queries />
                            </Route>
                            <Route path='/Docs/guide/Atom_effects'>
                                <Atom_effects />
                            </Route>
                            <Route path='/Docs/guide//Testing'>
                                <Testing />
                            </Route>
                            <Route path='/Docs/guide/Dev_tools'>
                                <Dev_tools />
                            </Route>
                        </Switch>

                    </div>
                </div>
            </Router>


        )

    }
}