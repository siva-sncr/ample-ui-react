
const unitConversion = (data, conversionTo) => {
    var value = data ? data : 0;		
    if (data && (typeof(data) === 'string')) {		
        value = parseFloat(data);		
    }		
    if(conversionTo === 'F') {		
    //	value = value * 9.0 / 5.0 + 32;		
    } else if(conversionTo === 'C') {		
        value = (value - 32) * 5.0/9.0;		
    }		
    value = (value % 1 === 0) ? value : parseFloat(value).toFixed(2);
    return 	value;
}

export default unitConversion;