var music = document.querySelector("#music");
var image = document.querySelector("#image");
var title = document.querySelector("#title");
var content = document.querySelector("#content");
var author = document.querySelector("#author");
var url = "https://talaikis.com/api/quotes/random/"; 

// Click events
$(".dot").click(function(){
	music1();
	getQuote();
});

$("#tab").click(function(){
	music2();
	getQuote();
});
$("#rightbracket").click(function(){
	music3();
	getQuote();
});

$("#leftbracket").click(function(){
	music4();
	getQuote();
});

$("#backslash").click(function(){
	music5();
	getQuote();
});
$("#caps").click(function(){
	music6();
	getQuote();
});

$("#semicolon").click(function(){
	music7();
	getQuote();
});

$("#apostrophe").click(function(){
	music8();
	getQuote();
});

$("#return").click(function(){
	music9();
	getQuote();
});

$("#shift").click(function(){
	music10();
	getQuote();
});

$("#comma").click(function(){
	music11();
	getQuote();
});

$("#period").click(function(){
	music12();
	getQuote();
});

$("#slash").click(function(){
	music13();
	getQuote();
});

$("#shiftright").click(function(){
	music14();
	getQuote();
});

$("#space").click(function(){
	music15();
	getQuote();
});

$("#subtract").click(function(){
	music16();
	getQuote();
});

$("#equal").click(function(){
	music17();
	getQuote();
});

$("#delete").click(function(){
	music18();
	getQuote();
});

$("#one").click(function(){
	music19();
	getQuote();
});

$("#two").click(function(){
	music20();
	getQuote();
});

$("#three").click(function(){
	music21();
	getQuote();
});
$("#four").click(function(){
	music22();
	getQuote();
});

$("#five").click(function(){
	music23();
	getQuote();
});

$("#six").click(function(){
	music24();
	getQuote();
});

$("#seven").click(function(){
	music25();
	getQuote();
});

$("#eight").click(function(){
	music26();
	getQuote();
});

$("#nine").click(function(){
	music27();
	getQuote();
});
$("#zero").click(function(){
	music28();
	getQuote();
});

$("#a").click(function(){
	music29();
	getQuote();
});

$("#b").click(function(){
	music30();
	getQuote();
});

$("#c").click(function(){
	music31();
	getQuote();
});

$("#d").click(function(){
	music32();
	getQuote();
});

$("#e").click(function(){
	music33();
	getQuote();
});

$("#f").click(function(){
	music34();
	getQuote();
});

$("#g").click(function(){
	music35();
	getQuote();
});

$("#h").click(function(){
	music36();
	getQuote();
});

$("#i").click(function(){
	music37();
	getQuote();
});
$("#j").click(function(){
	music38();
	getQuote();
});

$("#k").click(function(){
	music39();
	getQuote();
});

$("#l").click(function(){
	music40();
	getQuote();
});

$("#m").click(function(){
	music41();
	getQuote();
});

$("#n").click(function(){
	music42();
	getQuote();
});

$("#o").click(function(){
	music43();
	getQuote();
});
$("#p").click(function(){
	music44();
	getQuote();
});
$("#q").click(function(){
	music45();
	getQuote();
});

$("#r").click(function(){
	music46();
	getQuote();
});
$("#s").click(function(){
	music47();
	getQuote();
});

$("#t").click(function(){
	music48();
	getQuote();
});
$("#u").click(function(){
	music49();
	getQuote();
});
$("#v").click(function(){
	music50();
	getQuote();
});

$("#w").click(function(){
	music51();
	getQuote();
});
$("#x").click(function(){
	music52();
	getQuote();
});
$("#y").click(function(){
	music53();
	getQuote();
});

$("#z").click(function(){
	music54();
	getQuote();
});
// Keypress events

// Music and Quote Functions
function music1 (){
	music.src = "music/MAYDAY 五月天派對動物 Party Animal女生版.mp3"
	image.src = "image/0.jpg";
	title.innerHTML= "May Day";
}

function music2(){
	music.src = "music/Alan Walker - Faded.mp3"
	image.src = "https://images.unsplash.com/photo-1510546931017-b4d8d53499b8?auto=format&fit=crop&w=1051&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Faded";
}

function music3(){
	music.src = "music/Forget You - Cee Lo Green - .mp3"
	image.src = "https://images.unsplash.com/photo-1499845075997-66a4f1e175a7?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Forget You";	
}

function music4(){
	music.src = "music/I DON'T WANT TO MISS A THING .mp3"
	image.src = "https://images.unsplash.com/photo-1484328577761-18c07a30344a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "I Don't Want To Miss A Thing";
}

function music5(){
	music.src = "music/就讓這首歌.mp3"
	image.src = "https://images.unsplash.com/photo-1445821185708-62c36d070323?auto=format&fit=crop&w=1053&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "就讓這首歌";
}

function music6(){
	music.src = "music/Blow Me (One Last Kiss).mp3"
	image.src = "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Blow Me";
}

function music7(){
	music.src = "music/life.mp3"
	image.src = "https://images.unsplash.com/photo-1490152386913-312578b64fdc?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Life";
}

function music8(){
	music.src = "music/Otherside.mp3"
	image.src = "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Otherside";
}

function music9(){
	music.src = "music/Shamalama.mp3"
	image.src = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Shamalama";
}

function music10(){
	music.src = "music/Wind- Naruto Akeboshi - .mp3"
	image.src = "https://images.unsplash.com/photo-1510419868624-6d77ac25d3c8?auto=format&fit=crop&w=1073&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Wind";
}

function music11(){
	music.src = "music/Mr.lonely - Akon-.mp3"
	image.src = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Mr.lonely";
}

function music12(){
	music.src = "music/刘若英-当爱在靠近.mp3"
	image.src = "https://images.unsplash.com/photo-1510449194549-f48d75901680?auto=format&fit=crop&w=1051&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "当爱在靠近";
}

function music13(){
	music.src = "music/Bumble bee.mp3"
	image.src = "https://images.unsplash.com/photo-1510423579098-f47bf52b6764?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Bumble Bee";	
}

function music14(){
	music.src = "music/Free Loop - Daniel Powter.mp3"
	image.src = "https://images.unsplash.com/photo-1510382634072-9f8917f78e95?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Free Loop";	
}

function music15(){
	music.src = "music/Hallelujah.mp3"
	image.src = "https://images.unsplash.com/photo-1510194638421-92f54ce46444?auto=format&fit=crop&w=1106&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Hallelujah";
}

function music16(){
	music.src = "music/Buggles - Video Killed The Radio Star.mp3"
	image.src = "https://images.unsplash.com/photo-1510384742052-1abcb6282645?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Buggles";
}

function music17(){
	music.src = "music/G.E.M.【夜空中最亮的星】Official Audio [HD] 鄧紫棋.mp3"
	image.src = "https://images.unsplash.com/photo-1510307853572-cd978ae81304?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "夜空中最亮的星";
}

function music18(){
	music.src = "music/Starships - Nicki Minaj - .mp3"
	image.src = "https://images.unsplash.com/photo-1510163452159-0cf6774fc5cf?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Starships";	
}

function music19(){
	music.src = "music/1. No.1 - 西野カナフル.mp3"
	image.src = "image/1.jpg";
	title.innerHTML= "No.1 - 西野カナフル.mp3";
}

function music20(){
	music.src = "music/Have You Ever Seen The Rain.mp3"
	image.src = "image/12.jpg";
	title.innerHTML= "Have You Ever Seen The Rain";	
}

function music21(){
	music.src = "music/3月9日 - レミオロメン - .mp3"
	image.src = "https://images.unsplash.com/photo-1505284361246-cedb2a8d2986?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "3月9日";	
}

function music22(){
	music.src = "music/馮提莫我想對你說baby.mp3"
	image.src = "https://images.unsplash.com/photo-1496134732667-ae8d2853a045?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "馮提莫我想對你說baby";	
}

function music23(){
	music.src = "music/515YY.mp3"
	image.src = "https://images.unsplash.com/photo-1446923201163-edc1e4b2d85f?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "515YY";	
}

function music24(){
	music.src = "music/What Can I Do.mp3"
	image.src = "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1047&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "What Can I Do";	
}

function music25(){
	music.src = "music/Beautiful Girls - Sean Kingston - .mp3"
	image.src = "https://images.unsplash.com/photo-1467540826941-623d5627c80b?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Beautiful Girls";
}

function music26(){
	music.src = "music/Dwayne Johnson - You're Welcome.mp3"
	image.src = "https://images.unsplash.com/photo-1510496667864-dad10bbf57d9?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "You're Welcome";
}

function music27(){
	music.src = "music/99 Red Ball - 80's music - Nina Hagen- .mp3"
	image.src = "https://images.unsplash.com/photo-1486262322291-6f4dbcd69e10?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "99 Red Ball";
}

function music28(){
	music.src = "music/剛好遇見你馮提莫 動態歌詞高音質版 cover李玉剛.mp3"
	image.src = "https://images.unsplash.com/photo-1502143135356-dcdb8a9a3da6?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "剛好遇見你";	
}

function music29(){
	music.src = "music/A.mp3"
	image.src = "image/2.jpg";
	title.innerHTML= "Accidentally in Love";	
}

function music30(){
	music.src = "music/Burning.mp3";
	image.src = "image/3.jpg";
	title.innerHTML= "Burning";
}

function music31(){
	music.src = "music/Can.mp3";
	image.src = "image/4.jpg";
	title.innerHTML= "Can't Help Falling In Love";	
}

function music32(){
	music.src = "music/Diamonds.mp3";
	image.src = "image/5.jpg";
	title.innerHTML= "Diamonds";	
}

function music33(){
	music.src = "music/Eyes On Me.mp3";
	image.src = "image/9.jpg";
	title.innerHTML= "Eyes On Me";
}

function music34(){
	music.src = "music/Fallin.mp3";
	image.src = "image/10.jpg";
	title.innerHTML= "Fallin\'";	
}

function music35(){
	music.src = "music/Glass Concrete and Stone - David Byrne - .mp3";
	image.src = "image/11.jpg";
	title.innerHTML= "Glass Concrete and Stone";	
}

function music36(){
	music.src = "music/Halo.mp3";
	image.src = "image/12.jpg";
	title.innerHTML= "Diamonds";	
}

function music37(){
	music.src = "music/I was born to love you - queen .mp3";
	image.src = "image/15.jpg";
	title.innerHTML= "I was born to love you";	
}

function music38(){
	music.src = "music/Just Give Me A Reason - P!nk - .mp3";
	image.src = "image/16.jpg";
	title.innerHTML= "Just Give Me A Reason";
}

function music39(){
	music.src = "music/Kaze_ni_Naru - Neko_no_Ongaeshi_-_.mp3";
	image.src = "https://images.unsplash.com/photo-1510358981169-c387251d4239?auto=format&fit=crop&w=968&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Kaze Ni Naru";
}

function music40(){
	music.src = "music/La Da Dee - Cody Simpson   Lyrics on screen.mp3";
	image.src = "image/21.jpg";
	title.innerHTML= "La Da Dee";
}

function music41(){
	music.src = "music/Marry You - Bruno Mars Lyrics.mp3";
	image.src = "image/22.jpg";
	title.innerHTML= "Marry You";	
}

function music42(){
	music.src = "music/Nobody Said It Was Easy.mp3";
	image.src = "image/24.jpg";
	title.innerHTML= "Nobody Said It Was Easy";
}

function music43(){
	music.src = "music/Only You - Elvis Presley - .mp3";
	image.src = "image/25.jpg";
	title.innerHTML= "Only You";
}

function music44(){
	music.src = "music/Piano Man - Billy Joel - .mp3";
	image.src = "image/26.jpg";
	title.innerHTML= "Piano Man";
}

function music45(){
	music.src = "music/Quelqu'un M'a Dit.mp3";
	image.src = "image/27.jpg";
	title.innerHTML= "Quelqu'un M'a Dit";

}

function music46(){
	music.src = "music/Raindrops Keep Falling On My Head.mp3";
	image.src = "https://images.unsplash.com/photo-1510524763583-1d619c5db453?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Raindrops Keep Falling On My Head";	
}

function music47(){
	music.src = "music/Somewhere Over The Rainbow - Israel Kamakawiwo'ole - .mp3";
	image.src = "https://images.unsplash.com/photo-1444066078445-354f690600d1?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Somewhere Over The Rainbow";	
}

function music48(){
	music.src = "music/Take Me Home Country Roads.mp3";
	image.src = "https://images.unsplash.com/photo-1438777228915-f96d27311514?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Take Me Home Country Roads";	
}

function music49(){
	music.src = "music/Unchained Melody.mp3";
	image.src = "https://images.unsplash.com/photo-1431319076055-2754a86a1105?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Unchained Melody";	
}

function music50(){
	music.src = "music/Viva La Vida - Coldplay - .mp3";
	image.src = "https://images.unsplash.com/photo-1506254432071-fbd6b2829112?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Viva La Vida";	
}

function music51(){
	music.src = "music/What a Wonderful World.mp3";
	image.src = "https://images.unsplash.com/photo-1441555136638-e47c0158bfc9?auto=format&fit=crop&w=1053&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "What a Wonderful World";	
}

function music52(){
	music.src = "music/XO - Beyoncé - .mp3";
	image.src = "https://images.unsplash.com/photo-1444579084407-edbadf1d3795?auto=format&fit=crop&w=1089&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "XO";	
}

function music53(){
	music.src = "music/Yellow.mp3";
	image.src = "https://images.unsplash.com/photo-1436853023412-b2549836e196?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Yellow";
}

function music54(){
	music.src = "music/Zombie - The Cranberries - .mp3";
	image.src = "https://images.unsplash.com/photo-1506198957839-9c1ca8896c08?auto=format&fit=crop&w=1071&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	title.innerHTML= "Zombie";	
}

function getQuote() {
    $.getJSON(url)
      .done(function(data) {
        content.innerText = data.quote; 
        if (data.author){
            author.innerText =  "---" + data.author
        } else{
       author.innerText  = "---" + "Anonymous";
        } 
    })
  .fail(function(err){
      console.log(err);
    })

 }; 

     
      
