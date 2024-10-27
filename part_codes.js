//the company 
// the part
// optional size

let ACME = "ACME:123-L"


function getSupplier (code) {
    let colon = code.indexOf(":")
    let supplier  = code.substring(0,colon)
    console.log(supplier)
    // return supplier
    // that returns all characters before the :
}

function productNumber (code) {
    // that returns all characters between the : and -
}

function getSize (code) {
    //  that returns all characters after the -

}

getSupplier(ACME)
// getProductNumber(ACME)