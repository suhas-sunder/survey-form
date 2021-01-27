var idList_input = ["slider_1", "slider_2", "slider_3", "slider_4"]; //Id list for slider input
var idList_output = ["slider-out_1", "slider-out_2", "slider-out_3", "slider-out_4"]; //Id list for slider output
var idList_checkbox = ["painting-checkbox", "photography-checkbox", "art-checkbox", "drawing-checkbox"]; //Id list for product checkbox
var checkbox = new Array(), input_value = new Array(), output_value = new Array(); //Initialize empty arrays
var slider_section, classList_slider;
var temp = 0;

//Display output value for sliders
function getValue(){
    var i;
    var j;    

    for(i=0; i < idList_input.length; i++){           
        //Assign each id element to an Array
        input_value[i] = document.getElementById(idList_input[i]);  
        output_value[i] = document.getElementById(idList_output[i]);   

        output_value[i].innerHTML = input_value[i].value; //Set the initial value of output equal to input

        //Add an event listener to each id element and update value on slider
        input_value[i].addEventListener('input', function () {            
            for(j=0; j < idList_input.length; j++){
                output_value[j].innerHTML = input_value[j].value; //Set the initial value of output equal to input
            }
        }, false);                                 
    }    
} 

getValue();

//Hide or display sliders
function checkboxListen() {
    var i;
    var j;
    classList_slider = document.getElementsByClassName("slider-cointainer"); 
    slider_section = document.getElementById("slider-block"); 
        
    //Display slider according to the specific product item that was selected
    for(i=0; i < idList_checkbox.length; i++){   

        //Assign each id element to an Array
        checkbox[i] = document.getElementById(idList_checkbox[i]);    
          
        classList_slider[i].style.display = "none"; //Hide all sliders       
             
        checkbox[i].addEventListener('change', function() {  
            for(j=0; j < idList_checkbox.length; j++){                 
                //Check if product id matches slider id and hide or show slider accordingly          
                if(this.id == checkbox[j].id){                    
                    if (checkbox[j].checked == true) {
                        temp++;
                        slider_section.style.display = "block"; //Display slider block
                        classList_slider[j].style.display = "block"; //Show selected section
                    } else {
                        temp--;
                        classList_slider[j].style.display = "none"; //Hide all sliders                  
                    }                      
                    counter(); 
                }                          
            }            
        }, false);                              
    }
    boxChecked ();
}

checkboxListen();

//Hide all slider elements    
function counter (){
    if(temp == 0){
        slider_section.style.display = "none"; 
    }    
}

//This function turns on the first product checkbox. Normally I would not use this function but in order to showcase the slider functionality, I have added this here.
function boxChecked (){
    checkbox[0].checked = true; //Set fist product checkbox to checked
    classList_slider[0].style.display = "block"; //Display first slider
    temp++;
}
