function defangIPaddr(address) { 
    console.log(address.replace(/\./g, '[.]'))
    return address.replace(/\./g, '[.]')
};