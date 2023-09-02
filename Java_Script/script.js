const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// At এর কাজ হলো নম্বর অনুযায়ী পসিশন বের করে দেয়
let atwork = text.at(6);
console.log(atwork);

//concat এর কাজ হলো দুইটি স্ট্রিং কে যোগ করা বা অ্যাড করা
let a = "Md Parvez";
let b = "Mosharrof";
let c = "Mitul";
let concatwork = a.concat(' ', b, ' ', c);
console.log(concatwork);

//includes এর কাজ হলো কোনো একটা ওয়ার্ড ওই ভ্যারিয়েবল এ আছে কিনা তা বের করা
let inchudeswork = "mitul";
console.log(`The word "${inchudeswork}" ${text.includes(inchudeswork) ? "is" : "is not"} in the sentence.`);

//indexOf এর কাজ হলো কোনো একটা ওয়ার্ড ওই ভ্যারিয়েবল এর কোন জায়গায় আছে সেটা বের করা
let indexOfwork = "simply";
let indexOfwork1 = text.indexOf(indexOfwork);
console.log(indexOfwork1);
console.log(text.indexOf(indexOfwork, indexOfwork1 +1));

//lastIndexOf এর কাজ হলো কোনো একটা ওয়ার্ড ওই ভ্যারিয়েবল এর কোন জায়গায় আছে সেটা বের করা
let lastindexOfwork = "Lorem";
let lastindexOfwork1 = text.lastIndexOf(lastindexOfwork);
console.log(lastindexOfwork1);

// match
let matchwork = /L/g;
let matchlength = text.match(matchwork);
console.log(text.match(matchwork));
console.log(matchlength.length);

//repeat 
let reapeatWork = "Hello world!";
let result = reapeatWork.repeat(4);
console.log(result);

//replace 
let replaceResult = reapeatWork.replace("Hello", "Welcome to the");
console.log(replaceResult);

//search 
let position = text.search("simply");
console.log(position);
