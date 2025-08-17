const boxes=document.querySelectorAll('.box')
const gameInfo=document.querySelector('.game-info')

const newGameBtn=document.querySelector('.btn')

let currentPlayer;

let gameGrid;

const winingPositions=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

//let's create a function to imtialise he game

function initGame(){
    currentPlayer='x';
    gameGrid=["","","","","","","","",""];
    newGameBtn.classList.remove('active');
    gameInfo.innerText=`Current Player - ${currentPlayer}`;

    //ui empty

    boxes.forEach((box,index)=>{
        box.innerText='';
        box.style.pointerEvents="all";
        //one more this is missing

        box.classList.remove('win')

    });
}


initGame();

function swapturn(){
    if(currentPlayer=='x'){
        currentPlayer='0';
    }else{
        currentPlayer='x';
    }

    gameInfo.innerText=`Current Player - ${currentPlayer}`;

}


function checkGameOver(){
    let answer='';
    winingPositions.forEach((position)=>{
        //all 3 boxes should be non-empty and same in value
        if((gameGrid[position[0]]!=='' || gameGrid[position[1]] !=="" || gameGrid[position[2]]!=="" )
        && (gameGrid[position[0]] === gameGrid[position[1]])&&(gameGrid[position[1]] === gameGrid[position[2]])){
        
             //check if winner is x 

             if(gameGrid[position[0]]==='x'){

                answer="x";


             }
             else{
                answer="0";
             }

             //disable pointer event

             boxes.forEach((box)=>{
                box.style.pointerEvents="none"
             })

             //now we know winner

             boxes[position[0]].classList.add("win");
             boxes[position[1]].classList.add("win");
             boxes[position[2]].classList.add("win");
                       

    }
    });
    if(answer!==""){
        gameInfo.innerText=`Winner player - ${answer}`;
        newGameBtn.classList.add('active')
        return;
    }

    //lets check for winner
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box!==""){
            fillCount++;
        }
    })
    if(fillCount===9){
        gameInfo.innerText="Game-Tied!";
        newGameBtn.classList.add('active');
    }
}


boxes.forEach((box,index)=>box.addEventListener('click',()=>{
     handleClick(index);
}));

function handleClick(index){
    if(gameGrid[index]===''){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents='none';   
        swapturn();  
        checkGameOver();
    }
}

newGameBtn.addEventListener('click',()=>{
    initGame();
})