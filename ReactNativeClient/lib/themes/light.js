"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
// This is the default theme in Joplin
const theme = {
    appearance: type_1.ThemeAppearance.Light,
    // Color scheme "1" is the basic one, like used to display the note
    // content. It's basically dark gray text on white background
    backgroundColor: '#ffffff',
    backgroundColorTransparent: 'rgba(255,255,255,0.9)',
    oddBackgroundColor: '#dddddd',
    color: '#32373F',
    colorError: 'red',
    colorWarn: '#9A5B00',
    colorFaded: '#7C8B9E',
    colorBright: '#000000',
    dividerColor: '#dddddd',
    selectedColor: '#e5e5e5',
    urlColor: '#155BDA',
    // Color scheme "2" is used for the sidebar. It's white text over
    // dark blue background.
    backgroundColor2: '#313640',
    color2: '#ffffff',
    selectedColor2: '#131313',
    colorError2: '#ff6c6c',
    // Color scheme "3" is used for the config screens for example/
    // It's dark text over gray background.
    backgroundColor3: '#F4F5F6',
    backgroundColorHover3: '#CBDAF1',
    color3: '#738598',
    // Color scheme "4" is used for secondary-style buttons. It makes a white
    // button with blue text.
    backgroundColor4: '#ffffff',
    color4: '#2D6BDC',
    raisedBackgroundColor: '#e5e5e5',
    raisedColor: '#222222',
    searchMarkerBackgroundColor: '#F7D26E',
    searchMarkerColor: 'black',
    warningBackgroundColor: '#FFD08D',
    tableBackgroundColor: 'rgb(247, 247, 247)',
    codeBackgroundColor: 'rgb(243, 243, 243)',
    codeBorderColor: 'rgb(220, 220, 220)',
    codeColor: 'rgb(0,0,0)',
    codeMirrorTheme: 'default',
    codeThemeCss: 'atom-one-light.css',
};
exports.default = theme;
//# sourceMappingURL=light.js.map