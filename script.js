const earningbtn=document.querySelector('.earnings');
const expensebtn= document.querySelector('.expenses');

const descriptionVal= document.querySelector('.desc');
const amountVal= document.querySelector('#amount');

const earnBtnVal= document.querySelector('.earn-amt-desc');
const expBtnVal= document.querySelector('.exp-amt-desc');

const listItems= document.querySelector('.list-items');
const balanceVal= document.querySelector('.balance-amt');

const earnSpan= document.querySelector('.earn-amt-desc');
const expenseSpan= document.querySelector('.exp-amt-desc');

let earnBtnBal= Number(earnSpan.innerHTML.slice(2));
let expBtnBal= Number(expenseSpan.innerHTML.slice(2));


// amountVal.addEventListener('keyup',(e)=>{
//     console.log(e.target.value)

// })



// console.log(earningbtn,expensebtn,descriptionVal,amountVal.value,listItems,balanceVal);
// console.log(Number(balanceVal.innerHTML))

// if(descriptionVal.value=='' || amountVal.value){

// }
// else{
   

// }



earningbtn.addEventListener('click',()=>{
    const str1='Add'
    calculate(str1);


    console.log(earnBtnBal)

})


expensebtn.addEventListener('click',()=>{
    const str2='Sub'
    calculate(str2)
})



function calculate(op){
    const description= descriptionVal.value;
    const amount= Number(amountVal.value);
    let balance = Number(balanceVal.innerHTML);


    if(op=='Add'){
        const add= balance + amount;
        balanceVal.innerHTML= add;
        // earnSpan.innerHTML=;

        earnSpan.innerHTML=earnBtnBal +amount ;
        earnBtnBal=amount;

        itemsCreate('+');


        
    }
    else{
        const subtract = balance - amount;
        balanceVal.innerHTML= subtract;

        expenseSpan.innerHTML=expBtnBal +amount ;
        expBtnBal=amount;

        itemsCreate('-');

    }


    // earnBtnVal.innerHTML= amount;

    function itemsCreate(operator){

        if(description=='' || amount==''){
            // alert('Enter the description and amount value')
        }
        else{

            const li= document.createElement('li');
            const iconContainer= document.createElement('div');
            const deleteIcon= document.createElement('img');
            const editIcon= document.createElement('img');

            li.innerHTML=`
                <div class="content">
                    <span class="text-desc"> ${description}</span>
                    <span class="text-amt">${operator}${amount}</span>
                </div>`;
                
                editIcon.src='./icons/pen.svg';
                deleteIcon.src='./icons/trash.svg';

                iconContainer.classList.add('icon-container')
                
                iconContainer.appendChild(editIcon);
                iconContainer.appendChild(deleteIcon);

                li.appendChild(iconContainer)
                listItems.appendChild(li);


                li.addEventListener('click',()=>{
                    li.classList.toggle('open')
                })

                

                deleteIcon.addEventListener('click',(e)=>{
                
                    iconContainer.parentElement.remove();
                    itemDelete();
                  

                })


                 //Update the balance amt when editing, requires the original amount to be cleared from the balance and the edited amt to be added;
                // Check on the btn on which it has been clicked;

                let descriptionValInput= descriptionVal.value;
                let amountValInput= amountVal.value;

                editIcon.addEventListener('click',(e)=>{

                    console.log(e)

                    // var clickCheck='Not_OK';
                    descriptionVal.value= description;
                    amountVal.value= amount;

                    const originalDesc= descriptionValInput;
                    const originalAmt= Number(amountValInput);

                    // console.log('Original amount:',originalDesc,originalAmt);



                    if(descriptionVal.value==''  || amountVal.value==''){

                    }
                    else{

                        earningbtn.addEventListener('click',()=>{
    
                            let op='+';
    
                            console.log('Edits earn btn');

                            
                                
                            // listDeleteEdit(originalDesc,originalAmt,op);
                            
                            
                        })
                       


                        expensebtn.addEventListener('click',()=>{
                            let op='-'
                            listDeleteEdit(originalDesc,originalAmt,op)
                            console.log('Edits expense btn')
                        })

                    }

                

                })
            


                
                function listDeleteEdit(desc,amt,operator){
                            const editdesc= descriptionVal.value;
                            const editamt= Number(amountVal.value);
                    

                            // console.log('Original description and amount:',desc,amt)

    
                            iconContainer.parentElement.remove();
                            // itemDelete();

                           

    
                            li.innerHTML=`
                            <div class="content">
                                <span class="text-desc"> ${descriptionVal.value}</span>
                                <span class="text-amt">${operator}${amountVal.value}</span>
                            </div>`;
    
                            // editIcon.src='./icons/pen.svg';
                            deleteIcon.src='./icons/trash.svg';
            
                            iconContainer.classList.add('icon-container');
                            // iconContainer.appendChild(editIcon);
                            iconContainer.appendChild(deleteIcon);
    
                            li.appendChild(iconContainer);

                            const contentDesc= document.querySelector('.text-desc').innerHTML;
                            const contentAmt= document.querySelectorAll('.text-amt');
                            
                            
                            // .innerHTML.slice(1)
                            console.log(Number(contentAmt[contentAmt.length-1].innerHTML.slice(1)));

                            const finalAmt= Number(contentAmt[contentAmt.length-1].innerHTML.slice(1))

                            update(finalAmt,operator);
                            
                        }


                        function update(contentAmt,op){
                            if(op=='+'){

                                // console.log(contentAmt)
                                balance= Number(balanceVal.innerHTML);
                                console.log(balance)

                                // const calcAmt= contentAmt - amount;                                
                                // console.log(contentAmt,amount);

                                // console.log(calcAmt);

                                balance=balance- amount;

                                balance= balance-contentAmt;

                                const actualBal= balance + contentAmt;
                                console.log('Actual balance from edit:',balance,contentAmt,actualBal);

                                balanceVal.innerHTML= actualBal

                                

                                
                                // const optimizeBalance= balance - amount;
                                // balanceVal.innerHTML = optimizeBalance + calcAmt;

                                // console.log(optimizeBalance,calcAmt,optimizeBalance+calcAmt)
                            }
                        }

                        
                function itemDelete(){
                    // console.log('Item deleted name',description,amount,balance,operator)    

                    if(operator =='+'){
                       balance= Number(balanceVal.innerHTML);
                       balanceVal.innerHTML = balance - amount;

                       console.log('items deleted on edit')
                    }
                    else if(operator =='-'){
                        balance= Number(balanceVal.innerHTML);
                        balanceVal.innerHTML = balance + amount;
                        console.log('items deleted on edit')
                    }
                    else{
                        console.log('Something went wrong!')
                    }
                }


                        





































































               
                // editIcon.addEventListener('click',(e)=>{
                //     descriptionVal.value = description;
                //     amountVal.value= amount;

                //     const originalDesc= description;
                //     const originalAmt= amount;

                //     console.log(originalDesc,originalAmt)


                //     earningbtn.addEventListener('click',(e)=>{

                //         const newamt= Number(amountVal.value);

                //         console.log(newamt)


                //         const message = 0
                //         listDeleteEdit();

                //         balance=Number(balanceVal.innerHTML);

                //         console.log(balance,amount)

                //     });

                //     expensebtn.addEventListener('click',()=>{

                //         const message= 1 
                //         console.log('expense btn working in edit btn');

                //         listDeleteEdit();

                //         updateBalance(description,amount)

                //     });






                //     function listDeleteEdit(){
                //         const editdesc= descriptionVal.value;
                //         const editamt= amountVal.value;


                //         iconContainer.parentElement.remove();
                //         // itemDelete();

                //         li.innerHTML=`
                //         <div class="content">
                //             <span class="text-desc"> ${editdesc}</span>
                //             <span class="text-amt">${operator}${editamt}</span>
                //         </div>`;

                //         editIcon.src='./icons/pen.svg';
                //         deleteIcon.src='./icons/trash.svg';
        
                //         iconContainer.classList.add('icon-container');
                //         iconContainer.appendChild(editIcon);
                //         iconContainer.appendChild(deleteIcon);

                //         li.appendChild(iconContainer);
                        
                //     }
                    


                    

                   


                // });

                // function updateBalance(editName,editAmount){

                //     console.log(editName,editAmount);
                //     console.log('function works')

                // }

                // function itemUpdate(mes){

                //     if(mes==1){
                //         balance= Number(balanceVal.innerHTML);
                //         const updateAmt= balance - 

                //         console.log('expense btn')
                //     }
                //     else{
                //         console.log(balance.value)
                //         console.log('earn btn')
                //     }



                //     console.log('update item')
                // }

               








            

                
            //     <div class="icon-container">
            //     <img src="./icons/pen.svg" class='edit' alt="" />
            //     <img src="./icons/trash.svg" class='delete-btn' alt="" />
            // </div>

            

            // const listWrapper= document.querySelector('.li-wrapper')
            // const deleteBtn= document.querySelector('.delete-btn');

            // let counter=0;
            // li.addEventListener('click',()=>{
               
            //         li.classList.toggle('open')
            
            // })

            // // li.addEventListener('click',()=>{
                
            // // })

            // const iconContainer= document.querySelector('.icon-container');
            
            // deleteBtn.addEventListener('click',()=> {
            //     deleteBtn.parentElement.remove()
            // });
            
            // // li.innerHTML=description; 
            // // span.innerHTML= `${operator}Rs. ${amount}`;
        
            

        }
        
    }


    

    amountVal.value='';
    descriptionVal.value=''
}
        // if(counter==0){
        //     li.classList.toggle(open)
        //     li.style.height='60px'
        //     li.style.backgroundColor='red';
        //     li.style.color='white';
        //     counter=1;
        //     console.log('counter value is one')

        // }
        // else{
        //     li.style.height='auto'
        //     li.style.backgroundColor='white';
        //     li.style.color='red';
        //     counter=0;
        //     console.log('counter value is zero')

        // }













        
        
