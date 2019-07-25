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
        cardContent = [],
        cardNum,
        cardCol,
        dragColNum,
        dragCardNum,
        dropColNum,
        dropCardNum,
        dragNum,
        dropNum,
        cardDragPlace,
        cardDropPlace,
        cardHtml;

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
        cardShuffle(card)
        var i, cardColumn;
        for (i = 1; i <= 4; i++) {
            cardColumn = card.slice(0, 7);
            cardContent.push(cardColumn);
            card.splice(0, 7);
        } // 前4排7張
        for (i = 1; i <= 4; i++) {
            cardColumn = card.slice(0, 6);
            cardContent.push(cardColumn);
            card.splice(0, 6);
        } // 後4排6張
        //card_shuffle render
        function cardShuffleRender() {
            // console.log(cardContent);
            $('#card_shuffle .card_column').html('');
            cardContent.forEach(function(cardColumn, cardColumnNum) {
                cardColumn.forEach(function(cardNum, cardNumIndex) {
                    $('#card_shuffle .card_column').eq(cardColumnNum).append(`<div class="card_block"><img src="images/${cardColor(cardNum)}_${cardNum % 13 == 0 ? 13 : cardNum % 13}.png" alt="" draggable="true" data-number="${cardNum}"></div>`);
                })
            })
        }
        //card_temp render
        function cardTempRender() {
            $(' #card_temp .card_block').html('');
            cardTemp.forEach(function(cardTempArr, cardTempNum) {
                cardTempArr.forEach(function(cardTempArrNum, cardTempIndex) {
                    $('#card_temp .card_block').eq(cardTempNum).html(`<img src="images/${cardColor(cardTempArrNum)}_${cardTempArrNum % 13 == 0 ? 13 : cardTempArrNum % 13}.png" alt="" draggable="true" data-number="${cardTempArrNum}">`);
                })
            })
        }
        //card_sort render
        function cardSortRender() {
            $('#card_sort .card_block').html('');
            cardSort.forEach(function(cardSortCol, cardSortColNum) {
                cardSortCol.forEach(function(cardSortNum, index) {
                    $('#card_sort .card_block').eq(cardSortColNum).append(`<img src="images/${cardColor(cardSortNum)}_${cardSortNum % 13 == 0 ? 13 : cardSortNum % 13}.png" alt="" draggable="true" data-number="${cardSortNum}">`);
                })
            })
        }
        //card array 列進html
        function cardRender() {
            cardShuffleRender();
            cardTempRender();
            cardSortRender();
        }
        cardRender();

        //draggable
        function dragStart(e) {
            // console.log('dragStart');
            // e.preventDefault();
            console.log(e.target);
            cardNum = $(e.target).data('number'); //被拖拉的卡片在陣列中的代號
            cardDragPlace = $(e.target).parents('.main_row').attr('id'); //被拖拉物的區塊id
            dragColNum = $(e.target).parents('.card_column').index(); //被拖拉物外層card_column的位子
            dragCardNum = $(e.target).parents('.card_block').index(); //被拖拉物外層card_block的位子
            dragNum = $(e.target).index(); //被拖拉物本身的位子
            // console.log('cardNum = ' + cardNum);
            // console.log('cardDragPlace = ' + cardDragPlace);
            // console.log('dragColNum = ' + dragColNum);
            // console.log('dragCardNum = ' + dragCardNum);
            // console.log('dragNum = ' + dragNum);
            // $(e.target).parent('.card_block').css('cursor', 'grabbing');
            $(e.target).css('opacity', '.5')
        }

        function dragEnter(e) {
            // console.log('dragEnter');
            // e.preventDefault();
            console.log(e.target);
            cardDropPlace = $(e.target).parents('.main_row').attr('id'); //放置的區塊id
            dropColNum = $(e.target).parents('.card_column').index(); //放置物外層card_column的位子
            dropCardNum = $(e.target).parents('.card_block').index(); //放置物外層card_block的位子
            dropNum = $(e.target).index(); //放置物本身的位子
        }

        function dragLeave(e) {
            // console.log('dragLeave');
            // e.preventDefault();
            // console.log(e.target);
        }

        function dragEnd(e) {
            // console.log('dragEnd');
            // e.preventDefault();
            // console.log(e.target);
            $(e.target).css('opacity', '1');
            console.log('cardDropPlace = ' + cardDropPlace);
            console.log('dropColNum = ' + dropColNum);
            console.log('dropCardNum = ' + dropCardNum);
            console.log('dropNum = ' + dropNum);
            if (cardDragPlace == 'card_shuffle') {
                if (dragCardNum + 1 == cardContent[dragColNum].length) {
                    if (cardDropPlace == 'card_shuffle') {
                        console.log(cardContent);
                        if (dropColNum > -1) {
                            cardContent[dragColNum].splice(dragCardNum, 1);
                            cardContent[dropColNum].push(cardNum);
                        } else {
                            cardContent[dragColNum].splice(dragCardNum, 1);
                            cardContent[dropNum].push(cardNum);
                        }
                    } else if (cardDropPlace == 'card_temp') {
                        if (dropCardNum == -1) {
                            cardContent[dragColNum].splice(dragCardNum, 1);
                            cardTemp[dropNum].push(cardNum);
                        }
                    } else if (cardDropPlace == 'card_sort') {
                        if (dropCardNum == -1 && cardNum % 13 == 1) {
                            cardContent[dragColNum].splice(dragCardNum, 1);
                            cardSort[dropNum].push(cardNum);
                        } else if (cardNum - 1 == cardSort[dropCardNum][dropNum]) {
                            console.log('cardSort[dropCardNum]=' + cardSort[dropCardNum][dropNum]);
                            cardContent[dragColNum].splice(dragCardNum, 1);
                            cardSort[dropCardNum].push(cardNum);
                        }
                    }
                }
            }
            // if (cardDragPlace == 'card_temp') {}
            cardRender();
        }
        $('#main').bind('dragstart', dragStart);
        $('#main').bind('dragenter', dragEnter);
        $('#main').bind('dragleave', dragLeave);
        $('#main').bind('dragend', dragEnd);
    }

    cardDeal();
    //restart
    $('#restart').on('click', function() {
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
        cardContent = [];
        cardDeal();
    })
}
startGame();