const lookup = {
    "9275654": 9212646,
    "8439680": 9212679,
    "9212712": 100247161,
    "100204151": 9212746,
    "100256183": 9212748,
    "100256185": 9212747,
    "100256190": 9212749,
    "100256189": 9212750,
    "100256181": 9212751,
    "100256184": 9212752,
    "100256191": 9212753,
    "100256192": 9212754,
    "100256178": 9212755,
    "100256194": 9212756,
    "100256193": 9212757,
    "100256182": 9212758,
    "100256197": 9212759,
    "100256208": 9212760,
    "100204150": 9212761,
    "100256199": 9212762,
    "100256198": 9212763,
    "100256213": 9212764,
    "100256180": 9212765,
    "100256200": 9212766,
    "100256207": 9212767,
    "100256202": 9212768,
    "100256196": 9212769,
    "100256211": 9212770,
    "100256212": 9212771,
    "100256214": 9212772,
    "100256209": 9212773,
    "100256186": 9212745,
    "100256201": 9212774,
    "100256210": 9212775,
    "100242373": 9212778,
    "100266797": 9212811,
    "100155134": 9212844,
    "100266797": 9212877,
    "100184683": 9212910,
    "100155131": 9212943,
    "9158644": 9213010,
    "100226093": 9213009,
    "9158644": 9213010,
    "100154639": 9212976,
    "100277059": 9213042,
    "100278417": 9213043,
    "100286242": 9213075,
    "100249769": 9213114,
    "100249768": 9213109,
    "100249767": 9213108,
    "100249766": 9213112,
    "100249765": 9213113,
    "100250612": 9213115,
    "100250611": 9213111,
    "100161112": 9213110,
    "2795768": 9213174,
    "100302803": 9213207,
    "100320828": 9213241,
    "100320827": 9213242,
    "100356998": 9213306,
    "100184686": 9213339,
    "100347436": 9213372,
    "100361475": 9213374,
    "8351590": 9213375,
    "100361409": 9213373,
    "100401210": 9213405,
    "100466356": 9213471,
    "7647288": 9213504,
    "100151999": 9213537,
    "100529744": 9213570,
    "9066085": 9213603,
    "100321692": 9213604,
    "100535433": 9213637,
    "8500213": 9213636,
    "8500016": 9213638,
    "8540410": 9213672,
    "8264705": 9213671,
    "100426373": 9213670,
    "100584973": 9213669,
    "1511105": 9213702,
    "100638231": 9213735,
    "6169232": 9213768,
    "100648791": 9213801,
    "100561536": 9213836,
    "100664726": 9213835,
    "100664722": 9213837,
    "100664721": 9213838,
    "3965276": 9213884,
    "7125681": 9213887,
    "7577461": 9213885,
    "9109326": 9213868,
    "2504057": 9213886,
    "7520934": 9213890,
    "7118960": 9213871,
    "2144886": 9213878,
    "7492385": 9213881,
    "7721888": 9213875,
    "7577728": 9213870,
    "1934546": 9213883,
    "3010308": 9213889,
    "298091": 9213867,
    "520763": 9213882,
    "8118354": 9213873,
    "3466184": 9213874,
    "5360703": 9213880,
    "7735087": 9213879,
    "7721740": 9213869,
    "7705258": 9213876,
    "7677124": 9213877,
    "8244130": 9213888,
    "7726993": 9213872,
    "8810098": 9213903,
    "100648284": 9213902,
    "100696140": 9213901,
    "100696142": 9213900,
    "1245": 9213933,
    "100702604": 9213967,
    "100692827": 9213968,
    "100154533": 9213966,
    "100724901": 9213999,
    "100744975": 9214032,
    "6381402": 9214065,
    "100773379": 9214066,
    "100795888": 9214099,
    "8736446": 9214100,
    "100241503": 9214098,
    "10080207": 9214131,
    "6362280": 9214165,
    "100805711": 9214167,
    "100739773": 9214164,
    "100810807": 9214166,
    "6424823": 9214166,
    "100821782": 9214197,
    "100863784": 9214233,
    "100863725": 9214231,
    "100862108": 9214230,
    "100858060": 9214263,
    "100885753": 9214297,
    "100890643": 9214296,
    "100890642": 9214298,
    "100922196": 9214329,
    "100937607": 9214362,
    "100978744": 9214395,
    "100970539": 9214428,
    "101003975": 9214461,
    "100991801": 9214494,
    "101014068": 9214527,
    "101019964": 9214560,
    "100800512": 9214561,
    "101037107": 9214593,
    "101044751": 9214626,
    "101057796": 9214659,
    "101035280": 9214661,
    "100573354": 9214660,
    "101067251": 9214693,
    "8932351": 9214692,
    "100896567": 9214726,
    "101082582": 9214725,
    "101099448": 9214795,
    "101108745": 9214791,
    "101116155": 9214793,
    "101108763": 9214792,
    "101059547": 9214794,
    "101128222": 9214824,
    "100361389": 9214857,
    "101132017": 9214891,
    "101131923": 9214890,
    "101137544": 9214925,
    "101142033": 9214923,
    "101142149": 9214926,
    "101145751": 9214957,
    "101145702": 9214956,
    "101149734": 9214989,
    "101181417": 9215022,
    "101191110": 9215055,
    "8982372": 8982372,
    "101188361": 9215089,
    "101188362": 9215090,
    "101188370": 9215088,
    "101188363": 9215091,
    "101207201": 9215121,
    "101207200": 9215122,
    "101207199": 9215123,
    "100862936": 9215154,
    "1609953": 9215192,
    "1609954": 9215188,
    "1609950": 9215189,
    "1609936": 9215190,
    "1609951": 9215193,
    "1694202": 9215187,
    "101239283": 9215220,
    "101257167": 9215254,
    "101229542": 9215253,
    "101137731": 9215286,
    "101140645": 9215287,
    "100863726": 9215319,
    "101337186": 9215352,
};

function convertSsid(ssid) {
    return (lookup.hasOwnProperty(ssid)) ? lookup[ssid] : ssid;
}

$(function(){
    if (typeof sb !== "undefined") {
        var querySsid = sb.URI.getQueryParameterByName('ssid');
    }

    if (querySsid) {
        var dbSsid = convertSsid(querySsid);
        sbf.forms['mainform'].addData({'ssid': dbSsid});
        setTimeout(function() {$('input[name="ssid"]').val(dbSsid).trigger('change');}, 2000);
    } 
});
