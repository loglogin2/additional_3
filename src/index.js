module.exports = function getBase(base) {
  // your solution
    var check = 0;

    if (base[0] === '1')
        for(var i = 1; i < base.length; i++)
            if(base[i] === '0')
                check++;

    if(check == base.length-1)
        return base - 1;

    var test_num = base;
    var ret_base = 2;

    while( test_num > ret_base )
    {
        if( test_num % ret_base == 1 )
            test_num = Math.floor( test_num / ret_base );
        else
        {
            test_num = base;
            ret_base++;
        }
    }
    return ret_base;
}
