//----------TRANG-CHỦ----------//
//Slogan
if(document.querySelector('#slogan-container button')) {
    document.querySelector('#slogan-container button').onclick=()=>{
        window.scrollTo({
        top: 700,
        behavior: 'smooth'});}}
//Địa điểm phổ biến
function popularHover(i) {
    document.querySelectorAll('#popular-img h2')[i].className='white-words';
    document.querySelectorAll('#popular-img p')[i].className='white-words';}
function popularReset(i) {
    document.querySelectorAll('#popular-img h2')[i].className='blue-words';
    document.querySelectorAll('#popular-img p')[i].className='gray-words';}
//Câu chuyện
if(document.querySelector('#story-text button')) {
    document.querySelector('#story-text button').onclick=()=>{
        window.location.href='sanpham.html';}}
//Tin tức
if(document.querySelector('.news-title')) {
    let date = new Date();
    document.querySelectorAll('.news-title h2:nth-child(2)')[0].innerHTML = `Tháng: ${date.getMonth()+1}`;
    document.querySelectorAll('.news-title h2:nth-child(2)')[1].innerHTML = `Cập nhật: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;}

//----------TRANG-LIÊN-HỆ----------//
// Chạy hàm introduceReponsive khi load trang
if(document.querySelector('#manager-profile')) {
    introduceReponsive();
    // Chạy hàm introduceReponsive khi thay đổi kích thước trang
    window.onresize=introduceReponsive;}
//Hàm introduceReponsive
function introduceReponsive() {
    if(window.innerWidth<=900&&window.innerWidth>=600) {
        document.querySelectorAll('#manager-profile div')[2].className='blue-border';
        document.querySelectorAll('#manager-profile div')[3].className='gray-background blue-border';}
    else {
        document.querySelectorAll('#manager-profile div')[2].className='gray-background blue-border';
        document.querySelectorAll('#manager-profile div')[3].className='blue-border';}
    if(window.innerWidth<=600) {
        document.querySelectorAll('#policy-details div')[2].className='blue-background white-words';
        document.querySelectorAll('#policy-details div i')[2].className='fa-solid fa-3 white-background blue-words';
        document.querySelectorAll('#policy-details div')[3].className='gray-background blue-words';
        document.querySelectorAll('#policy-details div i')[3].className='fa-solid fa-4 blue-background white-words';
        document.querySelectorAll('#policy-details div')[6].className='blue-background white-words';
        document.querySelectorAll('#policy-details div i')[6].className='fa-solid fa-7 white-background blue-words';
        document.querySelectorAll('#policy-details div')[7].className='gray-background blue-words';
        document.querySelectorAll('#policy-details div i')[7].className='fa-solid fa-8 blue-background white-words';}
    else {
        document.querySelectorAll('#policy-details div')[2].className='gray-background blue-words';
        document.querySelectorAll('#policy-details div i')[2].className='fa-solid fa-3 blue-background white-words';
        document.querySelectorAll('#policy-details div')[3].className='blue-background white-words';
        document.querySelectorAll('#policy-details div i')[3].className='fa-solid fa-4 white-background blue-words';
        document.querySelectorAll('#policy-details div')[6].className='gray-background blue-words';
        document.querySelectorAll('#policy-details div i')[6].className='fa-solid fa-8 blue-background white-words';
        document.querySelectorAll('#policy-details div')[7].className='blue-background white-words';
        document.querySelectorAll('#policy-details div i')[7].className='fa-solid fa-5 white-background blue-words';}}

//----------TRANG-ĐĂNG-NHẬP----------//
if(document.querySelector('#login')) { 
    localStorage.setItem('contain-login', 0);
    var username='binhdinhduykhoa', password='nhom6deptraiso1';
    document.querySelector('#login button').onclick=(e)=>{
        e.preventDefault();
        if(document.querySelector('[name="username"]').value==username&&document.querySelector('[name="password"]').value==password) {
            window.location.href='sanpham.html';
            localStorage.setItem('contain-login', 1);}
        else document.querySelector('#wrong-login').style.visibility='visible';}}

//----------TRANG-ĐĂNG-KÝ----------//
if(document.querySelector('#signup')) {
    //Username validition
    function isUsername() {
        const regex = /^[a-zA-Z][a-zA-Z0-9._]{9,15}$/;
        if(!regex.test(document.querySelector('[name="username"]').value)) {
            document.querySelector('#not-username').style.visibility='visible';
            return false;}
        document.querySelector('#not-username').style.visibility='hidden';
        return true;}
    document.querySelector('[name="username"]').onkeyup=isUsername;
    //Password validition
    function isPassword() {
        if(document.querySelector('[name="password"]').value.length<8) {
            document.querySelector('#not-password').style.visibility='visible';
            return false;}
        document.querySelector('#not-password').style.visibility='hidden';
        return true;}
    document.querySelector('[name="password"]').onkeyup=isPassword;
    //Password2 validition
    function ispassword2() {
        if(document.querySelector('[name="password"]').value!=document.querySelector('[name="password2"]').value) {
            document.querySelector('#not-password2').style.visibility='visible';
            return false;}
        document.querySelector('#not-password2').style.visibility='hidden';
        return true;}
    document.querySelector('[name="password2"]').onkeyup=ispassword2;
    //Checkbox validition
    function isChecked() {
        if(!document.querySelector('#checkbox').checked) {
            document.querySelector('#not-checked').style.visibility='visible';
            return false;}
        document.querySelector('#not-checked').style.visibility='hidden';
        return true;}
    document.querySelector('#checkbox').onchange=isChecked;
    //Submit button
    document.querySelector('form button').onclick=(e)=> {
        e.preventDefault();
        let isValid= ispassword2()+isPassword()+isChecked()+isUsername();
        if(isValid==4) document.querySelector('form').submit();}}

//----------TRANG-LIÊN-HỆ----------//
if(document.querySelector('#contact')) {
    //Full name validition
    function isFullname() {
        if(document.querySelector('[name="fullname"]').value.length<4) {
            document.querySelector('#not-fullname').style.visibility='visible';
            return false;}
        document.querySelector('#not-fullname').style.visibility='hidden';
        return true;}
    document.querySelector('[name="fullname"]').onkeyup=isFullname;
    //Email validition
    function isEmail() {
        const regex=/^[a-zA-Z0-9._-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regex.test(document.querySelector('[name="email"]').value)) {
            document.querySelector('#not-email').style.visibility='visible';
            return false;}
        document.querySelector('#not-email').style.visibility='hidden';
        return true;}
    document.querySelector('[name="email"]').onkeyup=isEmail;
    //Phone Number validation
    function isPhoneNumber() {
        const regex=/^0\d{9}$/;
        if(!regex.test(document.querySelector('[name="phonenumber"]').value)) {
            document.querySelector('#not-phonenumber').style.visibility='visible';
            return false;}
        document.querySelector('#not-phonenumber').style.visibility='hidden';
        return true;}
    document.querySelector('[name="phonenumber"]').onkeyup=isPhoneNumber;
    //Contact content validition
    function isContactContent() {
        if(document.querySelector('textarea').value.length==0) {
            document.querySelector('#not-contactcontent').style.visibility='visible';
            return false;}
        document.querySelector('#not-contactcontent').style.visibility='hidden';
        return true;}
    document.querySelector('textarea').onkeyup=isContactContent;
    //Submit button
    document.querySelector('form button').onclick=(e)=> {
        e.preventDefault();
        let isValid= isFullname()+isEmail()+isPhoneNumber()+isContactContent();
        if(isValid==4) document.querySelector('form').submit();}}

//----------TRANG-SẢN-PHẨM----------//
//Đặt tour
if (document.querySelector('#tour-order-container')) {
    //Date Validation
    function isTourDays() {
        let startDate= new Date(document.querySelector('[name=start-date]').value),
            endDate=new Date(document.querySelector('[name=end-date]').value),
            oneDay = 24 * 60 * 60 * 1000;
        if(startDate<endDate) {
            let tourDays = Math.round((endDate - startDate) / oneDay);
            return tourDays;}
        document.querySelector('#tour-order-form form div:last-child').innerHTML='<label class="red-words">Thời gian không hợp lệ</label>';
        return 0;}
    //Tourists Validation
    function isTourists() {
        let tourists=document.querySelector('[name="tourists"]').value
        if(!Number.isInteger(tourists)&&tourists<1) {
            document.querySelector('#tour-order-form form div:last-child').innerHTML= '<label class="red-words">Giá trị lượng khách không hợp lệ</label>';
            return 0;}
        else if(tourists>100) {
            document.querySelector('#tour-order-form form div:last-child').innerHTML='<label class="red-words">Lượng khách quá mức</label>';
            return 0;}
        return tourists;}
    //Destination Validation
    function isTourName() {
        let tourName=document.querySelector('select').value;
        if(tourName==0) {
            document.querySelector('#tour-order-form form div:last-child').innerHTML='<label class="red-words">Vui lòng chọn điểm đến</label>';
            return 0;}
        return tourName;}
    //Logined Validition
    function isLogined() {
        let containLogin=localStorage.getItem('contain-login')
        if(containLogin==0) {
            document.querySelector('#tour-order-form form div:last-child').innerHTML='<label class="red-words"> Bạn chưa đăng nhập </label>';
            return containLogin;}
        return containLogin;}
    //Count tour
    if(localStorage.getItem('count-tours')==null) localStorage.setItem('count-tours', 0);
    //Object tour
    function tour(img, name, days, tourists, price) {
        this.img=img;
        this.name=name;
        this.days=days;
        this.tourists=tourists;
        this.price=price;}
    //Nút đặt hàng
    document.querySelector('[name="tour-submit"]').onclick=(e)=> {
        e.preventDefault();
        let tourImg, tourName, tourDays, tourists, tourPrice;
        if(isLogined()==0) return 0;
        if(isTourName()==0) return 0;
        if (isTourName() == 1) { 
            tourImg = 'tour00.webp';
            tourName = 'England';
            tourPrice = 2;} 
        else if (isTourName() == 2) {
            tourImg = 'tour01.webp';
            tourName = 'VietNam';
            tourPrice = 0.9;}
        else if (isTourName() == 3) {
            tourImg = 'tour02.webp';
            tourName = 'Australia';
            tourPrice = 2.5;} 
        else if (isTourName() == 4) {
            tourImg = 'tour03.webp';
            tourName = 'Maldives';
            tourPrice = 4;} 
        else if (isTourName() == 5) {
            tourImg = 'tour04.jpg';
            tourName = 'France';
            tourPrice = 1; }
        else if (isTourName() == 6) {
            tourImg = 'tour05.webp';
            tourName = 'China';
            tourPrice = 2.7;} 
        else if (isTourName() == 7) {
            tourImg = 'tour06.jpg';
            tourName = 'The USA';
            tourPrice = 3.6;}
        else if (isTourName() == 8) {
            tourImg = 'tour07.jpg';
            tourName = 'Japan';
            tourPrice = 3;} 
        else if (isTourName() == 9) {
            tourImg = 'tour08.webp';
            tourName = 'Iceland';
            tourPrice = 2.5;} 
        else if (isTourName() == 10) {
            tourImg = 'tour09.png';
            tourName = 'Italy';
            tourPrice = 2;}
        else if (isTourName() == 11) {
            tourImg = 'tour10.webp';
            tourName = 'Peru';
            tourPrice = 1.8; } 
        else if (isTourName() == 12) {
            tourImg = 'tour11.jpg';
            tourName = 'Morocco';
            tourPrice = 1.5;} 
        if(isTourDays()==0) return 0;
        else tourDays=isTourDays();
        if(isTourists()==0) return 0;
        else tourists=isTourists();
        document.querySelector('#tour-order-form form div:last-child').innerHTML=`<label class="blue-words"> Bạn đã đặt tour ${tourName} cho ${tourists} người ${tourDays} ngày </label>`;
        tourPrice=tourPrice*parseFloat(tourDays)*parseFloat(tourists);
        var newTour=new tour(tourImg, tourName, tourDays, tourists, tourPrice),
            countTour=parseInt(localStorage.getItem('count-tours'));
        localStorage.setItem(`tour${countTour}`, JSON.stringify(newTour));
        countTour=countTour+1;
        localStorage.setItem('count-tours',countTour);}
    //Nút giỏ hàng
    document.querySelector('[name="open-cart"]').onclick=(e)=>{
        if(isLogined()==0) return 0;
        window.location.href='giohang.html';}}
//Xem tour
var temp=-1;
function selectTour(i) {
    if(temp>-1) document.querySelectorAll('.animate__fadeIn')[temp].style.display='none';
    document.querySelector('#tour-selected-container h1:nth-child(1)').style.display='none';
    document.querySelector('#tour-selected-container hr:nth-child(2)').style.display='none';
    document.querySelector('#tour-selected-false').style.display='none';
    document.querySelector('#tour-selected-container h1:nth-child(3)').style.display='block';
    document.querySelector('#tour-selected-container hr:nth-child(4)').style.display='block';
    document.querySelectorAll('.animate__fadeIn')[i].style.display='grid';
    document.querySelector('#tour-selected-container h1:nth-child(3)').scrollIntoView({behavior:'smooth'});
    temp=i;}
//Chọn tour 
function orderTour(i) {
    document.querySelector('select').value=i;
    window.scrollTo({
        top:0,
        behavior: 'smooth'});}
        
//---------TRANG-GIỎ-HÀNG----------//
if(document.querySelector("#cart")) {
    //Hiển thị đơn hàng
    showCart();
    //Nút đặt hàng
    document.querySelector('#cart-table-foot').onclick=()=> {
        localStorage.clear();
        localStorage.setItem('count-tours',0);
        localStorage.setItem('contain-login',1);
        alert('Đặt tour thành công')
        showCart();}}
//Hiển thị giỏ hàng khi mở nhiều tab
window.onstorage=()=>showCart();
//Hàm hiển thị đơn hàng
function showCart() {
    var stringCart='', totalPrice=0, key, value, countTour;
    for (let i=0; i<localStorage.length; i++) {
        key=localStorage.key(i);
        if(!key.includes('count')&&!key.includes('login')) {
            value=JSON.parse(localStorage.getItem(key));
            stringCart=stringCart+`
                <div class="tour" id="${key}"> 
                    <div>
                        <img src="${value.img}" alt="${value.img}">
                    </div>
                    <div>
                        <h2 class="blue-words">${value.name}</h2>
                        <p>${value.days} ngày</p>
                    </div>
                    <div>
                        <button class="white-background" type="button" onclick="decreaseCart('${key}')"><i class="fa-solid fa-minus"></i></button>
                        <label>${value.tourists} khách</label>
                        <button class="white-background" type="button" onclick="increaseCart('${key}')"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div>
                        <p class="blue-words"><span>${Math.round(value.price*100)/100}M VNĐ<span></p>
                    </div>
                    <div>
                        <button class="white-background"><i class="fa-solid fa-trash" onclick="removeCart('${key}')"></i></button>
                    </div>
                </div>`;
        totalPrice=totalPrice+parseFloat(value.price);}}
    countTour=localStorage.getItem('count-tours');
    if(countTour<=1) document.querySelector('#cart-table-head h2').innerHTML=`${countTour} tour`;
    else document.querySelector('#cart-table-head h2').innerHTML=`${countTour} tours`
    document.querySelector('#cart-table-body').innerHTML=stringCart;
    document.querySelector('#cart-table-foot h1').innerHTML=`Tổng: <span style="margin-right: 10px;">${Math.round(totalPrice*100)/100}M VNĐ</span>`;}
//Hàm xóa đơn hàng 
function removeCart(key) {
    let countTour=localStorage.getItem('count-tours');
    countTour=countTour-1;
    localStorage.setItem('count-tours',countTour)
    localStorage.removeItem(key);
    showCart();}
//Hàm tăng lượng khách
function increaseCart(key) {
    let value=JSON.parse(localStorage.getItem(key));
    value.tourists=parseInt(value.tourists)+1;
    if(value.tourists==101) return 0;
    value.price=parseFloat(value.price)/(value.tourists-1)*(value.tourists);
    localStorage.setItem(key, JSON.stringify(value));
    showCart();}
//Hàm giảm lượng khách
function decreaseCart(key) {
    let value=JSON.parse(localStorage.getItem(key));
    value.tourists=parseInt(value.tourists)-1;
    if(value.tourists==0) return 0;
    value.price=parseFloat(value.price)/(value.tourists+1)*(value.tourists);
    localStorage.setItem(key, JSON.stringify(value));
    showCart();}

//----------HEADER-&-FOOTER----------//
//Hiệu ứng của nav
window.onscroll=()=> {
    if (document.documentElement.scrollTop > 20) document.querySelector('nav').classList.add('blue-background');
    else document.querySelector('nav').classList.remove('blue-background');}
//Responsive menu
document.querySelector('nav ul li:last-child').onmouseover=()=> {
    document.querySelector('nav section').style.transform='translate(-200px,0px)';
    document.querySelector('.fa-bars').style.transform='rotate(90deg)';}
document.querySelector('nav ul li:last-child').onmouseleave=()=> {
    document.querySelector('nav section').style.transform='translate(0px,0px)';
    document.querySelector('.fa-bars').style.transform='rotate(0deg)';}
//Hiệu ứng cuộn lên
document.querySelector('footer div:nth-child(1) img').onclick=()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'});}
//Trạng thái đăng nhập
document.querySelector('nav div:nth-child(2)').onclick=()=>{
    localStorage.setItem('contain-login', 0);
    window.location.href='dangnhap.html';}
if(localStorage.getItem('contain-login')==1) document.querySelector('nav div:nth-child(2)').style.visibility='visible';
else document.querySelector('nav div:nth-child(2)').style.visibility='hidden';