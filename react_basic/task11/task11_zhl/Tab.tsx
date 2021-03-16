import React from 'react';
import Essay_nav from './essay_nav';
import './Tab.css';
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
            <div className='tab_container'>
                <Essay_nav title='简介'
                    secondaryTitle={['动机', '核心概念', '安装Recoil', '快速入门']}
                    route={[
                        {
                            path: '1-1'
                        }
                        , {
                            path: '1-2'
                        }, {
                            path: '1-3'
                        },
                        {
                            path: '1-4'
                        }
                    ]}
                    selectedKey={this.state.selectedKey}
                    handleChange={this.handleChange}
                    theme={this.props.theme}                                                                                                                   
                />
                <Essay_nav title='基础教程'
                    secondaryTitle={['Intro', 'Atoms', 'Selectors']}
                    route={[
                        {
                            path: '2-1'
                        }
                        , {
                            path: '2-2'
                        }, {
                            path: '2-3'
                        }
                    ]}
                    selectedKey={this.state.selectedKey}
                    handleChange={this.handleChange}
                    theme={this.props.theme}
                />
                <Essay_nav title='学习指南'
                    secondaryTitle={['Asynchronous Data Queries', 'Atom Effects', 'Testing', 'Dev Tools']}
                    route={[
                        {
                            path: '3-1'
                        }
                        , {
                            path: '3-2'
                        }, {
                            path: '3-3'
                        }, {
                            path: '3-4'
                        }
                    ]}
                    selectedKey={this.state.selectedKey}
                    handleChange={this.handleChange}
                    theme={this.props.theme}
                />
                <Essay_nav title='API参考手册'
                    secondaryTitle={['<Recoilroot>', 'Recoil State', 'useRecoilCallback()', '工具', 'Snapshots', 'Misc']}
                    route={[
                        {
                            path: '4-1'
                        }
                        , {
                            path: '4-2'
                        }, {
                            path: '4-3'
                        }, {
                            path: '4-4'
                        }, {
                            path: '4-5'
                        }, {
                            path: '4-6'
                        }
                    ]}
                    selectedKey={this.state.selectedKey}
                    handleChange={this.handleChange}
                    theme={this.props.theme}
                />
            </div>
        )
    }
}