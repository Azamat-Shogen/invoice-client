import React, {Fragment} from "react";
import { Page as PdfPage } from "@react-pdf/renderer";
import compose from '../../../styles/compose';
// import DownloadPDF from "./DownloadPDF";



const Page = ({ className, pdfMode, children }) => {
    return (
        <Fragment>
        
            {pdfMode ? (
                <PdfPage size="A4" style={compose('page ' + (className ? className : ''))}>{children}</PdfPage>
            ) : (
                <div className={'page ' + (className ? className : "")}>{children}</div>
            )}
        </Fragment>
    )
}

export default Page;