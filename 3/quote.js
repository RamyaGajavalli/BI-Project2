const quote =[
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },
    {
        Quote:'The way to get started is to quit talking and begin doing.',
        Author:'Walt Disney'
    },
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },
    {
        Quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        Author:'Nelson Mandela'
    },

]
const body=document.body;
const randomcolour=`#${Math.floor(Math.random() * 100000)}`
body.style.backgroundColor=randomcolour
const GetQuote=document.getElementById('GetQuote');
GetQuote.style.backgroundColor=randomcolour
const quoteText=document.getElementById('Quote');
const quoteAuthor=document.getElementById('Author');
const getIndex=Math.floor(Math.random() * 10);
quoteText.innerHTML=`<i class="fas fa-quote-left"></i> ${quote[getIndex].quote} <i class="fas fa-quote-right"></i>`;
quoteAuthor.innerHTML=`-${quote[getIndex].Author}`;
function getNew