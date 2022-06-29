import React, { Fragment } from "react";
import { Document as PdfDocument} from '@react-pdf/renderer';


const Document = ({ pdfMode, children }) => {

    return (
        <Fragment>
           {pdfMode ? <PdfDocument>
                        {children}
                      </PdfDocument> : <>{children}</> }
        </Fragment>
    )
};

export default Document;