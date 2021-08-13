import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    "palette": {
        "background": {
            "default": "#FFF",
            "emphasis": "#E8EAF6",
            "secondary": "#C5CAE9",
            "header": "#121037"
        },
        "text": {
            "primary": "#1A1A18",
            "secondary": "#707070",
            "hint": "#9FA8DA"
        },
        "primary": {
            
            "main": "#C45102",
            "light": "#cf7334",
            "dark": "#893801"
        },
        "secondary": {
            "main": "#FFAB00",
            "light": "#ffd740",
            "dark": "#ff8f00"
        },
        "ternary":{
            "main": "green",
            "light": "green",
            "dark": ""
        },
        
    },
   
});

export default theme;

