console.log('Now you are online');

let sampleDataBox = document.getElementById('sampleData');
const btn = document.getElementById('btn');
const typebox = document.getElementById('typeBox');
let startTime,endTime;

const sampleData = ['dog cat cow now ret set bet net box sad hen men gun pan sun bun man tan ran wet pot top sop mop nop bop cop rap par hop pog fog god sit wit tis pal lap maw met bet bit big bat ban dab dam ack act add ado ads las lay lin low lox mad mag map mas mun nil nim ich ick imu ire rim red eye sen sig sin sit sny tee tel the til tin vai ego erg exy der die dig dim din dog dry her hod hog zax yex you win win wok cel','dog cat cow now ret set bet net box sad hen men gun pan sun bun man tan ran wet pot top sop mop nop bop cop rap par hop pog fog god sit wit tis pal lap maw met bet bit big bat ban dab dam ack act add ado ads las lay lin low lox mad mag map mas mun nil nim ich ick imu ire rim red eye sen sig sin sit sny tee tel the til tin vai ego erg exy der die dig dim din dog dry her hod hog zax yex you win win wok cel','A mobile phone, cell phone, cellphone, or hand phone, sometimes shortened to simply mobile, cell or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area. The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network ','The origins of the Internet date back to research commissioned by the federal government of the United States in the 1960s to build robust, fault-tolerant communication with computer networks.[1] The primary precursor network, the ARPANET, initially served as a backbone for interconnection of regional academic and military networks in the 1980s.','A programming language is a formal language, which comprises a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions, rather than general programming languages.','ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. The ZIP file format permits a number of compression algorithms, though DEFLATE is the most common. This format was originally created in 1989 and released to the public domain on February 14, 1989 by Phil Katz, and was first implemented in PKWARE, PKZIP utility,[2] as a replacement for the previous ARC compression format by Thom Henderson.'];

sampleDataBox.className = 'hide';

btn.addEventListener('click',()=>{
   
if(btn.innerText== "Start"){
    btn.innerText  = "Done";
    setTimeout(()=>{btn.innerText = "Submit"},3000)
    startTime = new Date;
    startTime = startTime.getTime();
    sampleDataBox.className = '';
    sampleDataBox.innerText = sampleData[Math.floor(Math.random()*sampleData.length)]; 
}

else{
    typebox.className = 'hide';
    btn.className = 'hide';
    sampleDataBox.setAttribute('style','height:auto');
    endTime = new Date;
    endTime = endTime.getTime();
    let typedText = typebox.value;
    typedText = typedText.split(" ");
    let givenText = sampleDataBox.innerText.split(" ");

    let correctWord = 0;
    let writtenWord = typedText.length;
    let totalWord = givenText.length;

    
    givenText.forEach((data,index)=>{
        if(data == typedText[index]){
            correctWord++;   
        }
       
    });

    let wrongWord = writtenWord - correctWord;
    let timeConsumed = (endTime - startTime)/1000;
    let speed = Math.round((writtenWord/timeConsumed)*60);
    let errorlessSpeed = Math.round((correctWord/timeConsumed)*60);

    sampleDataBox.innerHTML = `<h1><strong>Congratulations!</strong></h1>Your Typing speed is ${speed} words per minute.<br><h2>Summary:</h2>Total words typed - ${writtenWord} (${correctWord} correct,${wrongWord} wrong)<br>Typing speed without error ${errorlessSpeed} words per minute<br>Typing speed with error - ${speed} words per minute`;
    
}
});
typebox.addEventListener('click',()=>{
    btn.innerText  = "Done";
    setTimeout(()=>{btn.innerText = "Submit"},3000)
    startTime = new Date;
    startTime = startTime.getTime();
    sampleDataBox.className = '';
    sampleDataBox.innerText = sampleData[Math.floor(Math.random()*sampleData.length)]; 
})









// console.log(Math.round(Math.random()*sampleData.length))
    // console.log(sampleDataBox.innerText);
    // console.log(sampleDataBox[Math.round(Math.random()*sampleData.length)])


    // console.log(Math.random())
    // console.log(sampleData.length)
    // console.log(Math.random()*sampleData.length)
    // console.log(Math.round(Math.random()*sampleData.length))
    // console.log(sampleDataBox[1])