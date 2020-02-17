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
        //Return with no changes if the keypress is not '&'
        if (event.key != 'x' || !event.ctrlKey) return next()

        //prevent the ampersand character from being inserted.
        event.preventDefault();
        //Determine whether any of the currently selected blocks are code blocks
        const isCode = editor.value.blocks.some(block => block.type == 'code')

        //Toggle the block type depending on 'isCode
        editor.setBlocks(isCode ? 'paragraph' : 'code')
             
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
                        renderNode={this.renderNode} />
                }
            </>
        )
    }
}