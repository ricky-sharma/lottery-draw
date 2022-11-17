import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import * as Constants from '../Constants';


// This component is loaded to show result on OpenDraw and LatestResults pages,
// props are passed to this componenet depending on the page it will be loaded
export class ShowResults extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            page: props.Page,
            columns: props.Columns ?? [],
            dataUrl: props.DataUrl ?? Constants.OpenDrawsUrl,
            dataHeader: props.DataHeader ?? '',
            lottery: [],
            loading: true,
            companyIds: '',
            selectedCompanyId: 'GoldenCasket',
            maxDrawCount: props.Page === 'OpenDraw' ? 20 : 1
        };
    }

    componentDidMount() {
        this.populateData();
    }

    //render function loads the grid
    render() {
        const rows = this.state.loading ? [] : this.state.lottery.Draws ?? this.state.lottery.DrawResults ?? []
        return (
            <div className="mx-4 px-4 my-5 py-4">
                <Box sx={{ height: 690, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={this.state.columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                        loading={this.state.loading}
                        getRowId={() => Math.random().toString(16).slice(-10)}
                        components={{
                            Toolbar: this.HeaderToolbar,
                        }}
                    />
                </Box>
            </div>
        )
    }

    // Header toolbar loads the grid header, company dropdown and max count textbox
    HeaderToolbar = () => {
        return <Box className="row"
            sx={{
                borderBottom: 1,
                borderColor: 'divider',
                p: 1,
                m: 0
            }}>
            <div className="col-7 m-0 p-0"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "peru"
                }}>
                <h5 className="m-0 p-0">{this.state.dataHeader}</h5>
            </div>
            <div
                className="col-3"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItem: "flex-end",
                }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="select-label-companyId">CompanyId</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select-companyId"
                        label="CompanyId"
                        value={this.state.selectedCompanyId}
                        onChange={(e) => {
                            this.setState({ selectedCompanyId: e.target.value, loading: true }, () => {
                                this.populateData();
                            });
                        }}>
                        {this.companyIdMenuItems()}
                    </Select>
                </FormControl>
            </div>
            <div className="col-2 m-0 p-0"
                style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                <TextField label={this.state.page === 'OpenDraw' ? "Max Draw Count" : "Max Draw Count Per Product"}
                    id="textField-DrawCount"
                    variant="outlined"
                    type="number"
                    inputProps={{ min: "1" }}
                    onChange={(e) => {
                        this.setState({
                            maxDrawCount: e.target.value
                        },
                            () => {
                                if (this.state.maxDrawCount.trim() !== '' && !isNaN(this.state.maxDrawCount))
                                    this.populateData();
                                else {
                                    this.setState({
                                        maxDrawCount: 0
                                    }, () => { this.populateData(); })
                                }
                            })
                    }}
                    value={this.state.maxDrawCount}
                    size="small" ></TextField>
            </div>
        </Box>
    }

    // MenuItems added to the company dropdown
    companyIdMenuItems = () => {
        var companyItems = <MenuItem value='GoldenCasket'>Golden Casket</MenuItem>
        if (this.state.companyIds !== '' && this.state.companyIds !== null)
            companyItems = this.state.companyIds.Companies.map(function (element, index) {
                return <MenuItem key={index} value={element.CompanyId}>{element.CompanyDisplayName}</MenuItem>
            })
        return companyItems
    }

    // populate grid and company dropdown data
    async populateData() {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': Constants.ContentType },
            body: this.state.page === 'OpenDraw' ? JSON.stringify({
                "CompanyId": this.state.selectedCompanyId,
                "MaxDrawCount": this.state.maxDrawCount
            }) :
                JSON.stringify({
                    "CompanyId": this.state.selectedCompanyId,
                    "MaxDrawCountPerProduct": this.state.maxDrawCount
                })
        };
        let response = await fetch(this.state.dataUrl, requestOptions);
        let data = await response.json();
        this.setState({ lottery: data, loading: false });

        if (this.state.companyIds === '' || this.state.companyIds === null) {
            response = await fetch(Constants.CompaniesUrl);
            data = await response.json();
            this.setState({ companyIds: data });
        }
    }
}

export default ShowResults