// Case Convert
// Write a function caseConvert that accepts two arguements. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.

function caseConvert(str, conversionType){
	if(Array.isArray(str)){
		str = str.join(' ');
	}
	if(conversionType == "camelcase"){
		convertedStr = str.toLowerCase().replace(/\s\w/g, function(x){return x[1].toUpperCase();});
		return convertedStr;
	}else if(conversionType == "snakecase"){
		convertedStr = str.replace(/\s/g, '-')
		return convertedStr.toLowerCase();
	}else{
		throw new Error("you entered an invalid conversion type");
	}
}

