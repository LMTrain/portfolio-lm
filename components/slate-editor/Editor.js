import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';


//CREATE OUR INITIAL VALUE..
const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
});

//Define a React Component render for our code blocks
function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
function BoldMark(props) {
    return <strong>{props.children}</strong>
}

//Define our app...
export default class SlateEditor extends React.Component {
    //Set the initial value when the app is first constructed.
    state = {
        value: initialValue,
        isLoaded: false
    }

    componentDidMount() {
        this.setState({isLoaded: true});
    }

    //On change, update the app's React state with the new editor value.
    onChange = ({ value}) => {
        this.setState({ value })
    }

    onKeyDown = (event, editor, next) => {
        if (!event.ctrlkey) return next()
        //Decide what to do baased on the key code..
        switch (event.key) {
        //When "B" is pressed, add a "bold" mark to the text.
            case 'b': {
                event.preventDefault()
                editor.togglemark('bold')
                break;
            }
            //When "`" is pressed, keep our existing code block logic.
            case 'x': {
                const isCode = editor.value.blocks.some(block => block.type == 'code')
                event.preventDefault();
                //Toggle the block type depending on 'isCode
                editor.setBlocks(isCode ? 'paragraph' : 'code');
                break;
            }
            //Otherwise, let other plugins handle it.
            default: {
                return next()
            }
        }             
    }

    // Add a 'renderNode' method to render a 'CodeNode' for code blocks
    renderNode = (props, editor, next) => {
        switch (props.node.type) {
            case 'code':
                return <CodeNode {...props} />
            case 'paragraph':
                return <p {...props.attributes}>{props.children}</p>
            default:
                return next()
        }
    }

    //Add a 'renderMark' method to render marks.
    renderMark = (props, editor, next) => {
        switch (props.mark.type) {
            case 'bold':
                return <BoldMark {...props} />
            default:
                return next()
        }
    }

    //Render the editor
    render() {
        const { isLoaded } = this.state;

        return (
            <>
                {
                    <Editor 
                        value={this.state.value} 
                        onChange={this.onChange} 
                        onKeyDown={this.onKeyDown}
                        renderNode={this.renderNode}
                        renderMark={this.renderMark} />
                }
            </>
        )
    }
}