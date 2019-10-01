/*
Правила игры:

- 2 игрока
- Устанавливаем победное количество очков
- В каждый ход, игрок делает roll a dice какое-то количество раз. Каждый результат добавляется к ROUND score
- Если у игрока выпадает 1 то его round score обнуляется и ход переходит к другому игроку
- Если нажать на кнопку Hold то round score добавится к global score и ход переходит к другому игроку
- Если у игрока  подряд выпало 66 то все его очки обнуляются и ход переходит к другому игроку
- Первый игрок набравший победное количесвтво очков или больше выигрывает

*/

let scores, roundScore, activePlayer, gamePlaying, previousRoll;

init();

/*добавляем к кнопке roll-dice eventlistener - функцию которая ждет событие типа click и исполняет функцию как только произойдет событие */
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){

        let dice = Math.floor(Math.random() * 6) + 1;
        // Показываем кубик
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Если 2 раза выпала 6 то обнуляем счет обнуялем предыдущий ход и меняем игрока
        if (dice === 6 && previousRoll === 6){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            previousRoll = undefined;
            nextPlayer();
            return;
        }else if (dice > 1){
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        previousRoll = dice;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //1.Добавляем current score к global score
        scores[activePlayer] += roundScore;


        //2.Обновить UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Устанавливаем победный счет
        let input = document.querySelector('.final-score').value;
        let finalScore;

        if(input){
            finalScore = input;
        }else{
            finalScore = 50;
        }


        //3.Проверить выиграл ли игрок
        if (scores[activePlayer] >= finalScore){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Сменить игрока
            nextPlayer();
        }
    }

});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // меняем подсвечивающую панель активного игрока
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// по кнопке new game запускаем игру
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //скрываем кубик
    document.querySelector('.dice').style.display = 'none';

    // устанавливаем начальные параиетры по 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //устаналиваем имена заново после победы
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //убираем подсветку Winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //убираем подсветку active
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //добавляем active первому игроку
    document.querySelector('.player-0-panel').classList.add('active');
}
