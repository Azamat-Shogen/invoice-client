import React, {Fragment} from 'react';
import TextAutosize from "react-textarea-autosize";
import { Text } from "@react-pdf/renderer";
import compose from '../../../styles/compose';


const EditableTextarea = ({ className, placeholder, value, onChange, pdfMode, rows }) => {

    return (
        <Fragment>
            {pdfMode ? (
                <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
            ) : (
                <TextAutosize
                    style={{}}
                    minRows={rows || 1}
                    className={'input ' + (className ? className : "")}
                    placeholder={placeholder || ""}
                    value={value || ""}
                    onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                />
            )}
        </Fragment>
    )
}

export default EditableTextarea;