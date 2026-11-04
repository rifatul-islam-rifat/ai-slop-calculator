// ১. ব্রাউজারের স্ক্রিনটাকে ধরে একটা ভেরিয়েবল বা বাক্সে রাখলাম
const display = document.getElementById('display');

// ২. যেকোনো বাটনে চাপ দিলে সেই সংখ্যা বা চিহ্ন স্ক্রিনে যোগ করার ফাংশন
function appendValue(input) {
  // আগের লেখার সাথে নতুন টিপা সংখ্যাটি জোড়া লাগিয়ে দাও
  display.value = display.value + input;
}

// ৩. 'C' (Clear) বাটনে চাপ দিলে স্ক্রিন একদম খালি করে দেওয়ার ফাংশন
function clearDisplay() {
  display.value = "";
}

// ৪. 'DEL' বাটনে চাপ দিলে শেষের ১টি সংখ্যা মুছে ফেলার ফাংশন
function deleteLast() {
  // slice(0, -1) মানে হলো শেষ অক্ষরের আগ পর্যন্ত নিয়ে বাকিটা কেটে ফেলা
  display.value = display.value.slice(0, -1);
}

// ৫. '=' বাটনে চাপ দিলে আসল হিসাব-নিকাশ করার ফাংশন
function calculate() {
  try {
    // eval() আপনার দেওয়া গাণিতিক সমীকরণ যেমন ("5+5") বুঝে সেটার উত্তর (10) বের করে দেয়
    display.value = eval(display.value);
  } catch (error) {
    // যদি ভুলভাল কিছু টিপে সমান সমান মারে (যেমন: 5++2), তবে Error দেখাবে
    display.value = "Error!";
  }
}