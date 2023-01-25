Add = () =>{
	clone = document.querySelector(".inputUnic").cloneNode(true);
	add = document.querySelector("#Store");
	add.appendChild(clone);};
Save = () =>{
	let nodes = document.querySelector('.extraInput');
	console.log(parent.nodes[0].textContent);
};
Up=(me)=>{
	elem = me.parentElement.previousElementSibling;
	if(elem)
		me.parentElement.after(elem);
};
Down=(me)=>{
	elem = me.parentElement.nextElementSibling;
	if(elem)
		me.parentElement.before(elem);
};
Delete=(me)=>{
	me.parentElement.remove();
};
Save=(rez) =>{
	rez = document.querySelector("#"+ rez);
	nameID = document.querySelectorAll(".nameID");
	num = document.querySelectorAll(".num");
	arr=[];
	for(var i=1;i<nameID.length;i++){
		arr.push(nameID[i].value+":"+num[i].value);
	}
	console.log(JSON.stringify(arr));
	arr=JSON.stringify(arr);
	arr='{'+arr.slice(1,arr.length-1)+'}';
	rez.innerHTML=arr;
};