
/**
 * Update Pageviews and amtPerMonth based on 
 * slider movement
 */
const pricing = [
    {pageViews: "10K", amtPerMonth: "$7.00"},
    {pageViews: "50K", amtPerMonth: "$11.00"},
    {pageViews: "100K", amtPerMonth: "$16.00"},
    {pageViews: "500K", amtPerMonth: "$22.00"},
    {pageViews: "1M", amtPerMonth: "$29.00"}
]


const pageViews = document.getElementById('pageViews');
const amtPerMonth = document.getElementById('amtPerMonth');

const slider = document.getElementById('amtChanger');

slider.onchange = (e) => {
    let price = e.currentTarget.value;

    pageViews.innerHTML = pricing[price].pageViews;
    amtPerMonth.innerHTML = pricing[price].amtPerMonth;
}


/**
 * Change Amt Per Month Location based on screen size
 */
var width = window.innerWidth;

const cardHeader = document.getElementById('cardHeader');
const monthAmt = document.getElementById('monthAmt');

window.onresize = (e) => {
    
    width = e.currentTarget.innerWidth;

    if(width >= 768){
        cardHeader.insertBefore(monthAmt, cardHeader.childNodes[3]);
    }

    if(width < 768){
        cardHeader.append(monthAmt);
    }
}
