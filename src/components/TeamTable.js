import React from 'react';
import Teams from '../json/teams.json';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';

class TeamTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    rowStyle = (team) => {
        return {"background-color": team.background, "color": team.text}
    }
    
    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Wins</TableCell>
                        <TableCell>Ties</TableCell>
                        <TableCell>Losses</TableCell>
                        <TableCell>Cup Bonus</TableCell>
                        <TableCell>End Of Season</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Teams.map((team) => (
                            <TableRow style={this.rowStyle(team)}>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.wins ? team.wins : 0}</TableCell>
                                <TableCell>{team.ties ? team.ties : 0}</TableCell>
                                <TableCell>{team.losses ? team.losses : 0}</TableCell>
                                <TableCell>{team.cupBonus ? team.cupBonus : 0}</TableCell>
                                <TableCell>{team.endOfSeason ? team.endOfSeason : 0}</TableCell>
                                <TableCell>{team.total ? team.total : 0}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        )
    }
}

export default TeamTable;