/*
 * BOT for 10fastfingers, automatic typing with adjustable speed
 * ================================================================
 *
 * bored in my apartment and decided to hack this game: http://indonesian-speedtest.10fastfingers.com/
 * just start the game, when you're ready to type, DON'T TYPE ANYTHING, open up
 * your Developer Tools in Chrome (CTRL+SHIFT+J) and click Console tab, and
 * then paste the whole code below, then press enter, and enjoy the show.
 *
 * twitter.com/kecebongsoft
 */

var word_idx = 0;
var interval_per_word = 250; // in milliseconds
function hackit(){
    if(word_idx<words.length){
        $('#inputfield').val(words[word_idx] + ' ');
        var keyup = jQuery.Event('keyup');
        keyup.which = 32;
        $('#inputfield').trigger(keyup);
        word_idx++;
        setTimeout('hackit()', interval_per_word);
    }
}
setTimeout('hackit()', interval_per_word);