var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata=JSON.parse(this.response);
    //console.log(countrydata);

var asiaContinentCountries=countrydata.filter(item=>item.region==='Asia');
    console.log (asiaContinentCountries);

var countriesPopulationLessThan2Lacs=countrydata.filter((item,index)=>item.population<200000);
    console.log (countriesPopulationLessThan2Lacs);

countrydata.forEach(element => {
    console.log('Country name is: '+element.name+' Capital is: '+element.capital+' Flag url is: '+element.flag);
});

var totalPopulationAcrossWorld=countrydata.reduce(function(previousValue,value,index){
    return previousValue+value.population;
    //previousValue=parseInt(previousValue)+parseInt(value.population);
    
},0);
console.log('Total population across world is: '+totalPopulationAcrossWorld);


countrydata.forEach((ele)=>{
    //console.log(ele)
        if(ele.currencies[0].name==='United States dollar'){
            console.log(ele)  
    } 
});


}
