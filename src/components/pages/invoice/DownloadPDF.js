// import React, { useEffect, useState } from 'react';
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import InvoicePage from './InvoicePage';


const PrintPage = () => {
  
       const printPdf = () => {
        window.print()
    }

    return (
        <div className={'print-pdf w-10'} title="Print PDF">
            <a type="button" href="#/" aria-label="Print PDF" onClick={printPdf}> </a>
        </div>
        
    )
};

export default PrintPage;




// const Download = ({ data }) => {
//     const [show, setShow] = useState(false);

//     const printPdf = () => {
//         window.print()
//     }

//     useEffect( () => {
//         setShow(false);

//         const timeout = setTimeout( () => {
//             setShow(true);
//         }, 500)

//         return () => clearTimeout(timeout);

//     }, [data])

//     return (
//         <div className="flex download-and-print">
//         <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Download PDF">
//             {show && (
//                 <PDFDownloadLink
//                     document={<InvoicePage pdfMode={true} data={data}/>}
//                     fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
//                     aria-label="Save PDF"
//                 >
//                 </PDFDownloadLink>
//             )}
//         </div>
//         <div className={'print-pdf ' + (!show ? 'loading' : '')} title="Print PDF">
//             <a type="button" aria-label="Print PDF" onClick={printPdf}> </a>
//         </div>
//         </div>
//     )
// };

// export default Download;