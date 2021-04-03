import React from 'react';
import './scss/css/general.css';
import './scss/css/footer.css';
import  theme_pic from './theme.png' 
export default class Footer extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className='footer'>
                <div className='footer_container'>
                    <div className='footer_links'>

                        <div className='column_bar'>
                            <span>学习</span>
                            <ul >
                                <li><a>快速入门</a></li>
                                <li><a>核心概念</a></li>
                            </ul>
                        </div>

                        <div className='column_bar'>
                            <span>社区</span>
                            <ul>
                                <li><a>Twitter</a></li>
                            </ul>
                        </div>

                        <div className='column_bar'>
                            <span>更多</span>
                            <ul>
                                <li><a>GitHub</a></li>
                            </ul>
                        </div>

                        <div className='column_bar'>
                            <span>Legal</span>
                            <ul>
                                <li><a>Privacy</a></li>
                                <li>Terms</li>
                            </ul>
                        </div>

                        <div className='column_bar'>
                            <span>友链</span>
                            <ul>
                                <li><a>Bootstrap中文网</a></li>
                                <li><a>React</a></li>
                                <li><a>Redux</a></li>
                                <li><a>Next.js</a></li>
                            </ul>
                        </div>
                    </div>
                    <img src={theme_pic} className='theme_pic' />
                    <div className='copyright'>
                        <span>Copyright © 2021 Facebook, Inc. Built with</span>
                        <a> Docusaurus</a>
                        <span>. </span>
                        <p>Recoil 项目及相关资源的版权归 Facebook 或项目贡献者所有</p>
                        <p style={{left:'70px'}}>Recoil 中文文档遵循 MIT 开源协议</p>
                        <a style={{left:'100px'}}>京ICP备15031610号-40</a>
                    </div>
                </div>
            </div>
        )
    }
}