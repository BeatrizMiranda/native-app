import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {
    //import all data from context Teacher prefere this one (but cant use two differents consumer)

    static contextType = ThemeContext
    render() { 
        const {isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="booklist" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{background: theme.ui}}>The fear of a wise man</li>
                    <li style={{background: theme.ui}}>The name of the wind</li>
                    <li style={{background: theme.ui}}>The sound of silence</li>
                </ul>

            </div>
         );
    }
}

 
export default BookList;