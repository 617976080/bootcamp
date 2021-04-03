import React from 'react';
import Essay_nav from './essay_nav';
import './css/Tab.css';
export default class Tab extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedKey: '简介'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(text: string) {
        this.setState({
            selectedKey: text
        })
    }
    render() {
        return (
            <div className='left_part'>
                <div className='left_bar'>
                    <div className='tab_container'>
                        <Essay_nav title='简介'
                        route_path='introduction'
                            object={[{
                                secondaryTitle: '动机',
                                path:'/Docs/introduction/Motivation',
                            }, {
                                secondaryTitle: '核心概念',
                                path:'/Docs/introduction/Core_concepts',
                            }, {
                                secondaryTitle: '安装Recoil',
                                path:'/Docs/introduction/Installation',
                            }, {
                                secondaryTitle: '快速入门',
                                path:'/Docs/introduction/Getting-started',
                            }]}
                            selectedKey={this.state.selectedKey}
                            handleChange={this.handleChange}
                            theme={this.props.theme}
                        />
                        <Essay_nav title='基础教程'
                        route_path='basic-tutorial'
                            object={[{
                                secondaryTitle: 'Intro',
                                path:'/basic-tutorial/Intro',
                            }, {
                                secondaryTitle: 'Atoms',
                                path:'/basic-tutorial/Atoms',  
                            }, {
                                secondaryTitle: 'Selectors',
                                path:'/basic-tutorial/Selectors', 
                            }]}
                            selectedKey={this.state.selectedKey}
                            handleChange={this.handleChange}
                            theme={this.props.theme}
                        />
                        <Essay_nav title='学习指南'
                        route_path='guide'
                            object={[{
                                secondaryTitle: 'Asynchronous-data-queries',
                                path:'/guide/Asynchronous-data-queries', 
                            }, {
                                secondaryTitle: 'Atom_effects',
                                path:'/guide/Atom_effects',
                            }, {
                                secondaryTitle: 'Testing',
                                path:'/guide//Testing',
                            }, {
                                secondaryTitle: 'Dev_tools',
                                path:'/guide/Dev_tools',
                    
                            }]}
                            selectedKey={this.state.selectedKey}
                            handleChange={this.handleChange}
                            theme={this.props.theme}
                        />
                    </div>
                </div>
            </div>
        )
    }
}