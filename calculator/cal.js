 

let display="";

Array.from( document.querySelectorAll('.button') ).forEach((button)=>{

    button.addEventListener('click', (event) => {

        if(event.target.innerHTML == 'Clear'){                                    /* To clear the value */

          display=" ";
          document.getElementById('input').value = " ";

        }
          
        else if( event.target.innerHTML == '=' ) {                           /* to compute value*/
            
                try{
                const computation = eval(document.getElementById('input').value);

                document.getElementById('input').value = display +"             = "+ computation;

            }catch(error){
          
               document.getElementById('input').value = " Error ";
           }
        }

        else{                                                                /* to display values */

        display=document.getElementById('input').value;

        display = display + event.target.innerHTML;

        document.getElementById('input').value = display;
            }
    })
})


