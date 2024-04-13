
/**
 * Update Pageviews and amtPerMonth based on 
 * slider movement
 */
const pricing = [
    {pageViews: "10K", amtPerMonth: "$7.00", discountPerMonth: "$5.25"},
    {pageViews: "50K", amtPerMonth: "$11.00", discountPerMonth: "$8.25"},
    {pageViews: "100K", amtPerMonth: "$16.00", discountPerMonth: "$12.00"},
    {pageViews: "500K", amtPerMonth: "$22.00", discountPerMonth: "$16.50"},
    {pageViews: "1M", amtPerMonth: "$29.00", discountPerMonth: "$21.75"}
]

const pageViews = document.getElementById('pageViews');
const amtPerMonth = document.getElementById('amtPerMonth');

const changeAmt = document.getElementById('amtChanger');
const toggleBilling = document.getElementById('toggle');

changeAmt.onpointermove = (e) => {
    let price = e.currentTarget.value;

    if(!toggleBilling.checked){
        pageViews.innerHTML = pricing[price].pageViews;
        amtPerMonth.innerHTML = pricing[price].amtPerMonth;
    } else {
        pageViews.innerHTML = pricing[price].pageViews;
        amtPerMonth.innerHTML = pricing[price].discountPerMonth;
    }   
}
/**
 * Change Amt Per Month Location based on screen size
 */
var width = window.innerWidth;


const slider = document.getElementById('slider');
const topCard = document.getElementById('topCard');
const cardHeader = document.getElementById('cardHeader');

window.onresize = (e) => {
    
    width = e.currentTarget.innerWidth;

    if(width >= 768){
        topCard.insertBefore(slider,topCard.childNodes[3]);
    }

    if(width < 768){
        cardHeader.insertBefore(slider, cardHeader.childNodes[3]);
    }
}
