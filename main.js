// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadyststechange = function(){
// 		if(xhr.readyState === 4 && xhr.ststus == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	skillset(data.skills);
// 	achiveinfo(data.achivements);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

		}
		else
		{
			reject(new Error('error'));
		}
	})
})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationinfo(data.education);
	skillset(data.skills);
	achiveinfo(data.achivements);

})
var left = document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h3")
	name1.textContent = det.name;
	left.appendChild(name1);
	var pneno = document.createElement("h3")
	pneno.textContent = det.phoneno;
	left.appendChild(pneno);
	var email = document.createElement("a");
	email.href = "mailto:suprajakanagala@gmail.com";
	email.textContent = det.emailid;
	left.appendChild(email);
	var add = document.createElement("h2");
	add.textContent = "address";
	left.appendChild(add);
	var hrz = document.createElement("hr");
	left.appendChild(hrz); 
	var add = document.createElement("p");
	add.textContent = det.address;
	left.appendChild(add);
}
var right = document.querySelector(".right");
function careerinfo(ca){
	var career = document.createElement("h1");
	career.textContent = "career objective";
	right.appendChild(career);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var career1 = document.createElement("p");
	career1.textContent = ca.info;
	right.appendChild(career1);
}
	
function educationinfo(edu){
	var ed = document.createElement("h1");
	ed.textContent = "education qualifications";
	right.appendChild(ed);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var table1 = document.createElement("table");
	table1.border = "2";
	right.appendChild(table1);
	tabledata = "";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institue+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function skillset(skill){
	var sk = document.createElement("h1");
	sk.textContent = "techinacal skills";
	right.appendChild(sk);
	var hr = document.createElement("hr")
	right.appendChild(hr);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
	var ul = document.createElement("ul");
	var li = document.createElement("li");
	li.textContent = skill[i].info;
	ul.appendChild(li);
	right.appendChild(ul);
	}
}
	function achiveinfo(achive){
		var ac = document.createElement("h1");
		ac.textContent = "achivements";
		right.appendChild(ac);
		var hr = document.createElement("hr");
		right.appendChild(hr);
		for(i=0;i<achive.length;i++){
			var s = document.createElement("h3");
			s.textContent = achive[i].title;
			right.appendChild(s);
			var ul = document.createElement("ul");
			var li = document.createElement("li");	
			li.textContent = achive[i].title;
			ul.appendChild(li);
			right.appendChild(ul);
		}
	}
	function openpage(){
		window.open("resume.html","_self",true)
	}


