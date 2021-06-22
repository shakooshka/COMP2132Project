const minArraySize = 2;

function makeListFromArray(array, listStyle){
    if(Array.isArray(array) && array.length > 1 && (listStyle == null || listStyle == "ul")){
        let ulist = '<ul>';
            array.forEach(function(item){
                ulist += `<li>${item}</li>`;
            });
        ulist += '</ul>';
        return ulist;
    }else if(!Array.isArray(array)){
        return "<p>Error: This function requires an array</p>";
    }else if(Array.isArray(array) && array.length < minArraySize){
        return "<p>Error: Array must contain at least two items or more</p>";
    }else if(Array.isArray(array) && array.length > 1 && listStyle == "ol"){
        let olist = '<ol>';
            array.forEach(function(item){
                olist += `<li>${item}</li>`;
            });
        olist += '</ol>';
        return olist;
    }else if(Array.isArray(array) && array.length > 1 && (listStyle != "ol" || listStyle != "ul" || listStyle !== "")){
        return `<p>Error: In HTML only UL or OL lists can be mande. There is no ${listStyle} list elements</p>`;
    }else{
        return "<p>no bueno</p>";
    };
};

