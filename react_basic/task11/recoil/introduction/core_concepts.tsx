import React from 'react';
import '../scss/css/general.css';
import '../scss/css/location_nav.css';
import classnames from 'classnames';
const code1: string = 'const fontSizeState = atom' + '({' + '\n' + 'key: ' + 'fontSizeState,' + '\n' + 'default: 14,' + '\n' + '});';
const code2: string = 'function FontButton() {' + '\n' + 'const [fontSize, setFontSize] = useRecoilState(fontSizeState);' + '\n' + 'return (' + '\n' + '<button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>' + '\n' + '  Click to Enlarge' + '\n' + ' </button>' + '\n' + ' );' + '\n' + '}'
const code3: string = 'function Text() {' + '\n' + ' const [fontSize, setFontSize] = useRecoilState(fontSizeState);' + '\n' + ' return <p style={{fontSize}}>This text will increase in size too.</p>;' + '\n' + '}';
const code4: string = 'const fontSizeLabelState = selector({' + '\n' + 'key: ' + 'fontSizeLabelState' + ',' + '\n' + 'get: ({get}) => {' + '\n' + 'const fontSize = get(fontSizeState);' + '\n' + 'const unit = ' + 'px' + ';' + '\n' + 'return `${fontSize}${unit}`;' + '\n' + '},' + '\n' + '});';
const code5: string = 'function FontButton() {' + '\n' + 'const [fontSize, setFontSize] = useRecoilState(fontSizeState);' + '\n' + 'const fontSizeLabel = useRecoilValue(fontSizeLabelState);' + '\n' + 'return (' + '\n' + '<>' + '\n' + '<div>Current font size: {fontSizeLabel}</div>' + '\n' + '<button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>' + '\n' + ' Click to Enlarge' + '\n' + ' </button>' + '\n' + ' </>' + '\n' + ');' + '\n' + ' }'
export default class Core_concepts extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            paragraph: ['概览', 'Atoms', 'selectors'],
            code: [code1, code2, code3, code4, code5],
            selectedPara: this.props.highLight,
            scrollHeight: [100, 266, 1123],
            scrollTop: 0
        }
        this.codeToClipboard = this.codeToClipboard.bind(this);
    }
    codeToClipboard(index: number) {
        navigator.clipboard.writeText(this.state.code[index]).then(function () {
            alert('copy success');
        }, function () {
            alert('copy failed');
        });
    }
    render() {
        
        const Li = this.state.paragraph.map((element: any, index: number) =>
            <li className={classnames({
                right_nav: true,
                isSelected: this.state.selectedPara === element
            })}
                onClick={() => {
                    this.setState({
                        selectedPara: element
                    })
                    window.scrollTo(0, this.state.scrollHeight[index])
                    this.props.handleChange();
                }}>{element}</li>);
        return (
            <div>

                <div className='article_container'>

                    <article className='core_concepts'>
                        <h1>核心概念</h1>
                        <h2>概览</h2>
                        <p>Recoil 能为你创建一个数据流图（data-flow graph），从 atom（共享状态）到 selector（纯函数），再向下流向 React 组件。Atom 是组件可以订阅的状态单位。selector 可以同步或异步转换此状态。</p>
                        <h2>Atoms</h2>
                        <p>Atom 是状态的单位。它们时可更新、可订阅的：当 atom 被更新时，每个订阅的组件都将使用新值重新渲染。它们也可以在运行时创建。可以使用 atom 代替组件内部的状态。如果多个组件使用相同的 atom，则所有这些组件共享其状态。</p>
                        <p>Atoms are created using the atom function:</p>
                        <div className='codeBlock'>
                            <button className='copy-button'
                                onClick={() => this.codeToClipboard(0)}>copy</button>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='keyword'>const</span>
                                <span className='plain'> fontSizeState </span>
                                <span className='operator'> = </span>
                                <span className='function'>atom</span>
                                <span className='punctuation'>{'({'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='plain'>key</span>
                                <span className='operator'> : </span>
                                <span className='string'>'fontSizeState'</span>
                                <span className='punctuation'>,</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>default</span>
                                <span className='operator' > : </span>
                                <span className='number'>14</span>
                                <span className='punctuation'>,</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='punctuation'>{'});'}</span>
                            </div>

                        </div>
                        <p>Atoms need a unique key, which is used for debugging, persistence, and for certain advanced APIs that let you see a map of all atoms. It is an error for two atoms to have the same key, so make sure they're globally unique. Like React component state, they also have a default value.</p>
                        <p>To read and write an atom from a component, we use a hook called useRecoilState. It's just like React's useState, but now the state can be shared between components:</p>
                        <div className='codeBlock'>
                            <button className='copy-button'
                                onClick={() => this.codeToClipboard(1)}>copy</button>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='keyword'>function </span>
                                <span className='function'>FontButton</span>
                                <span className='punctuation'>{'() {'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>const</span>
                                <span className='punctuation'> [ </span>
                                <span className='plain'>fontSize</span>
                                <span className='punctuation'>,</span>
                                <span className='plain'>setFontSize</span>
                                <span className='punctuation'> ] </span>
                                <span className='operator'> = </span>
                                <span className='function'>useRecoilState</span>
                                <span className='punctuation'> ( </span>
                                <span className='plain'>fontSizeState</span>
                                <span className='punctuation'> );</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>return</span>
                                <span className='punctuation'> ( </span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='punctuation'>{'<'}</span>
                                <span className='attr'>button </span>
                                <span className='attr'>onClick</span>
                                <span className='punctuation'>{'={()'}</span>
                                <span className='punctuation'>{'=>'}</span>
                                <span className='function'>setFontSize</span>
                                <span className='punctuation'>((</span>
                                <span className='tag'>size</span>
                                <span className='punctuation'>)</span>
                                <span className='punctuation'>{'=>'}</span>
                                <span className='tag'>size</span>
                                <span className='operator'> + </span>
                                <span className='number'>1</span>
                                <span className='punctuation'>{')}'}</span>
                                <span className='attr'>style</span>
                                <span className='punctuation'>{'={{'}</span>
                                <span className='tag'>fontSize</span>
                                <span className='punctuation'>{'}}>'}</span>
                            </div>
                            <div className='plain code-line'
                                style={{ left: '50px' }}>
                                Click to Enlarge
                        </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='punctuation'>{'</'}</span>
                                <span className='tag'>button</span>
                                <span className='punctuation'>{'>'}</span>
                            </div>
                            <div className='punctuation code-line'
                                style={{ left: '30px' }}>
                                );
                        </div>
                            <div className='punctuation code-line'
                                style={{ left: '20px' }}>
                                {'}'}
                            </div>
                        </div>
                        <p>Clicking on the button will increase the font size of the button by one. But now some other component can also use the same font size:</p>
                        <div className='codeBlock'>
                            <button className='copy-button'
                                onClick={() => this.codeToClipboard(2)}>copy</button>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='keyword'>function</span>
                                <span className='function'> Text</span>
                                <span className='punctuation'>{'() {'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>const</span>
                                <span className='punctuation'> [ </span>
                                <span className='plain'>fontSize</span>
                                <span className='punctuation'>,</span>
                                <span className='plain'>setFontSize</span>
                                <span className='punctuation'> ] </span>
                                <span className='operator'> = </span>
                                <span className='function'>useRecoilState</span>
                                <span className='punctuation'> ( </span>
                                <span className='plain'>fontSizeState</span>
                                <span className='punctuation'> );</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>return </span>
                                <span className='punctuation'>{'<'}</span>
                                <span className='tag'>p </span>
                                <span className='attr'>style</span>
                                <span className='punctuation'>{'={{'}</span>
                                <span className='tag'>fontSize</span>
                                <span className='punctuation'>{'}}>'}</span>
                                <span className='plain'>This text will increase in size too</span>
                                <span className='punctuation'>{'.</'}</span>
                                <span className='tag'>p</span>
                                <span className='punctuation'>{'>;'}</span>
                            </div>
                        </div>
                        <h2>Selectors</h2>
                        <p>A selector is a pure function that accepts atoms or other selectors as input. When these upstream atoms or selectors are updated, the selector function will be re-evaluated. Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change.</p>
                        <p>Selectors are used to calculate derived data that is based on state. This lets us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state. Since selectors keep track of what components need them and what state they depend on, they make this functional approach very efficient.</p>
                        <p>From the point of view of components, selectors and atoms have the same interface and can therefore be substituted for one another.</p>
                        <p>Selectors are defined using the selector function:</p>
                        <div className='codeBlock'>
                            <button className='copy-button'
                                onClick={() => this.codeToClipboard(4)}>copy</button>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='keyword'>const</span>
                                <span className='plain'> fontSizeLabelState</span>
                                <span className='operator'> = </span>
                                <span className='function'> selector</span>
                                <span className='punctuation'>{'({'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='plain'>key</span>
                                <span className='operator'> : </span>
                                <span className='string'>'fontSizeLabelState'</span>
                                <span className='punctuation'>,</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='function'>get</span>
                                <span className='operator'>: </span>
                                <span className='punctuation'>{'( {'}</span>
                                <span className='plain'>get</span>
                                <span className='punctuation'>{'} )'}</span>
                                <span className='operator'>{'=> '}</span>
                                <span className='punctuation'>{'{'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='keyword'>const</span>
                                <span className='plain'> fontSize </span>
                                <span className='operator'> = </span>
                                <span className='plain'>get</span>
                                <span className='punctuation'>{'('}</span>
                                <span className='plain'>fontSizeState</span>
                                <span className='punctuation'>{') ;'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='keyword'>const</span>
                                <span className='plain'> unit </span>
                                <span className='operator'> = </span>
                                <span className='string'>'string'</span>
                                <span className='punctuation'>;</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='keyword'>return </span>
                                <span className='operator'> `</span>
                                <span className='punctuation'>{'${'}</span>
                                <span className='plain'>fontSize</span>
                                <span className='punctuation'>{'}${'}</span>
                                <span className='plain'>unit</span>
                                <span className='punctuation'>{'}'}</span>
                                <span className='operator'>`</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='punctuation'>{'},'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='punctuation'>{'});'}</span>
                            </div>
                        </div>

                        <p>The get property is the function that is to be computed. It can access the value of atoms and other selectors using the get argument passed to it. Whenever it accesses another atom or selector, a dependency relationship is created such that updating the other atom or selector will cause this one to be recomputed.</p>
                        <p>In this fontSizeLabelState example, the selector has one dependency: the fontSizeState atom. Conceptually, the fontSizeLabelState selector behaves like a pure function that takes a fontSizeState as input and returns a formatted font size label as output.</p>
                        <p>Selectors can be read using useRecoilValue(), which takes an atom or selector as an argument and returns the corresponding value. We don't use the useRecoilState() as the fontSizeLabelState selector is not writeable (<a className='url' href=''>see the selector API reference</a> for more information on writeable selectors):</p>

                        <div className='codeBlock'>
                            <button className='copy-button'
                                onClick={() => this.codeToClipboard(0)}>copy</button>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='keyword'>function</span>
                                <span className='function'> FontButton </span>
                                <span className='punctuation'>{'() {'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>const</span>
                                <span className='punctuation'> [</span>
                                <span className='plain'>fontSize</span>
                                <span className='punctuation'>,</span>
                                <span className='plain'>setFontSize</span>
                                <span className='punctuation'>]</span>
                                <span className='operator'> = </span>
                                <span className='plain'>useRecoilState</span>
                                <span className='punctuation'>{'('}</span>
                                <span className='plain'>fontSizeState</span>
                                <span className='punctuation'>{') ;'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>const </span>
                                <span className='plain'>fontSizeLabel</span>
                                <span className='operator'> = </span>
                                <span className='function'>useRecoilValue</span>
                                <span className='punctuation'>{'('}</span>
                                <span className='plain'>fontSizeLabelState</span>
                                <span className='punctuation'>{');'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='keyword'>return</span>
                                <span className='punctuation'> (</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='punctuation'>{'<>'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='punctuation'>{'<'}</span>
                                <span className='tag'>div</span>
                                <span className='punctuation'>{'>'}</span>
                                <span className='plain'>Current font size</span>
                                <span className='operator'>:</span>
                                <span className='punctuation'>{'{'}</span>
                                <span className='plain'>fontSizeLabel</span>
                                <span className='punctuation'>{'}'}</span>
                                <span className='punctuation'>{'</'}</span>
                                <span className='tag'>div</span>
                                <span className='punctuation'>{'>'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '50px' }}>
                                <span className='punctuation'>{'<'}</span>
                                <span className='tag'>button </span>
                                <span className='attr'>OnClick</span>
                                <span className='punctuation'>{'={() '}</span>
                                <span className='operator'>{'=>'}</span>
                                <span className='function'>setFontSize</span>
                                <span className='punctuation'>{'('}</span>
                                <span className='tag'>fontSize</span>
                                <span className='operator'> + </span>
                                <span className='number'>1</span>
                                <span className='punctuation'>{')} '}</span>
                                <span className='attr'>style</span>
                                <span className='punctuation'>{'={{'}</span>
                                <span className='tag'>fontSize</span>
                                <span className='punctuation'>{'}}>'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '60px' }}>
                                <span className='plain'>Click to Enlarge</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '50px' }}>
                                <span className='punctuation'>{'</'}</span>
                                <span className='tag'>button</span>
                                <span className='punctuation'>{'>'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '40px' }}>
                                <span className='punctuation'>{'</>'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '30px' }}>
                                <span className='punctuation'>{');'}</span>
                            </div>
                            <div className='code-line'
                                style={{ left: '20px' }}>
                                <span className='punctuation'>{'}'}</span>
                            </div>
                        </div>
                        <p>Clicking on the button now does two things: it increases the font size of the button while also updating the font size label to reflect the current font size.</p>
                    </article>

                    <div className='editpage'>edit this page</div>

                    <div className='page_nav_container'>
                        <div className='left_page_nav'>
                            <p>Previous</p>
                            <a>核心概念</a>
                        </div>
                        <div className='right_page_nav'>
                            <p>Next</p>
                            <a>快速入门</a>
                        </div>
                    </div>
                </div>

                <div className='right_container'>
                    <ul>
                        {Li}
                    </ul>
                </div>

            </div>
        )
    }
}