async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    let head1 = data.find(item => item.id == 1);
    document.getElementById('title1').innerHTML = head1.title;
    document.getElementById('body1').innerHTML = head1.body;

    let head2 = data.find(item => item.id == 2);
    document.getElementById('title2').innerHTML = head2.title;
    document.getElementById('body2').innerHTML = head2.body;

    let head3 = data.find(item => item.id == 3);
    document.getElementById('title3').innerHTML = head3.title;
    document.getElementById('body3').innerHTML = head3.body;

    let head4 = data.find(item => item.id == 4);
    document.getElementById('title4').innerHTML = head4.title;
    document.getElementById('body4').innerHTML = head4.body;

    let head5 = data.find(item => item.id == 5);
    document.getElementById('title5').innerHTML = head5.title;
    document.getElementById('body5').innerHTML = head5.body;

    let head6 = data.find(item => item.id == 6);
    document.getElementById('title6').innerHTML = head6.title;
    document.getElementById('body6').innerHTML = head6.body;

    let head7 = data.find(item => item.id == 7);
    document.getElementById('title7').innerHTML = head7.title;
    document.getElementById('body7').innerHTML = head7.body;

    let head8 = data.find(item => item.id == 8);
    document.getElementById('title8').innerHTML = head8.title;
    document.getElementById('body8').innerHTML = head8.body;

    let head9 = data.find(item => item.id == 9);
    document.getElementById('title9').innerHTML = head9.title;
    document.getElementById('body9').innerHTML = head9.body;

    let head10 = data.find(item => item.id == 10);
    document.getElementById('title10').innerHTML = head10.title;
    document.getElementById('body10').innerHTML = head10.body;

    let head11 = data.find(item => item.id == 11);
    document.getElementById('title11').innerHTML = head11.title;
    document.getElementById('body11').innerHTML = head11.body;

    let head12 = data.find(item => item.id == 12);
    document.getElementById('title12').innerHTML = head12.title;
    document.getElementById('body12').innerHTML = head12.body;

    let head13 = data.find(item => item.id == 13);
    document.getElementById('title13').innerHTML = head13.title;
    document.getElementById('body13').innerHTML = head13.body;

    let head14 = data.find(item => item.id == 14);
    document.getElementById('title14').innerHTML = head14.title;
    document.getElementById('body14').innerHTML = head14.body;

    let head15 = data.find(item => item.id == 15);
    document.getElementById('title15').innerHTML = head15.title;
    document.getElementById('body15').innerHTML = head15.body;
}
fetchUsers()