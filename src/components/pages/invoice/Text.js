import React, {Fragment} from "react";
import { Text as PdfText } from "@react-pdf/renderer";
import compose from '../../../styles/compose'


const Text = ({ className, pdfMode, children }) => {
    return (
        <Fragment>
            {pdfMode ? (
              <PdfText style={compose('span ' + (className ? className : ''))}>{children}</PdfText>

            ) : (
                <span className={'span ' + (className ? className : "")}>{children}</span>
            )}
        </Fragment>
    )
};

export default Text;

  {/* <PdfText style={compose('span ' + (className ? className : ''))}>{children}</PdfText> */}
//   <PdfText style={{fontSize: "9px" }}>{children}</PdfText>
