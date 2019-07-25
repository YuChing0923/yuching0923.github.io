//開始遊戲
function startGame() {
    var card = [],
        cardTemp = [
            [2],
            [3],
            [4],
            []
        ],
        cardSort = [
            [11, 12, 13],
            [],
            [30, 31, 32],
            []
        ],
        cardContent = [],
        cardNum,
        cardCol,
        dragColNum,
        dragCardNum,
        dropColNum,
        dropCardNum,
        dropTempCardNum,
        dropSortColNum,
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
            console.log(cardContent);
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
            cardNum = $(e.target).data('number');
            dragColNum = $(e.target).parents('.card_column').index();
            dragCardNum = $(e.target).parents('.card_block').index();
            cardDragPlace = $(e.target).parents('.main_row').attr('id');
            console.log(e.target);
            $(e.target).css('opacity', '.5')
        }

        function dragEnter(e) {
            // console.log('dragEnter');
            // e.preventDefault();
            // console.log(e.target);
            cardDropPlace = $(e.target).parents('.main_row').attr('id');
            switch (cardDropPlace) {
                case 'card_shuffle':
                    dropColNum = $(e.target).parents('.card_column').index();
                    dropCardNum = $(e.target).parents('.card_block').index();
                    break;
                case 'card_temp':
                    dropTempCardNum = $(e.target).index();
                    break;
                case 'card_sort':
                    dropSortColNum = $(e.target).index();
                    break;
            }
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
            // console.log(e.target);
            // console.log(cardContent[dragColNum].length);
            if (dragCardNum + 1 == cardContent[dragColNum].length) {
                // Switch state
                // console.log(cardDropPlace);
                // console.log(cardDropPlace);
                switch (cardDragPlace + "|" + cardDropPlace) {
                    case 'card_shuffle|card_shuffle':
                        cardContent[dragColNum].splice(dragCardNum, 1);
                        cardContent[dropColNum].push(cardNum);
                        break;
                    case 'card_shuffle|card_temp':
                        cardContent[dragColNum].splice(dragCardNum, 1);
                        cardTemp[dropTempCardNum].push(cardNum);
                        break;
                    case 'card_shuffle|card_sort':
                        cardContent[dragColNum].splice(dragCardNum, 1);
                        cardSort[dropSortColNum].push(cardNum);
                        console.log(dropSortColNum);
                        break;
                    default:
                        break;
                }
            }
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