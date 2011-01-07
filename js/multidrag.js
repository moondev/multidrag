//remove first dummy item off array
multidrags.shift();
  
// Replaces all instances of the given substring.
String.prototype.replaceAll = function( 
	strTarget, // The substring you want to replace
	strSubString // The string you want to replace in.
	){
	var strText = this;
	var intIndexOfMatch = strText.indexOf( strTarget );
	 
	// Keep looping while an instance of the target string
	// still exists in the string.
	while (intIndexOfMatch != -1){
		// Relace out the current instance.
		strText = strText.replace( strTarget, strSubString )
		 
		// Get the index of any next matching substring.
		intIndexOfMatch = strText.indexOf( strTarget );
	}
	 
	// Return the updated string with ALL the target strings
	// replaced out with the new substring.
	return( strText );
}
  
  
  
  
  if(true){
  
  $ = jQuery;
  nodelist = [];
  $(window).load(function(){

   makeDrops();
   
     $(document).ajaxStop(function() {
   updateDrops();
  });
    
  });
  
  
   function updateDrops(){
  	
    	for(var dragitem in multidrags){
   	
   	nodesurl = multidrags[dragitem];
   	
   	  
  $('#' + multidrags[dragitem] + '_values').find("input.form-autocomplete").each(function(){
  
  fval = $(this).attr('value');
  
  fid = $(this).attr('id');
  fclass = $(this).attr('class');
  fname = $(this).attr('name');
  
  dropdown = '<select id="' + fid + '" class="' + fclass + '" name="' + fname + '">';
  dropdown = dropdown + '<option value="">--Empty--</option>';
  
  if(fval != ''){
   
   	for(var prop in nodelist[nodesurl]){
   	isSelected = '';
   	
   	if(prop == fval){
   	isSelected = ' selected ';
   	}
   	
	dropdown = dropdown + '<option' + isSelected + ' value="' + prop + '">' + prop.split('[')[0] + '</option>';
	} 
  
  }else{
    for(var prop in nodelist[nodesurl]){	
	dropdown = dropdown + '<option' + ' value="' + prop + '">' + prop.split('[')[0] + '</option>';
	}  
  }
  
  
  dropdown = dropdown + '</select>';
  
  $(this).replaceWith(dropdown);

  
  });
  

  
  }  
  }
  
  
  function makeDrops(){
  	
  	
  	for(var dragitem in multidrags){
  	
  	
  	$.ajax({ url: "/getdragnodes/" + multidrags[dragitem]
  	, async: false
  	, dataType: "json"
  	, success: function(data){
  	
   	
   	nodesurl = multidrags[dragitem];
   	nodelist[nodesurl] = data;
   	
   	  
  $('#' + multidrags[dragitem] + '_values').find("input.form-autocomplete").each(function(){
  
  fval = $(this).attr('value');
  
  fid = $(this).attr('id');
  fclass = $(this).attr('class');
  fname = $(this).attr('name');
  
  dropdown = '<select id="' + fid + '" class="' + fclass + '" name="' + fname + '">';
  dropdown = dropdown + '<option value="">--Empty--</option>';
  
  if(fval != ''){
   
   	for(var prop in nodelist[nodesurl]){
   	isSelected = '';
   	
   	if(prop == fval){
   	isSelected = ' selected ';
   	}
   	
	dropdown = dropdown + '<option' + isSelected + ' value="' + prop + '">' + prop.split('[')[0] + '</option>';
	} 
  
  }else{
    for(var prop in nodelist[nodesurl]){	
	dropdown = dropdown + '<option' + ' value="' + prop + '">' + prop.split('[')[0] + '</option>';
	}  
  }
  
  
  dropdown = dropdown + '</select>';
  
  $(this).replaceWith(dropdown);

  
  });
 }});  
  
  }
  
  }
  
  }
