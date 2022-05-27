var renderer, scene, camera;

var ar_source, ar_context;

function on_resize()
{
	ar_source.onResizeElement();
	ar_source.copyElementSizeTo(renderer.domElement);
	
	if(ar_context.arController !== null)
		ar_source.copyElementSizeTo(ar_context.arController.canvas);
}


function init()
{
	scene = new THREE.Scene();
	camera = new THREE.Camera();
	const light = new THREE.AmbientLight( 0xcccccc ); // soft white light
	scene.add( light );

	renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.setSize( window.innerWidth=1280, window.innerHeight=720);//innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);

	ar_source = new THREEx.ArToolkitSource({sourceType: 'webcam', sourceWidth: 1280, sourceHeight: 720});
	ar_source.init(on_resize);
	console.log(ar_source);

	window.addEventListener("resize", on_resize);

	ar_context = new THREEx.ArToolkitContext({
		detectionMode: 'mono', 
		cameraParam: "https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/data/camera_para.dat"
	});

	ar_context.init(function on_complete(){
		camera.projectionMatrix.copy(ar_context.getProjectionMatrix());
	});
	console.log(ar_context);

	group2 = new THREE.Group();
	scene.add(group2);
	
	var marker2=new THREEx.ArMarkerControls(ar_context, group2, {
		type: "pattern",
		patternUrl: "https://raw.githubusercontent.com/GeydarovaEsmira/markers/main/pattern-%D0%9C%D0%B0%D1%80%D1%96%D0%BE.patt"
	});


	var loader = new THREE.TextureLoader();
 


	const geometry1 = new THREE.BoxGeometry( 1, 1, 4 );
	const material1 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52055244372_7fdbefe484_b.jpg") } );
	const cube1 = new THREE.Mesh( geometry1, material1 );
	group2.add( cube1 );
	cube1.position.set(0, 0, 0);


	const geometry2 = new THREE.BoxGeometry( 1.1, 1.4, 1.4 );
	const material2 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056326373_7d9c94284e_b.jpg") } );
	const cube2 = new THREE.Mesh( geometry2, material2 );
	group2.add( cube2 );
	cube2.position.set(0, 0.2, -0.2);


	const geometry3 = new THREE.BoxGeometry( 0.9, 2, 1.6 );
	const material3 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056326373_7d9c94284e_b.jpg") } );
	const cube3 = new THREE.Mesh( geometry3, material3 );
	group2.add( cube3 );
	cube3.position.set(0, 0.5, 1.4);








	const geometry4 = new THREE.CylinderGeometry( 0.5, 0.5, 2.6, 40 );
	const material4 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52055235527_4dd46db502_b.jpg") } );
	const cube4 = new THREE.Mesh( geometry4, material4 );
	group2.add( cube4 );
	cube4.position.set(0, 0.8, 1.92);
	


	const geometry5 = new THREE.CylinderGeometry( 0.52, 0.52, 0.5, 40 );
	const material5 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube5 = new THREE.Mesh( geometry5, material5 );
	group2.add( cube5 );
	cube5.position.set(0, 1.8, 1.9);

	const geometry6 = new THREE.CylinderGeometry( 0.54, 0.54, 0.45, 40 );
	const material6 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52055244372_7fdbefe484_b.jpg") } );
	const cube6 = new THREE.Mesh( geometry6, material6 );
	group2.add( cube6 );
	cube6.position.set(0, 1.9, 1.9);

	const geometry7 = new THREE.CylinderGeometry( 0.56, 0.56, 0.5, 40 );
	const material7 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube7 = new THREE.Mesh( geometry7, material7 );
	group2.add( cube7 );
	cube7.position.set(0, 2, 1.9);
	

	const geometry8 = new THREE.ConeBufferGeometry( 0.56, 0.56, 50, 50 );
	const material8 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056326373_7d9c94284e_b.jpg") } );
	const cube8 = new THREE.Mesh( geometry8, material8 );
	group2.add( cube8 );
	cube8.position.set(0, 2.55, 1.9);





	const geometry20 = new THREE.CylinderGeometry( 0.02, 0.02, 1.5, 40 );
	const material20 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056326373_7d9c94284e_b.jpg") } );
	const cube20 = new THREE.Mesh( geometry20, material20 );
	group2.add( cube20 );
	cube20.position.set(0, 2.3, 1.9);















	const geometry9 = new THREE.BoxGeometry( 1.25, 0.25, 1.1);
	const material9 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube9 = new THREE.Mesh( geometry9, material9 );
	group2.add( cube9 );
	cube9.position.set(0, 0.6, -1.5);


	const geometry10 = new THREE.BoxGeometry( 1.25, 0.25, 1.45);
	const material10 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube10 = new THREE.Mesh( geometry10, material10 );
	group2.add( cube10 );
	cube10.position.set(0, 0.8, -0.2);


	const geometry11 = new THREE.BoxGeometry( 1.05, 0.25, 1.1);
	const material11 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube11 = new THREE.Mesh( geometry11, material11 );
	group2.add( cube11 );
	cube11.position.set(0, 1.5, 1.1);





	const geometry12 = new THREE.CylinderGeometry( 0.05, 0.05, 0.5, 40 );
	const material12 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube12 = new THREE.Mesh( geometry12, material12 );
	group2.add( cube12 );
	cube12.position.set(0.4, 1.95, 2.3);
	

	const geometry13 = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 40 );
	const material13 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube13 = new THREE.Mesh( geometry13, material13 );
	group2.add( cube13 );
	cube13.position.set(0.4, 1.95, 2.3);




	const geometry14 = new THREE.CylinderGeometry( 0.05, 0.05, 0.5, 40 );
	const material14 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube14 = new THREE.Mesh( geometry14, material14 );
	group2.add( cube14 );
	cube14.position.set(-0.4, 1.95, 2.3);
	

	const geometry15 = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 40 );
	const material15 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube15 = new THREE.Mesh( geometry15, material15 );
	group2.add( cube15 );
	cube15.position.set(-0.4, 1.95, 2.3);





	const geometry16 = new THREE.CylinderGeometry( 0.05, 0.05, 0.5, 40 );
	const material16 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube16 = new THREE.Mesh( geometry16, material16 );
	group2.add( cube16 );
	cube16.position.set(-0.4, 1.95, 1.5);
	

	const geometry17 = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 40 );
	const material17 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube17 = new THREE.Mesh( geometry17, material7 );
	group2.add( cube17 );
	cube17.position.set(-0.4, 1.95, 1.5);






	const geometry18 = new THREE.CylinderGeometry( 0.05, 0.05, 0.5, 40 );
	const material18 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube18 = new THREE.Mesh( geometry18, material18 );
	group2.add( cube18 );
	cube18.position.set(0.4, 1.95, 1.5);
	

	const geometry19 = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 40 );
	const material19 = new THREE.MeshBasicMaterial( { map: loader.load("https://live.staticflickr.com/65535/52056541539_0b4e879a29_b.jpg") } );
	const cube19 = new THREE.Mesh( geometry19, material9 );
	group2.add( cube19 );
	cube19.position.set(0.4, 1.95, 1.5);
}


function animate()
{
	requestAnimationFrame(animate);
	if(ar_source.ready !== false)
		ar_context.update(ar_source.domElement);
	renderer.render(scene, camera);
}
