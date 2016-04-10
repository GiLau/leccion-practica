var estudiante = [];
estudiante.push(["Nombre:Gina", "Genero: femenino", "Edad: 30" , "ArregloDeNotas: 30, 80, 70" , "Cuidad: playas" , "Lenguaje: JS" , "EstaTrabajando: No" ]);
estudiante.push(["Nombre:Juanita", "Genero: femenino", "Edad: 25" , "ArregloDeNotas: 20, 80, 90" , "Cuidad: Guayaquil" , "Lenguaje: Json" , "EstaTrabajando: Si" ]);
estudiante.push(["Nombre:Manuel", "Genero: Masculino", "Edad: 21" , "ArregloDeNotas: 50, 10, 50" , "Cuidad: Quevedo" , "Lenguaje: c++" , "EstaTrabajando: No" ]);
estudiante.push(["Nombre:Gabriel", "Genero: Masculino", "Edad: 28" , "ArregloDeNotas: 30, 60, 70" , "Cuidad: Tenguel" , "Lenguaje: Java" , "EstaTrabajando: No" ]);
estudiante.push(["Nombre:Ines", "Genero: femenino", "Edad: 27" , "ArregloDeNotas: 30, 50, 90" , "Cuidad: Manabi" , "Lenguaje: Visual" , "EstaTrabajando: Si" ]);





function printList(list)
{
	var listHTML = '<ul>';
	for (var i = 0; i < list.length; i += 1)
	{
		listHTML += '<li>'+ list[i][0] + '</li>';
		listHTML += '<li>'+ list[i][1] + '</li>';
		listHTML += '<li>'+ list[i][2] + '</li>';
		listHTML += '<li>'+ list[i][3] + '</li>';
		listHTML += '<li>'+ list[i][4] + '</li>';
		listHTML += '<li>'+ list[i][5] + '</li>';
		listHTML += '<li>'+ list[i][6] + '</li>'; 
	}
	listHTML += '</ul>';
	print(listHTML);
}
function print(html)
{
	document.write(html);
}

printList(estudiante);


