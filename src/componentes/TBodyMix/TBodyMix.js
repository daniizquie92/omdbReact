import React from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
function TBodyMix(props){
    
    const datos = props.filas.map((fila,i) =>{
        return (
            <TableRow key={i} onClick={() => {props.evento(fila.imdbID)}}>
                <TableCell>{fila.Title}</TableCell>
                <TableCell>{fila.Year}</TableCell>
                <TableCell>{fila.Type}</TableCell>
                <TableCell><img src={fila.Poster} alt={fila.imdbID}></img></TableCell>
            </TableRow>
        );
    });

    return(
        <TableBody id="table_body">
            {datos}
        </TableBody>
    );

}

export default TBodyMix;