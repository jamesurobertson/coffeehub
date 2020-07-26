import React from 'react'
import styled from 'styled-components'
import { TiCoffee } from "react-icons/ti";
import {Link} from 'react-router-dom'


const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    z-index: 100;
    background-color: ${(props) => props.theme.bg};
    border-top: 1px solid ${(props) => props.theme.border};

    ul {
        display: flex;
        align-items: center;
        li {
            font-size: 12px;
            margin: 0 10px;
        }
    }

    a {
        display: flex;
        align-items: center;
    }
`


const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <ul>
                    <li>
                        <Link to='/'>
                    <TiCoffee className='coffee-icon' size='2rem'/>
                    © 2020 CoffeeHub, inc
                        </Link>
                    </li>
                    <li> <a href='https://github.com/jamesurobertson'>Github</a></li>

                    <li>
                    <a href='https://www.linkedin.com/in/james-robertson-31b623116/'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='https://www.jamesurobertson.com'>Portfolio</a>
                    </li>
                </ul>
            </div>
        </FooterWrapper>
    )
}


export default Footer

// import React from 'react'
// import styled from 'styled-components'
// import { TiCoffee } from "react-icons/ti";
// import {Link} from 'react-router-dom'


// const FooterWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     position: fixed;
//     bottom: 0;
//     height: 54px;
//     background-color: ${(props) => props.theme.black};
//     border-top: 1px solid ${(props) => props.theme.border};

//     ul {
//         display: flex;
//         align-items: center;
//         li {
//             margin: 0 10px;
//             color: white;
//         }
//     }

//     .coffee-icon {
//         color: white;
//     }
// `


// const Footer = () => {
//     return (
//         <FooterWrapper>
//             <div>
//                 <ul>
//                     <li> <a href='https://github.com/jamesurobertson'>Github</a></li>
//                     <li>
//                         <Link to='/'>
//                     <TiCoffee className='coffee-icon' size='3rem'/>

//                         </Link>
//                     </li>

//                     <li>
//                     <a href='https://www.linkedin.com/in/james-robertson-31b623116/'>LinkedIn</a>
//                     </li>
//                     <li>
//                         <a href='https://www.jamesurobertson.com'>Portfolio</a>
//                     </li>
//                 </ul>
//             </div>
//         </FooterWrapper>
//     )
// }


// export default Footer
