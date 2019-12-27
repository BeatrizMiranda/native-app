import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { BookContext } from '../Contexts/BookContext';

// class BookList extends Component {
//     //import all data from context Teacher prefere this one (but cant use two differents consumer)
//     static contextType = ThemeContext
//     render() { 
//         const {isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <div className="booklist" style={{background: theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The fear of a wise man</li>
//                     <li style={{background: theme.ui}}>The name of the wind</li>
//                     <li style={{background: theme.ui}}>The sound of silence</li>
//                 </ul>

//             </div>
//          );
//     }
// }

// context with hook 
const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext)
    return ( 
        <div className="booklist" style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                {books.map(book => {
                    return <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
                })}
            </ul>
        </div>
    );
}
 
export default BookList; 