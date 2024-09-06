let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#newGame");

let turnO=true;
let count=0;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],    
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box has been clicked");
        if(turnO===true)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        count++;
        console.log(count);
        box.disabled=true;
        box.style.backgroundColor="#BB249B"
        box.style.color="#F4EBE8"

        let isWinner=checkWinner();

        if(count===9 && !isWinner)
        {
            draw();
        }
    });
});

const draw=()=>{
    msgContainer.classList.remove("hide");
    msg.innerText="It is a Draw!"
    newGameBtn.innerText="Retry";
    count=0;
}
const reset=()=>{
    enable();
    for(let box of boxes){
        box.innerText='';
        box.style.backgroundColor="#F4EBE8"
    }
    msgContainer.classList.add("hide");
   turnO=true;

};

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
};

const disable=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};



const showWinner=(winner)=>{
    msg.innerText=`The winner is player ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
       
        if(val1!='' && val2!='' && val3!='')
        {
            if(val1===val2 && val2===val3)
            {
                console.log("winner is ",val1);
               disable();
               showWinner(val1);
               return true;
            }
        }
    }
};

resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",reset);