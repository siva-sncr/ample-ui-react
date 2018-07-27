
const unitConversion = (data = 0, conversionTo) => {
    if (data && (typeof(data) === 'string')) {		
        data = parseFloat(data);		
    }		
    if(conversionTo === 'F') {		
    //	value = value * 9.0 / 5.0 + 32;		
    } else if(conversionTo === 'C') {		
        data = (data - 32) * 5.0/9.0;		
    }		
    data = (data % 1 === 0) ? data : parseFloat(data).toFixed(2);
    return 	data;
}

export default unitConversion;