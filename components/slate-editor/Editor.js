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
        if (event.key !== '&') return next()

        //prevent the ampersand character from being inserted.
        event.preventDefault()

        //Change the value by inserting 'and' at the cursor's position.
        editor.insertText('and')
        return true        
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
                        onKeyDown={this.onKeyDown}/>
                }
            </>
        )
    }
}