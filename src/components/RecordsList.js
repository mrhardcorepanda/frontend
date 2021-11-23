import React, {Component} from 'react';
export default class RecordsList extends Component {
    render(){
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.gender}
                </td>
                <td>
                    {this.props.obj.homeworld}
                </td>
                <td>
                    {this.props.obj.ships_ids}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}