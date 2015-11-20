var openPage = function() {
    var name = document.getElementById('name').value;
    var boss = document.getElementById('boss').value;
    url = 'http://maview.nexon.com/Rank/Boss3?';
    url += 'b=' + boss;
    url += 'k=' + name;
    window.open(url);
}
