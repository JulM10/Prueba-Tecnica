import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";

const AddMovie = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [starring, setStarring] = useState("");
	const [movieId, setMovieId] = useState(null);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		refreshMovies();
	}, []);

	const refreshMovies = () => {
		API.get("/")
			.then((res) => {
				setMovies(res.data);
			})
			.catch(console.error);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let item = { name, genre, starring };
		API.post("/", item).then(() => refreshMovies());
	};

	const onUpdate = (id) => {
		let item = { name };
		API.patch(`/${id}/`, item).then((res) => refreshMovies());
	};

	const onDelete = (id) => {
		API.delete(`/${id}/`).then((res) => refreshMovies());
	};

	function selectMovie(id) {
		let item = movies.filter((movie) => movie.id === id)[0];
		setName(item.name);
		setGenre(item.genre);
		setStarring(item.starring);
		setMovieId(item.id);
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-4">
					<h3 className="float-left">Cargar al sistema una nueva pelicula</h3>
					<Form onSubmit={onSubmit} className="mt-4">
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>{movieId}Nombre de la pelicula</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingresar Nombre"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicGenre">
							<Form.Label>Genero</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingresar genero"
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicStarring">
							<Form.Label>Director</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingresar Nombre del director"
								value={starring}
								onChange={(e) => setStarring(e.target.value)}
							/>
						</Form.Group>

						<div className="float-right">
							<Button
								variant="primary"
								type="submit"
								onClick={onSubmit}
								className="mx-2"
							>
								Guardar
							</Button>
							<Button
								variant="primary"
								type="button"
								onClick={() => onUpdate(movieId)}
								className="mx-2"
							>
								Actualizar
							</Button>
						</div>
					</Form>
				</div>
				<div className="col-md-8 m">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nombre de la pelicula</th>
								<th scope="col">Genero</th>
								<th scope="col">Director de la pelicula</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{movies.map((movie, index) => {
								return (
									<tr key="">
										<th scope="row">{movie.id} </th>
										<td> {movie.name}</td>
										<td>{movie.genre}</td>
										<td>{movie.starring}</td>
										<td>
											<button
												aria-hidden="true"
												onClick={() => selectMovie(movie.id)}
											>
												Seleccionar
											</button>
											<button
												aria-hidden="true"
												onClick={() => onDelete(movie.id)}
											>
												Borrar
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AddMovie;
