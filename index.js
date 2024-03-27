
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

const mobileDiscount = "25%";
const discount = "25% discount";

const pageViews = document.getElementById('pageViews');
const amtPerMonth = document.getElementById('amtPerMonth');

const slider = document.getElementById('slider');
const sliderPointer = document.getElementById('monthAmt');

sliderPointer.onchange = (e) => {
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
const topCard = document.getElementById('topCard');
const cardBilling = document.getElementById('cardBilling');

window.onresize = (e) => {
    
    width = e.currentTarget.innerWidth;

    if(width >= 768){
        topCard.insertBefore(slider,topCard.childNodes[3]);
    }

    if(width < 768){
        cardHeader.insertBefore(slider, cardHeader.childNodes[3]);
    }
}
