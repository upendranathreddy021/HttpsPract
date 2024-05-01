var variableName = 'add';
var paramValue = 'val'
for(var i=0; i < mappingData.length; i++) 
{ 
    
    if(msg[variableName+'_'+i] === mappingData[i]['ADDRESS']) 
    {
        //msg['name'+i] = mappingData[i]['DESCRIPTION'];
        if(mappingData[i]['DATA TYPE'] == 'FLOAT') {
            //parseFloatNumbers(msg.val+'_'+i);
            
            var hexString = msg[paramValue+'_'+i].toString(16);
            var updateResult = parseFloat(hexString);
            msg[mappingData[i]['DESCRIPTION']] = updateResult;
            //break;
        }if(mappingData[i]['DATA TYPE'] == 'BOOL') {
            //parseBooleanNumbers(msg.val+'_'+i);
            //msg['name'+i] = Boolean(msg[paramValue+'_'+i])
            if(mappingData[i]['InnerValues']
            && mappingData[i]['InnerValues'].length){
                var binaryString = Number(msg[paramValue+'_'+i]).toString(2);
                for (var j = 0; j < binaryString.length; j++) {
                    msg[mappingData[i]['InnerValues'][j]['DESCRIPTION']] = Boolean(Number(binaryString[j]))
                }
                msg['binary'] = binaryString
            }
            //working code
            // msg[mappingData[i]['DESCRIPTION']] = Boolean(msg[paramValue+'_'+i])
            //break;
        }
        // if(mappingData[i]['DATA TYPE'] == 'INT') {
        //     //msg['name'+i]=msg[paramValue+'_'+i]
        //     msg[mappingData[i]['DESCRIPTION']]=msg[paramValue+'_'+i]
        //     //break;
        // }
        //break;
        if (mappingData[i]['DATA TYPE'] == 'INT') {
            switch (mappingData[i]['DESCRIPTION']) {
                
                        case 'PT01- RECEIVER PRESSURE' :
                            var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = 0;
                            var OUT_MAX = 1;
                            // Applying the formula for PT01
                            var calculatedValue1 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                           
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue1;
                            break;
                
                        case 'PT02- DESULPHURISER PRESSURE' :
                            var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = 0;
                            var OUT_MAX = 1;
                            // Applying the formula for PT01
                            var calculatedValue2 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue2;
                           
                            break;
                        case 'TT01- DESULPHURISER TEMP':
                             var calculatedValue3 = msg[paramValue+'_'+i] / 100;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue3;
                            break;
                        case 'TT02- MOISTURE SEP TEMP':
                             var calculatedValue4 = msg[paramValue+'_'+i] / 100;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue4;
                            break;
                        case 'TT03- SURGE VESSEL TEMP' :
                            var calculatedValue5 = msg[paramValue+'_'+i] / 100;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue5;
                            break;
                        case 'FMT01- INLET FLOW' :
                            var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = 1.5;
                            var OUT_MAX = 107.9;
                            // Applying the formula for PT01
                            var calculatedValue6 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue6;
                            break; 
                        case 'FMT02- OUTLET FLOW' :
                            var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = 1.5;
                            var OUT_MAX = 107.9;
                            // Applying the formula for PT01
                            var calculatedValue7 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue7;
                            break;     
                        case 'DEW POINT INLET' :
                            var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = -101;
                            var OUT_MAX = +0;
                            // Applying the formula for PT01
                            var calculatedValue8 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue8;
                            break;
                        case 'DEW POINT OUTPUT' :
                             var IN = msg[paramValue+'_'+i]; // Raw value
                            var IN_MIN = 0;
                            var IN_MAX = 27648;
                            var OUT_MIN = -101;
                            var OUT_MAX = +0;
                            // Applying the formula for PT01
                            var calculatedValue9 = (IN - IN_MIN) * ((OUT_MAX - OUT_MIN) / (IN_MAX - IN_MIN)) + OUT_MIN;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue9;
                            break;
                        case 'CH4-INLET' :
                            var calculatedValue10 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue10;
                            break;
                        case 'CO2-INLET' :
                            var calculatedValue11 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue11;
                            break;
                        case 'O2-INLET' :
                            var calculatedValue11 = msg[paramValue+'_'+i] / 100;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue11;
                            break;
                        case 'N2-INLET' :
                            var calculatedValue12 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue12;
                            break;
                        case 'CH4- OUTLET' :
                            var calculatedValue13 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue13;
                            break;
                        case 'CO2- OUTLET' :
                            var calculatedValue14 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue14;
                            break;
                        case 'O2-OUTLET' :
                            var calculatedValue15 = msg[paramValue+'_'+i] / 100;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue15;
                            break;

                           
                        
                        
                        case 'N2-OUTLET' :
                            var calculatedValue16 = msg[paramValue+'_'+i] / 10;
                            msg[mappingData[i]['DESCRIPTION']] = calculatedValue16;
                            break;
                            default:
            // For descriptions with no specific formula, assign raw value
            msg[mappingData[i]['DESCRIPTION']] = msg[paramValue+'_'+i];
                }
            }
    
        }
        //break;
      
    }  