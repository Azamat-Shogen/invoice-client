import React, {Fragment} from "react";
import { Text } from "@react-pdf/renderer"
import compose from '../../../styles/compose';

const EditableInput = ({ className, placeholder, value, onChange, pdfMode }) => {

    return (
        <Fragment>
            {pdfMode ? (
                
               <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>

            ) : (
                <input
                  type="text"
                  style={{lineHeight: '23px'}}
                  className={'input ' + (className ? className : '')}
                  placeholder={placeholder || ''}
                  value={value || ''}
                  onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                />
            )}
        </Fragment>
    )

}

export default EditableInput;

{/* <Text style={compose('span ' + (className ? className : ''))}>{value}</Text> */}
