import React from "react";
import DartIcon from '../../assets/icons/file_type_dart.svg';
import JavaIcon from '../../assets/icons/file_type_java.svg';
import JSIcon from '../../assets/icons/file_type_js.svg';
import PythonIcon from '../../assets/icons/file_type_python.svg';
import TypescriptIcon from '../../assets/icons/file_type_typescript.svg';
import RustIcon from '../../assets/icons/file_type_rust.svg';

interface TabLangIconProps {
    lang: string,
    [props: string]: any
}
 const TabLangIcon = ({ lang, ...props }: TabLangIconProps) => {
    let Icon;
    switch (lang) {
        case 'dart':
            Icon = DartIcon;
            break;
        case 'java':
            Icon = JavaIcon;
            break;
        case 'js':
            Icon = JSIcon;
            break;
        case 'python':
            Icon = PythonIcon;
            break;
        case 'typescript':
            Icon = TypescriptIcon;
            break;
        case 'rust':
            Icon = RustIcon;
            break;
        default:
            break;
    }
    return (<img src={Icon} {...props}/>)
}
export default TabLangIcon;