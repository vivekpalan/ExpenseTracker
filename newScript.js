const earningbtn=document.querySelector('.earnings');
const expensebtn= document.querySelector('.expenses');

const descriptionVal= document.querySelector('.desc');
const amountVal= document.querySelector('#amount');

const earnBtnVal= document.querySelector('.earn-amt-desc');
const expBtnVal= document.querySelector('.exp-amt-desc');

const listItems= document.querySelector('.list-items');
const balanceVal= document.querySelector('.balance-amt');


let earnValue = Number(earnBtnVal.innerHTML);
let expenseValue = Number(expBtnVal.innerHTML);

let add=0;


// console.log(earningbtn,expensebtn,descriptionVal,amountVal,earnBtnVal,expBtnVal,listItems,balanceVal)

console.log(earnValue,expenseValue);






earningbtn.addEventListener('click',()=>{
    if(descriptionVal.value=='' || amountVal.value==''){
        alert('Please Enter the values!')
    }
    else{
        let earnValue = Number(earnBtnVal.innerHTML);
        const description= descriptionVal.value;
        const amount= Number(amountVal.value);
        let balance=Number(balanceVal.innerHTML);

        let calculatedVal= earnValue + amount;
        
        earnBtnVal.innerHTML = calculatedVal;
        earnValue=calculatedVal;

        console.log(earnValue)

        // add += amount;
        // console.log(add)
        balanceVal.innerHTML = balance + amount
        // balanceVal.innerHTML = Number(add);  //One major error here when deleting the list item

        const operator = '+'

        const li= document.createElement('li');
        const iconContainer= document.createElement('div');
        const deleteIcon= document.createElement('img');
        // const editIcon= document.createElement('img');
    
        li.innerHTML=`
                <div class="text__content flex">
                    <h4 class="text-desc"> ${description}</h4>
                    <h4 class="text-amt">${operator}${amount}</h4>
                </div>`;

           
           
            
            // editIcon.src='./icons/pen.svg';
            deleteIcon.src='./icons/trash.svg';
            deleteIcon.classList.add('.delete__icon')
    
            iconContainer.classList.add('icon-container')
            
            // iconContainer.appendChild(editIcon);
            iconContainer.appendChild(deleteIcon);
    
            li.appendChild(iconContainer)
            listItems.appendChild(li);
            li.classList.add('flex-column')

            li.addEventListener('click',()=>{
                li.classList.toggle('open')
            })

            deleteIcon.addEventListener('click',()=>{
                let amt = amount

                earnValue = Number(earnBtnVal.innerHTML)
                
                const calc = earnValue - amt;
                console.log(amt)
                earnBtnVal.innerHTML= calc;



                iconContainer.parentElement.remove();
                balance = Number(balanceVal.innerHTML);
                balanceVal.innerHTML = balance - amt;

                earnValue = balance - amt
            })



            // function update(){

            //     if(earnValue < expenseValue){
            //         balanceVal.innerHTML = earnValue - expenseValue

            //     }
            //     else{
            //         balanceVal.innerHTML = expenseValue - earnValue
            //     }
            // }


            // editIcon.addEventListener('click',
            //     function editFunc(newAmount, prevAmount) {
            //         const difference = newAmount - prevAmount;
                
            //         balanceVal.innerHTML = Number(balanceVal.innerHTML) + difference;
                
            //         if (earnValue < expenseValue) {
            //             earnValue = earnValue - prevAmount + newAmount;
            //             earnBtnVal.innerHTML = earnValue;
            //         } else {
            //             expenseValue = expenseValue + prevAmount - newAmount;
            //             expBtnVal.innerHTML = expenseValue;
            //         }
            //     }
            // )

            // editIcon.addEventListener('click',()=>{
    
            //     earnValue-= amount
    
            //     descriptionVal.value= description;
            //     amountVal.value= amount;
    
            //     const prevAmount = amount;
    
        

            //     earningbtn.classList.add('second')

            //     expensebtn.style.display ='none';
            //     earningbtn.style.transform = 'translateX(40%)'
            //     earningbtn.style.transition = '0.2s transform linear'
    
            //     let counter=1;
            //     earningbtn.addEventListener('click',(e)=>{
    
            //         if(counter==1){

            //             expensebtn.style.display ='block';
            //             earningbtn.style.transform = 'translateX(0%)'
                        

            //             iconContainer.parentElement.remove();
            //             counter=0;
    
            //             const findNewAmount = document.querySelectorAll('.text-amt')
            //             const liLength= findNewAmount.length;
                        
    
            //             const newAmount = Number(findNewAmount[liLength-1].innerHTML.slice(1));
    

            //             if(newAmount < prevAmount){
            //                 let difference = prevAmount - newAmount;
            //                 balance = balanceVal.innerHTML;

            //                 if(balance > 0 && balance > difference){
            //                     balanceVal.innerHTML = earnValue - expenseValue
            //                 }

            //             }


            //             // if(newAmount<prevAmount){
            //             //     if(earnValue<expenseValue){
            //             //         balanceVal.innerHTML = expenseValue - earnValue

            //             //     }
            //             //     else{
            //             //         balanceVal.innerHTML = earnValue - expenseValue
            //             //     }
    
            //             //     balance=Number(balanceVal.innerHTML);
                            
            //             // }
            //             // else{
            //             //     if(earnValue<expenseValue){
            //             //         balanceVal.innerHTML = expenseValue - earnValue

            //             //     }
            //             //     else{
            //             //         balanceVal.innerHTML = earnValue - expenseValue
            //             //     }
                            
            //             //     balance=Number(balanceVal.innerHTML);
            //             //     let difference = newAmount - prevAmount;
            //             //     // balanceVal.innerHTML = balance + difference;
            //             //     // balanceVal.innerHTML = earnValue - expenseValue
            //             // }
    
            //         }
            //         else{
            //             // console.log('else condition')
            //         }
                   
    
            //     })
    
    
              
    
            // })
       
    }
    descriptionVal.value = '';
    amountVal.value = ''
})



expensebtn.addEventListener('click',()=>{
    
    if(descriptionVal.value=='' || amountVal.value==''){
        alert('Please Enter the values!')
    }
    else{
        const description= descriptionVal.value;
        let expenseValue = Number(expBtnVal.innerHTML);
        const amount= Number(amountVal.value);
        let balance=Number(balanceVal.innerHTML);

        let calculatedVal= expenseValue - amount;
        
        expBtnVal.innerHTML=calculatedVal;
        expenseValue=calculatedVal;

        balanceVal.innerHTML = balance - amount
    
        const operator = '-'
        const li= document.createElement('li');
        const iconContainer= document.createElement('div');
        const deleteIcon= document.createElement('img');
        // const editIcon= document.createElement('img');
    
        li.innerHTML=`
             <div class="text__content flex">
                    <h4 class="text-desc"> ${description}</h4>
                    <h4 class="text-amt">${operator}${amount}</h4>
                </div>`;
            
            // editIcon.src='./icons/pen.svg';
            deleteIcon.src='./icons/trash.svg';
            deleteIcon.classList.add('.delete__icon')
    
            iconContainer.classList.add('icon-container')
            
            // iconContainer.appendChild(editIcon);
            iconContainer.appendChild(deleteIcon);
    
            li.appendChild(iconContainer)
            listItems.appendChild(li);
    
    
            li.addEventListener('click',()=>{
                li.classList.toggle('open')
            })
            li.classList.add('flex-column')
    
    
            // Balance code here
    
            deleteIcon.addEventListener('click',()=>{


                let amt = amount
                expenseValue = Number(expBtnVal.innerHTML)
                
                const calc = expenseValue + amt;
                console.log(amount)
                expBtnVal.innerHTML= calc;



                iconContainer.parentElement.remove();
                balance = Number(balanceVal.innerHTML);
                balanceVal.innerHTML = balance + amt;

                expenseValue = balance + amt
            })





            


            // editIcon.addEventListener('click',()=>{
            //     descriptionVal.value= description;
            //         amountVal.value= amount;

            //     expensebtn.addEventListener('click',()=>{

            //         iconContainer.parentElement.remove();
            //         const findNewAmount = document.querySelectorAll('.text-amt')

            //         const newAmount = -(Number(findNewAmount[liLength-1].innerHTML.slice(1)))
            //         const prevAmount = -(amount)

            //         editFunc(newAmount,prevAmount)
            //     })

                

            // })

            // function editFunc(newAmount, prevAmount) {
            //     const initialBalance = Number(balanceVal.innerHTML);
            //     const difference = newAmount - prevAmount;
            
            //     balanceVal.innerHTML = initialBalance - Math.abs(difference);
            // }


            // editIcon.addEventListener('click', () => {
            //     const prevAmount = amount;
            
            //     descriptionVal.value = description;
            //     amountVal.value = amount;
            
            //     expensebtn.classList.add('second');
            
            //     earningbtn.style.display = 'none';
            //     expensebtn.style.transform = 'translateX(100px)'
            //     expensebtn.style.transition = '0.2s transform linear'
            
            //     let counter = 1;
            //     expensebtn.addEventListener('click', (e) => {
            
            //         earningbtn.style.display = 'block'
            //         expensebtn.style.transform = 'translateX(0px)'
            
            //         counter = 0;
            
            //         iconContainer.parentElement.remove();
            //         const findNewAmount = document.querySelectorAll('.text-amt')
            //         const liLength = findNewAmount.length;
            
            //         const newAmount = -(Number(findNewAmount[liLength - 1].innerHTML.slice(1)));
            
            //         const difference = newAmount - prevAmount;
            
            //         balanceVal.innerHTML = Number(balanceVal.innerHTML) + difference;
            
            //         if (earnValue < expenseValue) {
            //             expenseValue = expenseValue - prevAmount + newAmount;
            //             expBtnVal.innerHTML = expenseValue;
            //         } else {
            //             earnValue = earnValue + prevAmount - newAmount;
            //             earnBtnVal.innerHTML = earnValue;
            //         }
            //     })
            // })

          
            // editIcon.addEventListener('click',()=>{

            //     expenseValue+=amount;
            //     console.log(expenseValue)

    
            //     descriptionVal.value= description;
            //     amountVal.value= amount;
    
            //     const prevAmount = -(amount);
            //     console.log(prevAmount)

            //     //To check whether new amount is greater than previous amount
            //     //To check if the balance is positive or negative
            //     //Set the operation accordingly
    
    
            //     expensebtn.classList.add('second');

            //     earningbtn.style.display ='none';
            //     expensebtn.style.transform = 'translateX(100px)'
            //     expensebtn.style.transition = '0.2s transform linear'
    
            //     let counter=1;
            //     expensebtn.addEventListener('click',(e)=>{

            //         earningbtn.style.display = 'block'
            //         expensebtn.style.transform = 'translateX(0px)'

                    
            //             counter=0;
    
            //             iconContainer.parentElement.remove();
            //             const findNewAmount = document.querySelectorAll('.text-amt')
            //             const liLength= findNewAmount.length;
                        
    
            //             const newAmount = -(Number(findNewAmount[liLength-1].innerHTML.slice(1)));

                        
            //             earningbtn.style.display = 'block'
            //             expensebtn.style.transform = 'translateX(0px)'

            //             if(newAmount<prevAmount){
            //                 let difference = prevAmount - (-newAmount);

            //                 balance = balanceVal.innerHTML;

            //                 if(balance < 0 && balance < difference){
            //                     const editAmount = difference - balance
            //                     console.log(editAmount)
                                
            //                     balanceVal.innerHTML = expenseValue - earnValue;

            //                 }


            //             }




                    
                    


            //         if(newAmount<prevAmount){
    
    
            //             ////// We need to check whether the balance is positive or negative inorder to update the balance properly

            //             // if(balance<0){
            //             //     balance=Number(balanceVal.innerHTML);
                            
            //             //     balance -= prevAmount;

            //             //     balanceVal.innerHTML = balance
                            

            //             // }

                        
            //             // balance=Number(balanceVal.innerHTML);

            //             // if(balance<0){

            //             //     console.log( expenseValue - earnValue )
                           
            //             //     console.log('Balance was negative')
            //             //     if(earnValue<expenseValue){
            //             //         console.log(balance)
            //             //         let editBal = balance - prevAmount

            //             //         console.log(editBal)
            //             //         balanceVal.innerHTML = expenseValue - earnValue
            //             //         // balanceVal.innerHTML = prevAmount

            //             //     }
            //             //     else{
            //             //         // balanceVal.innerHTML = earnValue - expenseValue
            //             //     }

            //             //     // let difference = prevAmount - (newAmount);

            //             //     // console.log(prevAmount - (newAmount))
    
            //             //     // balanceVal.innerHTML = balance - difference;
            //             //     // balanceVal.innerHTML = expenseValue + earnValue
            //             // }
            //             // else{

            //             //     console.log(earnValue - expenseValue)
            //             //     // console.log('Balance was positive')
            //             //     // if(earnValue<expenseValue){
            //             //     //     balanceVal.innerHTML = expenseValue - earnValue

            //             //     // }
            //             //     // else{
            //             //     //     balanceVal.innerHTML = earnValue - expenseValue
            //             //     // }
            //             //     // let difference = prevAmount - (newAmount);
                            
            //             //     // console.log(prevAmount - (newAmount))
                            
            //             //     // balanceVal.innerHTML = balance - difference;
            //             //     balanceVal.innerHTML = expenseValue + earnValue

            //             // }
                        
                       
                        
            //         // }
            //         // else{
            //         //     balance=Number(balanceVal.innerHTML);

            //         //     if(balance>0){

            //         //         console.log(earnValue - expenseValue)
            //         //         // let difference = newAmount - (prevAmount);
    
            //         //         // console.log(difference)
            //         //         // // balanceVal.innerHTML = balance + difference;
            //         //         balanceVal.innerHTML = expenseValue + earnValue

            //         //     }
            //         //     else{

            //         //         console.log(expenseValue - earnValue)
            //         //         let difference = newAmount - (prevAmount);
    
            //         //         console.log(difference)
            //         //         // balanceVal.innerHTML = balance + difference;
            //         //         balanceVal.innerHTML = expenseValue - earnValue

            //         //     }
            //         }




    
            //         // if(counter==1){
    
            //         //     iconContainer.parentElement.remove();
            //         //     counter=0;
    
            //         //     const findNewAmount = document.querySelectorAll('.text-amt')
            //         //     const liLength= findNewAmount.length;
                        
    
            //         //     const newAmount = -(Number(findNewAmount[liLength-1].innerHTML.slice(1)));
    


            //         //     if(newAmount<prevAmount){
            //         //         if(earnValue<expenseValue){
            //         //             console.log(expenseValue - earnValue)
            //         //             balanceVal.innerHTML = expenseValue - earnValue
            //         //             console.log('postive greater')

            //         //         }
            //         //         else{
            //         //             console.log(earnValue,expenseValue)
            //         //             console.log(earnValue - expenseValue)
            //         //             balanceVal.innerHTML = earnValue - expenseValue
            //         //             console.log('negative is greater')
            //         //         }
    
            //         //         balance=Number(balanceVal.innerHTML);
                            
            //         //     }
            //         //     else{
            //         //         if(earnValue<expenseValue){
            //         //             balanceVal.innerHTML = expenseValue - earnValue
            //         //             console.log('postive is greater')

            //         //         }
            //         //         else{
            //         //             balanceVal.innerHTML = earnValue - expenseValue
            //         //             console.log('negative is greater')
            //         //         }
                            
            //         //         balance=Number(balanceVal.innerHTML);
            //         //         let difference = newAmount - prevAmount;
            //         //         // balanceVal.innerHTML = balance + difference;
            //         //         // balanceVal.innerHTML = earnValue - expenseValue
            //         //     }
    
            //         //     // if(newAmount<prevAmount){
    
    
            //         //     //     balance=Number(balanceVal.innerHTML);

            //         //     //     if(balance<0){
            //         //     //         if(earnValue<expenseValue){
            //         //     //            balanceVal.innerHTML = expenseValue - earnValue
        
            //         //     //         }
            //         //     //         else{
            //         //     //             balanceVal.innerHTML = earnValue - expenseValue
            //         //     //         }

            //         //     //     }
            //         //     //     else{
            //         //     //         if(earnValue<expenseValue){
            //         //     //             balanceVal.innerHTML = expenseValue - earnValue
        
            //         //     //         }
            //         //     //         else{
            //         //     //             balanceVal.innerHTML = earnValue - expenseValue
            //         //     //         }

            //         //     //     }
                                
            //         //     // }
            //         //     // else{
            //         //     //     balance=Number(balanceVal.innerHTML);
    
            //         //     //     if(balance>0){
            //         //     //         balanceVal.innerHTML = expenseValue + earnValue

            //         //     //     }
            //         //     //     else{
            //         //     //         balanceVal.innerHTML = expenseValue - earnValue

            //         //     //     }
            //         //     // }
    
            //         // }
            //         // else{
                        
            //         // }
                   
    
                
                       

                   
    
            //     })
            // })
            
            descriptionVal.value='';
            amountVal.value='';
    }
})





// Notes

// Taking two btn as earning and expenses: onclicking should take in the amount in the list and update the balance

// Deleting and Editing btn provided to each eventListener

// When clicking on the delete main balance and btnValue gets updated

// For editing: It contains earn and expense btn eventListener; which thus conflict with the main listeners created on those btn
// So create a counter variable to only execute the listener inside the edit icon once along with updating the balance; it is done
// by assigning the counter variable to 1 and executing the condition and again the variable changed to 0

// Also need to note for the balance update in the edit function we add a classList to the earnbtn and expense btn so that they can update 
// balance for edited one; the if condition represents the edited balance and the else condition represents the normal balance changing when 
// creating the list items.



// function editFunc(newAmount, prevAmount){
//     balance = balanceVal.innerHTML;
//     const editAmt = newAmount; //Check before running
//     const prevAmt = prevAmount;

//     if( editAmt < prevAmt ){
//         const bal = prevAmt - editAmt;// Check if greater or smaller
        
//     }
//     else{
//         const bal = editAmt - prevAmt;// Check if greater or smaller

//     }

//     if(earnValue < expenseValue){
//         balanceVal.innerHTML = bal + expenseValue - earnValue //Check if earn or expense value greater or smaller

//     }
//     else{
//         balanceVal.innerHTML = bal + earnValue - expenseValue //Check if earn or expense value greater or smaller

//     }


// }