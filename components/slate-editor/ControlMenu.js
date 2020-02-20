import { Button } from 'reactstrap'


const ControlMenu = (props) => {

    return (
        <div className="control-menu">
            <h1 className="title"> Write Your Story...</h1>
            <div className="status-box">
                saved
            </div>
            <Button onClick={props.save} color="success">Save</Button>
        </div>
    )
}


export default ControlMenu;