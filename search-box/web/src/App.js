import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, List, ListItem, Divider } from 'material-ui'
import { observer } from 'mobx-react';

export default observer(class App extends Component {
    static propTypes = {
        colors: React.PropTypes.object.isRequired
    };
    handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.props.colors.search();
        }
    };
    handleQueryChange = (event, value) => {
        this.props.colors.updateQuery(value);
    };

    render() {
        const listItems = this.props.colors.results.map((color, index) => {
            return (
                <div key={`color-div-${index}`}>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider key={`divider-${index}`}/>
                </div>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    <TextField hintText="Search..."
                               floatingLabelFixed={true}
                               fullWidth={true}
                               value={this.props.colors.query}
                               onChange={this.handleQueryChange}
                               onKeyDown={this.handleKeyDown}/>
                    <List>
                        {listItems}
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
});