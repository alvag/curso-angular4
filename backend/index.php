<?php 
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root', '', 'curso_angular4');

//configuracion de cabeceras
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$app->get("/pruebas", function() use($app, $db){
	echo "Hola Mundo desde Slim PHP";	
});

//guadar productos
$app->post('/productos', function() use($app, $db){
	$json = $app->request->post('json');
	$data = json_decode($json, true);

	if (!isset($data['imagen'])) {
		$data['imagen'] = null;
	}

	if (!isset($data['descripcion'])) {
		$data['descripcion'] = null;
	}
	
	$query = "insert into productos values(null,'".$data['nombre']."', '".$data['descripcion']."', '".$data['precio']."', '".$data['imagen']."');";

	$insert = $db->query($query);

	if ($insert) {
		$result = array(
			'status' => "success",
			'code' => 200,
			'mensaje' => 'Producto creado correctamente'
			);
	} else {
		$result = array(
			'status' => "error",
			'code' => 404,
			'mensaje' => 'Error en la transacción'
			);
	}

	echo json_encode($result);

});

//listar todos los productos

$app->get('/productos', function() use($app, $db){
	$sql = "select * from productos order by id desc";
	$query = $db->query($sql);

	$productos = array();
	while ($producto = $query->fetch_assoc()) {
		array_push($productos, $producto);
	}

	echo json_encode($productos);
});

//obtener un solo producto
$app->get('/producto/:id', function($id) use($app, $db){	
	$sql = 'select * from productos where id ='. $id;
	$query = $db->query($sql);	

	if ($query->num_rows == 1) {
		$producto = $query->fetch_assoc();

		$result = array(
			'status' => "success",
			'code' => 200,
			'producto' => $producto
			);

	} else {

		$result = array(
			'status' => "error",
			'code' => 404,
			'mensaje' => 'Producto no disponible'	
			);
	}

	echo json_encode($result);
});


//eliminar un producto
$app->get('/delete/:id', function($id) use($app, $db){	
	$sql = 'delete from productos where id ='. $id;
	$query = $db->query($sql);	

	if ($query) {		

		$result = array(
			'status' => "success",
			'code' => 200,
			'mensaje' => 'Producto eliminado'
			);

	} else {

		$result = array(
			'status' => "error",
			'code' => 404,
			'mensaje' => 'Error en la transacción'	
			);
	}

	echo json_encode($result);
});

//actualizar un producto
$app->post('/update/:id', function($id) use($app, $db){	
	$json = $app->request->post('json');
	$data = json_decode($json, true);
	
	$sql = "update productos set nombre ='{$data['nombre']}', descripcion ='{$data['descripcion']}', ";
	if (isset($data['imagen'])) {
		$sql .= "imagen = '{$data['imagen']}', ";
	}
	$sql .= "precio ='{$data['precio']}' where id = {$id}";	
	
	$query = $db->query($sql);	


	if ($query) {		

		$result = array(
			'status' => "success",
			'code' => 200,
			'mensaje' => 'Producto actualizado'
			);

	} else {

		$result = array(
			'status' => "error",
			'code' => 404,
			'mensaje' => 'Error en la transacción'	
			);
	}

	echo json_encode($result);
});

//subir una imagen a un producto
$app->post('/upload-file', function() use($app, $db){

	if (isset($_FILES['imagen'])) {

		$uploader = new PiramideUploader();

		$upload = $uploader->upload('image', 'imagen', 'uploads', array('image/jpeg', 'image/png', 'image/gif'));
		$file = $uploader->getInfoFile();
		$file_name = $file['complete_name'];

		if (isset($upload) && $upload['uploaded'] == false) {
			$result = array(
				'status' => "error",
				'code' => 404,
				'mensaje' => 'Error al subir el archivo'	
			);	
		} else {
			$result = array(
				'status' => "success",
				'code' => 200,
				'mensaje' => 'El archivo se ha subido',
				'filename' => $file_name
				);	
		}
	}

	echo json_encode($result);

});

$app->run();