/**
 * Created with JetBrains PhpStorm.
 * User: R5596333
 * Date: 24/04/13
 * Time: 16:15
 * To change this template use File | Settings | File Templates.
 */
function GoToOptions() {
    "use strict";

    //log('navBack()');
    try {
        if ($('.ui-page-active').attr('id') === 'main') {
            //    toBackground();
            //} else {
            $.mobile.changePage($('#options'), {transition: 'none'});
        }
    } catch (err) {
        //log('Error: ' + err);
    }
}

function toBackground() {
    "use strict";

    log('toBackground()');
    try {
        blackberry.app.requestBackground();
    } catch (err) {
        //log('Error: ' + err);
        console.log('Error Background', err);
    }
}
