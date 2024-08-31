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

console.log(earnValue,expenseValue);




earningbtn.addEventListener('click',()=>{

    if(descriptionVal.value=='' || amountVal.value==''){
        alert('Please Enter the values!')
    }
    else{

        
        const description= descriptionVal.value;
        const amount= Number(amountVal.value);
        let balance=Number(balanceVal.innerHTML);

        let calculatedVal= earnValue + amount;
        
        earnBtnVal.innerHTML=calculatedVal;
        earnValue=calculatedVal;
        
        const operator = '+'
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
    
    
            // Balance code here
    
            if(earningbtn.classList.contains('second')){
    
                earningbtn.classList.remove('second')
            }
            else{
                let addition = balance+amount;
                balanceVal.innerHTML= addition
            }
    
            deleteIcon.addEventListener('click',()=>{

                earnValue=Number(earnBtnVal.innerHTML)
                
                const calc = earnValue - amount;
                earnBtnVal.innerHTML= calc;



                iconContainer.parentElement.remove();
                balance= Number(balanceVal.innerHTML);
                balanceVal.innerHTML = balance - amount;

            })
    
    
    
            editIcon.addEventListener('click',()=>{
    
                earnValue-= amount
    
                descriptionVal.value= description;
                amountVal.value= amount;
    
                const prevAmount = amount;
    
        
    
                earningbtn.classList.add('second')
    
                let counter=1;
                earningbtn.addEventListener('click',(e)=>{
    
                    if(counter==1){
    
                        iconContainer.parentElement.remove();
                        counter=0;
    
                        const findNewAmount = document.querySelectorAll('.text-amt')
                        const liLength= findNewAmount.length;
                        
    
                        const newAmount = Number(findNewAmount[liLength-1].innerHTML.slice(1));
    
                        if(newAmount<prevAmount){
    
                            balance=Number(balanceVal.innerHTML);
                            let difference = prevAmount - newAmount;
                            balanceVal.innerHTML = balance - difference;
                            
                        }
                        else{
                            
                            balance=Number(balanceVal.innerHTML);
                            let difference = newAmount - prevAmount;
                            balanceVal.innerHTML = balance + difference;
                        }
    
                    }
                    else{
                        // console.log('else condition')
                    }
                   
    
                })
    
    
              
    
            })
    
           
            descriptionVal.value='';
            amountVal.value='';

    }


})


expensebtn.addEventListener('click',()=>{


    if(descriptionVal.value=='' || amountVal.value==''){
        alert('Please Enter the values!')
    }
    else{

        const description= descriptionVal.value;
        const amount= Number(amountVal.value);
        let balance=Number(balanceVal.innerHTML);

        let calculatedVal= expenseValue + amount;
        
        expBtnVal.innerHTML=calculatedVal;
        expenseValue=calculatedVal;
    
        const operator = '-'
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
    
    
            // Balance code here
    
            if(expensebtn.classList.contains('second')){
    
                expensebtn.classList.remove('second')
            }
            else{
                let subtraction = balance-amount;
                balanceVal.innerHTML= subtraction
            }
    
            deleteIcon.addEventListener('click',()=>{

                expenseValue=Number(expBtnVal.innerHTML)
                const calc = expenseValue - amount;
                expBtnVal.innerHTML= calc;

                iconContainer.parentElement.remove();
                balance= Number(balanceVal.innerHTML);
                balanceVal.innerHTML = balance + amount;
            })
    
    
            editIcon.addEventListener('click',()=>{

                expenseValue-=amount;
    
                descriptionVal.value= description;
                amountVal.value= amount;
    
                const prevAmount = -(amount);
    
    
                expensebtn.classList.add('second')
    
                let counter=1;
                expensebtn.addEventListener('click',(e)=>{
    
                    if(counter==1){
    
                        iconContainer.parentElement.remove();
                        counter=0;
    
                        const findNewAmount = document.querySelectorAll('.text-amt')
                        const liLength= findNewAmount.length;
                        
    
                        const newAmount = -(Number(findNewAmount[liLength-1].innerHTML.slice(1)));
    
    
                        if(newAmount<prevAmount){
    
    
                            ////// We need to check whether the balance is positive or negative inorder to update the balance properly
    
                            
                            balance=Number(balanceVal.innerHTML);
    
                            if(balance<0){
    
                                let difference = prevAmount - (newAmount);
    
                                console.log(prevAmount - (newAmount))
        
                                balanceVal.innerHTML = balance - difference;
                            }
                            
                           
                            
                        }
                        else{
                            balance=Number(balanceVal.innerHTML);
    
                            if(balance>0){
                                let difference = newAmount - (prevAmount);
        
                                console.log(difference)
                                balanceVal.innerHTML = balance + difference;
    
                            }
                        }
    
                    }
                    else{
                        
                    }
                   
    
                })
            })
    
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



