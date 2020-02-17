import { Button } from "../components"

onClickMark(event, type, editor) {    
    event.preventDefault()
    editor.toggleMark(type)
}


export renderMarkButton(type, icon, editor) {   
    const { value } = editor
    const isActive = value.activeMarks.some(mark => mark.type == type)
    return (
        <Button
            reversed
            active={isActive}
            onMouseDown={event => onClickMark(event, type, editor)}
        >
            <Icon>{icon}</Icon>
        </Button>

    )
}