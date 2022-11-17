import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import { ShowResults } from "../components/ShowResults";
import * as Constants from '../Constants';

// This component is loaded to show result on OpenDraw page
export class OpenDraw extends Component {

    // function renders OpenDraw page
    render() {

        // set value to columns constant to pass as a prop to load ShowResults component
        const columns = [
            {
                field: 'ProductId',
                headerName: 'Product',
                width: 200
            },
            {
                field: 'DrawDisplayName',
                headerName: 'Draw Display Name',
                width: 280,
            },
            {
                field: 'DrawDate',
                headerName: 'Draw Date',
                width: 200,
                valueGetter: (params) =>
                    `${new Date(params.row.DrawDate).toLocaleDateString()}`
            },
            {
                field: 'DrawNumber',
                headerName: 'Draw Number',
                width: 160
            },
            {
                field: 'Div1Amount',
                headerName: 'Jackpot Value',
                width: 180
            },
            {
                field: 'DrawLogoUrl',
                headerName: 'Draw Logo',
                align: 'center',
                headerAlign: 'center',
                width: 150,
                renderCell: (params) => {
                    return (
                        <Avatar variant="square" src={params.row.DrawLogoUrl} />
                    )
                }
            }
        ];

        return (
            <div><ShowResults
                Columns={columns}
                DataHeader={"Lottery Draw & Jackpot Information"}
                Page={"OpenDraw"}
                DataUrl={Constants.OpenDrawsUrl} />
            </div>
        )
    }
}

export default OpenDraw