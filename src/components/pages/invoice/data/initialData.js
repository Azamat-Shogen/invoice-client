
export const initialProductLine = {
    name: "",
    count: 1,
    stateFee: '0',
    convenienceFee: 0,
    cost: '0.00'
}

export const getRandomId = (min = 0, max = 500000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0")
  };

export const initialInvoice = {
    logo: '',
    logoWidth: 100,
    title: 'INVOICE',
    companyName: '',
    name: '',
    companyAddress: '',
    companyAddress2: '',
    companyCountry: 'United States',
    billTo: 'Bill To:',
    clientName: '',
    clientAddress: '',
    clientAddress2: '',
    clientCountry: 'United States',
    invoiceTitleLabel: 'Invoice#',
    invoiceTitle: `INV-${getRandomId()}`,
    invoiceDateLabel: 'Invoice Date',
    invoiceDate: '',
    invoiceDueDateLabel: 'Due Date',
    invoiceDueDate: '',
    productLineDescription: 'Item Description',
    productLineQuantity: 'Qty',
    productLineQuantityRate: 'Rate',
    productLineQuantityAmount: 'Amount',
    productLines: [],
    subTotalLabel: 'Sub Total',
    serviceFeeLabel: 'Service Fee $',
    serviceFee: 25,
    totalQuantity: 0,
    totalLabel: 'BALANCE DUE',
    currency: '$',
    multiplySign: 'x',
    notesLabel: 'Notes',
    notes: '',
    termLabel: 'Terms & Conditions',
    term: 'Please make the payment by the due date.',
  }
  