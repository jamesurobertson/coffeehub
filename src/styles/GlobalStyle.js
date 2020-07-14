import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  .ReactModal__Body--open {
  overflow-y: hidden;
  }

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      color: #262626;
      font-size: 16px;
      vertical-align:baseline;
      background:transparent;
      font-family: "Neue Plak", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    ​
    article,aside,details,figcaption,figure,
    header,hgroup,menu,nav,section {
        display:block;
    }
    ​
    nav, ol, ul {
        list-style:none;
    }

    body {
      background-color: #fafafa;
    }



`;

export default GlobalStyle
