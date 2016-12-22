$(document).ready(function () {
    
    function updateDots() {
        var dot, body, x, y;

        if (Math.random() < 0.07) {
            orangeDot = $('<img src="orange.png" class="shake"></img>');

            orangeDot.width(Math.random() * (22 - 10) + 10);

            body = $('body');

            x = Math.floor((body.width() - 24) * Math.random());
            y = Math.floor((body.height() - 24) * Math.random());
            orangeDot.offset({left: x, top: y});

            body.append(orangeDot);

        }
        if (Math.random() < 0.04) {
            blueDot = $('<img class="shake" src="blue.png"></img>');

            blueDot.width(Math.random() * (22 - 10) + 10);

            body = $('body');
            x = Math.floor((body.width() - 24) * Math.random());
            y = Math.floor((body.height() - 24) * Math.random());
            blueDot.offset({left: x, top: y});

            body.append(blueDot);

        }
        if (Math.random() < 0.05) {
            
            greyDot = $('<img class="shake" src="grey.png"></img>');

            greyDot.width(Math.random() * (22 - 10) + 10);

            body = $('body'); 

            x = Math.floor((body.width() - 24) * Math.random());
            y = Math.floor((body.height() - 24) * Math.random());
            greyDot.offset({left: x, top: y});

            body.append(greyDot);

        }
        
    }

    setInterval(updateDots, 25);

    //interval;

    // setTimeout(clearInterval(interval),30);
    
    
    
});
