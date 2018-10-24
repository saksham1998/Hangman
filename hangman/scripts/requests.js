const getPuzzle = async (wordCount)=>{
	const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

	if(response.status===200){
		 const data = await response.json();
		 return data.puzzle
	}else{
		throw new Error('Something Happend')
	}
}

const getCurrentCountry = async () =>{
	 const response =  await fetch(`//ipinfo.io/json?token=9191911814117f`)

	 if(response.status===200){
		const data = await response.json();
		const res = await fetch('//restcountries.eu/rest/v2/all')

     if(res.status===200){
    	const country = await res.json();
    	return country.find((country) => country.alpha2Code === data.country).name
     }else{
    	throw new new Error('Something Happend')
    	}	
	 }else{
    	throw new new Error('Something Happend')
    }	
}