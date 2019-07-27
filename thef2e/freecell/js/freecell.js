//開始遊戲
function startGame() {
    var card = [],
        cardTemp = [
            [],
            [],
            [],
            []
        ],
        cardSort = [
            [],
            [],
            [],
            []
        ],
        cardContent = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        cardNum,
        cardDropNum,
        dragCardColor,
        dropCardColor,
        cardCol,
        dragColNum,
        dragCardNum,
        dropColNum,
        dropCardNum,
        dragNum,
        dropNum,
        cardDragPlace,
        cardDropPlace,
        step = [],
        isPaused = false,
        init = false,
        cardHtml;

    $('#pause').on('click', function() {
        $('#modal').show();
        $('.card_block img').attr('draggable', 'true');
        isPaused = true;
    });
    $('#play').on('click', function() {
        $('#modal').hide();
        $('#modal').find('.over').hide();
        $('#modal').find('#game_over').hide();
        $('#modal').find('#play').show();
        isPaused = false;
    });

    function gameEnd() {
        function cardContentEmpty(element) {
            return element.length == 0;
        }

        function cardTempEmpty(element) {
            return element.length == 0;
        }
        if (cardContent.every(cardContentEmpty) && cardTemp.every(cardTempEmpty)) {
            isPaused = true;
            $('#modal').find('.over').show();
            $('#modal').css('padding-top', '20%').show();
            var _over_time = $('#timer').text();
            $('#over_time').html(_over_time);
            $('#play').off('click');
            $('#modal').find('#game_over').show();
            $('#modal').find('#play').hide();
        }
    }

    //card array加52張牌
    function cardArray() {
        for (i = 1; i <= 52; i++) {
            card.push(i);
        }
    }

    //card array 52張牌洗亂
    function cardShuffle(array) {
        cardArray();
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            //陣列亂數則一
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            //最後一張跟陣列亂數 位子對調
            array[j] = x;
        }
        return array;
    }

    //轉換花色
    //1-13黑桃(spade) 14-26紅心(heart) 27-39方塊(diamond) 40-52梅花(club)
    function cardColor(cardNum) {
        if (cardNum > 0 && cardNum <= 13) return 'spade';
        if (cardNum >= 14 && cardNum <= 26) return 'heart';
        if (cardNum >= 27 && cardNum <= 39) return 'diamond';
        if (cardNum >= 40 && cardNum <= 52) return 'club';
    }
    //card array分別發到 cardContent的8個陣列
    function cardDeal() {
        cardShuffle(card);
        console.log(card);
        var i, j, cardColumn;
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 8; j++) {
                if ((i * 8) + j < 52) {
                    cardContent[j].push(card[(i * 8) + j]);
                }
            }
        }

        //card_shuffle render
        function cardShuffleRender() {
            var cardElement;
            $('#card_shuffle .card_column').html('');
            cardContent.forEach(function(cardColumn, cardColumnNum) {
                cardColumn.forEach(function(cardNum, cardNumIndex) {
                    $('#card_shuffle .card_column').eq(cardColumnNum).append(`<div class="card_block"><img src="images/${cardColor(cardNum)}_${cardNum % 13 == 0 ? 13 : cardNum % 13}.png" alt="" class="draggable" draggable="true" data-number="${cardNum}"></div>`);
                })
            })
            card.forEach(function(cardNumber, cardIndex) {
                if (!init) {
                    $('#card_shuffle .card_block').css({
                        'top': '-1000px',
                        'left': '-1000px',
                        'opacity': '0',
                        'transition': '.4s'
                    });
                    setTimeout(function() {
                        cardElement = $('#card_shuffle .card_block').find(`img[data-number='${cardNumber}']`).parent('.card_block');
                        cardElement.css({
                            'top': (Math.floor(cardIndex / 8)) * 35 + 'px',
                            'left': '50%',
                            'opacity': '1',
                            'transition': '.4s'
                        });
                    }, cardIndex * 40);
                }
            })
            init = true;
        }

        //card_temp render
        function cardTempRender() {
            $(' #card_temp .card_block').html('');
            cardTemp.forEach(function(cardTempArr, cardTempNum) {
                cardTempArr.forEach(function(cardTempArrNum, cardTempIndex) {
                    $('#card_temp .card_block').eq(cardTempNum).html(`<img src="images/${cardColor(cardTempArrNum)}_${cardTempArrNum % 13 == 0 ? 13 : cardTempArrNum % 13}.png" alt="" class="draggable" draggable="true" data-number="${cardTempArrNum}">`);
                })
            })
        }
        //card_sort render
        function cardSortRender() {
            $('#card_sort .card_block').html('');
            cardSort.forEach(function(cardSortCol, cardSortColNum) {
                cardSortCol.forEach(function(cardSortNum, index) {
                    $('#card_sort .card_block').eq(cardSortColNum).append(`<img src="images/${cardColor(cardSortNum)}_${cardSortNum % 13 == 0 ? 13 : cardSortNum % 13}.png" alt="" class="draggable" draggable="true" data-number="${cardSortNum}">`);
                })
            })
        }
        //card array 列進html
        function cardRender() {
            cardShuffleRender();
            cardTempRender();
            cardSortRender();
            // body...
        }
        cardRender();

        //draggable
        function dragStart(e) {
            // console.log('dragStart');
            // e.preventDefault();
            // console.log(e.target);
            cardNum = $(e.target).data('number'); //被拖拉的卡片在陣列中的代號
            dragCardColor = Math.ceil(cardNum / 13); //被拖拉的卡片花色代號
            cardDragPlace = $(e.target).parents('.main_row').attr('id'); //被拖拉物的區塊id
            dragColNum = $(e.target).parents('.card_column').index(); //被拖拉物外層card_column的位子
            dragCardNum = $(e.target).parents('.card_block').index(); //被拖拉物外層card_block的位子
            dragNum = $(e.target).index(); //被拖拉物本身的位子
            $(e.target).css('opacity', '.5');
            if (cardDragPlace == 'card_shuffle') {
                if (dragCardNum + 1 !== cardContent[dragColNum].length) { //拖拉多張卡片
                    $(e.target).css('opacity', '.5');
                    $(e.target).parents('.card_block').nextAll().find('img').css('opacity', '.5');
                }
            }
        }

        function dragEnter(e) {
            // console.log('dragEnter');
            // e.preventDefault();
            // console.log(e.target);
            cardDropNum = $(e.target).data('number'); //放置的卡片在陣列中的代號
            dropCardColor = Math.ceil(cardDropNum / 13); //放置的卡片花色代號
            cardDropPlace = $(e.target).parents('.main_row').attr('id'); //放置的區塊id
            dropColNum = $(e.target).parents('.card_column').index(); //放置物外層card_column的位子
            dropCardNum = $(e.target).parents('.card_block').index(); //放置物外層card_block的位子
            dropNum = $(e.target).index(); //放置物本身的位子
        }

        function dragEnd(e) {
            $(e.target).css('opacity', '1');
            var dragArr, dropArr, dragIndex, dropIndex, cardDragArr;
            switch (cardDragPlace) {
                case 'card_shuffle':
                    dragArr = cardContent;
                    dragIndex = dragColNum;
                    break;
                case 'card_temp':
                    dragArr = cardTemp;
                    dragIndex = dragCardNum;
                    break;
                case 'card_sort':
                    dragArr = cardSort;
                    dragIndex = dragCardNum;
                    break;
            }
            switch (cardDropPlace) {
                case 'card_shuffle':
                    dropArr = cardContent;
                    if (dropColNum == -1) { //card_column沒卡片
                        dropIndex = dropNum;
                    } else {
                        dropIndex = dropColNum;
                    }
                    break;
                case 'card_temp':
                    dropArr = cardTemp;
                    if (dropCardNum == -1) { //card_block沒卡片
                        dropIndex = dropNum;
                    }
                    break;
                case 'card_sort':
                    dropArr = cardSort;
                    if (dropCardNum == -1) { //card_block沒卡片
                        dropIndex = dropNum;
                    } else {
                        dropIndex = dropCardNum;
                    }
                    break;
            }

            function moveCard() {
                dropArr[dropIndex].push(cardNum);
                dragArr[dragIndex].pop(cardNum);
                if (cardDragPlace == 'card_shuffle' && cardDropPlace == 'card_shuffle') {
                    if (cardDragArr == undefined) {
                        step.push({
                            dragArr: dragArr,
                            dropArr: dropArr,
                            dragIndex: dragIndex,
                            dropIndex: dropIndex,
                            moveCard: cardNum
                        });
                    } else {
                        if (cardDragArr[cardDragArr.length - 1] == cardNum) {
                            step.push({
                                dragArr: dragArr,
                                dropArr: dropArr,
                                dragIndex: dragIndex,
                                dropIndex: dropIndex,
                                moveCard: cardDragArr
                            });
                        }
                    }
                } else {
                    step.push({
                        dragArr: dragArr,
                        dropArr: dropArr,
                        dragIndex: dragIndex,
                        dropIndex: dropIndex,
                        moveCard: cardNum
                    });
                }
            }
            //從card_shuffle拖拉卡片
            if (cardDragPlace == 'card_shuffle') {
                if (dragCardNum + 1 == cardContent[dragColNum].length) { //拖拉單張卡片
                    if (cardDropPlace == 'card_shuffle') {
                        if (dropColNum == -1) { //card_column沒有卡片
                            moveCard();
                        } else if ((cardDropNum - 1) % 13 == cardNum % 13 && dragCardColor !== dropCardColor && dragCardColor + dropCardColor !== 5) { //card_column有卡片 花色不同 && 照排序可拖拉
                            moveCard();
                        }
                    } else if (cardDropPlace == 'card_temp') {
                        if (dropCardNum == -1) { //card_block沒卡片
                            moveCard();
                        }
                    } else if (cardDropPlace == 'card_sort') {
                        if (dropCardNum == -1 && cardNum % 13 == 1) { //card_block沒卡片 && 卡片數字是A
                            moveCard();
                        } else if (cardSort[dropCardNum] !== undefined && cardNum - 1 == cardSort[dropCardNum][dropNum]) { //card_block有卡片 && 卡片數字照順序
                            moveCard();
                        }
                    }
                } else { //拖拉多張卡片
                    if (cardDropPlace == 'card_shuffle') {
                        var tempCardQuant = 0,
                            dragCardQuant = cardContent[dragColNum].length - dragCardNum;
                        for (var i = 0; i < cardTemp.length; i++) {
                            if (cardTemp[i].length == 0) {
                                tempCardQuant++;
                            }
                        }
                        if (tempCardQuant + 1 >= dragCardQuant) { //card_temp數量+1 大於等於 拖拉的卡片數量
                            cardDragArr = cardContent[dragColNum].slice(dragCardNum, cardContent[dragColNum].length),
                                sortCheck = 0;
                            for (var i = cardDragArr.length - 1; i >= 0; i--) {
                                if (i + 1 < cardDragArr.length) {
                                    if ((cardDragArr[i] - 1) % 13 == ((cardDragArr[i + 1] - 1) % 13) + 1 && (Math.ceil(cardDragArr[i] / 13)) !== (Math.ceil(cardDragArr[i + 1] / 13)) && (Math.ceil(cardDragArr[i] / 13)) + (Math.ceil(cardDragArr[i + 1] / 13)) !== 5) {
                                        sortCheck++;
                                    }
                                }
                                if (cardDragArr.length - 1 == sortCheck) {
                                    if (dropColNum == -1) { //card_column沒有卡片
                                        cardDragArr.forEach(function(cardDragArrNum, cardDragArrIndex, array) {
                                            cardNum = cardDragArrNum;
                                            moveCard();
                                        })
                                    } else if ((cardDropNum - 1) % 13 == cardNum % 13 && dragCardColor !== dropCardColor && dragCardColor + dropCardColor !== 5) { //card_column有卡片 花色不同 && 照排序可拖拉
                                        cardDragArr.forEach(function(cardDragArrNum, cardDragArrIndex, array) {
                                            cardNum = cardDragArrNum;
                                            moveCard();
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //從card_temp拖拉卡片
            if (cardDragPlace == 'card_temp') {
                if (cardDropPlace == 'card_shuffle') {
                    if (dropColNum == -1) { //card_column沒有卡片
                        moveCard();
                    } else if ((cardDropNum - 1) % 13 == cardNum % 13 && dragCardColor !== dropCardColor && dragCardColor + dropCardColor !== 5) { //card_column有卡片 花色不同 && 照排序可拖拉
                        moveCard();
                    }
                } else if (cardDropPlace == 'card_temp') {
                    if (dropCardNum == -1) {
                        moveCard();
                    }
                } else if (cardDropPlace == 'card_sort') {
                    if (dropCardNum == -1 && cardNum % 13 == 1) {
                        moveCard();
                    } else if (cardSort[dropCardNum] !== undefined && cardNum - 1 == cardSort[dropCardNum][dropNum]) {
                        moveCard();
                    }
                }
            }
            //從card_sort拖拉卡片
            if (cardDragPlace == 'card_sort') {
                if (cardDropPlace == 'card_shuffle') {
                    if (dropColNum == -1) { //card_column沒有卡片
                        moveCard();
                    } else if ((cardDropNum - 1) % 13 == cardNum % 13 && dragCardColor !== dropCardColor && dragCardColor + dropCardColor !== 5) { //card_column有卡片 花色不同 && 照排序可拖拉
                        moveCard();
                    }
                } else if (cardDropPlace == 'card_temp') {
                    if (dropCardNum == -1) {
                        moveCard();
                    }
                } else if (cardDropPlace == 'card_sort') {
                    if (dropCardNum == -1 && cardNum % 13 == 1) {
                        moveCard();
                    }
                }
            }
            cardRender();
            gameEnd();
        }

        $('#main').bind('dragstart', dragStart);
        $('#main').bind('dragenter', dragEnter);
        $('#main').bind('dragend', dragEnd);

        function stepUndo() {
            if (step.length > -1) {
                var stepFromArr = step[step.length - 1].dragArr,
                    stepToArr = step[step.length - 1].dropArr,
                    stepFromIndex = step[step.length - 1].dragIndex,
                    stepToIndex = step[step.length - 1].dropIndex,
                    stepMoveCard = step[step.length - 1].moveCard;
                if (cardDragPlace == 'card_shuffle' && cardDropPlace == 'card_shuffle') {
                    if (typeof stepMoveCard === 'number') {
                        stepFromArr[stepFromIndex].push(stepMoveCard);
                        stepToArr[stepToIndex].pop(stepMoveCard);
                    } else {
                        stepFromArr[stepFromIndex] = stepFromArr[stepFromIndex].concat(stepMoveCard);
                        stepToArr[stepToIndex].splice((stepToArr[stepToIndex].length - stepMoveCard.length), stepMoveCard.length);
                    }
                } else {
                    stepFromArr[stepFromIndex].push(stepMoveCard);
                    stepToArr[stepToIndex].pop(stepMoveCard);
                }
                step.pop();
                cardRender();
            }
        }
        $('#undo').on('click', stepUndo);

        function timer() {
            var time = 0,
                min,
                sec;
            window.setInterval(function() {
                if (!isPaused) {
                    time++;
                    min = Math.floor(time / 60);
                    min < 10 && (min = '0' + min);
                    sec = time % 60;
                    sec < 10 && (sec = '0' + sec);
                    $('#timer').text(min + ":" + sec);
                }
            }, 1000);

        }
        timer();
    }

    cardDeal();
}
startGame();
//restart
function restart(element) {
    $(element).on('click', function() {
        card = [];
        cardTemp = [
            [],
            [],
            [],
            []
        ];
        cardSort = [
            [],
            [],
            [],
            []
        ];
        cardContent = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        $('#main').unbind('dragstart');
        $('#main').unbind('dragenter');
        $('#main').unbind('dragend');
        $('#undo').off('click');
        $('#modal').hide();
        $('#modal').find('#game_over').hide();
        $('#modal').find('#play').show();
        startGame();
    });
};
restart('#restart');
restart('#game_over');