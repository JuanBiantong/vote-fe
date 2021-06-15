import React, { Fragment } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const Container = styled.div`
	width: 98%;
	/* height: 100vh; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	padding: 2%;
	font-size: 12px;
`;

export default function HomePage() {
	const data = [
		{ id: 1, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 2, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 3, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 4, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 5, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 6, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 7, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 8, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 9, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 10, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 11, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 12, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 13, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 14, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 15, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 16, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 17, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 18, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 19, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 20, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 21, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 22, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 23, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 24, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 25, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 26, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 27, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 28, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
		{ id: 29, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 30, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 31, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 32, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
	];

	const handleCheckbox = (even) => {
		console.log(even.target.value);
		data.map((d) => {
			if (`${d.id}a` === even.target.name) {
				if (even.target.value === 'penatua' && even.target.checked) {
					d.penatua = 1;
					d.diaken = 0;
				} else {
					d.penatua = 0;
				}
			}
			if (`${d.id}b` === even.target.name) {
				if (even.target.value === 'diaken' && even.target.checked) {
					d.diaken = 1;
					d.penatua = 0;
				} else {
					d.diaken = 0;
				}
			}
			return d;
		});
		console.log(data);
	};

	data.map((d) => {
		return $(function () {
			$(`.${d.id}vote`).click(function (e) {
				$(`.${d.id}vote`).not(this).prop('checked', false);
			});
		});
	});
	$(document).ready(function () {
		$('#myInput').on('keyup', function () {
			var value = $(this).val().toLowerCase();
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		});
	});
	return (
		<>
			<Container>
				<h2>Daftar Calon Majelis</h2>
				<input className="form-control" id="myInput" type="text" placeholder="Cari nama atau sektor calon.." />
				<br />
				<table className="table table-bordered table-striped table-sm">
					<thead>
						<tr>
							<th>No</th>
							<th>Nama Lengkap</th>
							<th>Sektor</th>
							<th>Jabatan</th>
						</tr>
					</thead>
					<tbody id="myTable">
							{data.map((item, i) => {
								return (
									<Fragment key={i}>
										<tr>
											<td>{item.id}</td>
											<td>{item.name}</td>
											<td>{item.sector}</td>
											<td>
												<form>
													<input
														type="checkbox"
														name={`${item.id}a`}
														onChange={handleCheckbox}
														className={`${item.id}vote`}
														value="penatua"
													/>
													<label>&nbsp;Panatua</label>
													<br />
													<input
														type="checkbox"
														name={`${item.id}b`}
														onChange={handleCheckbox}
														className={`${item.id}vote`}
														value="diaken"
													/>
													<label>&nbsp;Diaken</label>
												</form>
											</td>
										</tr>
									</Fragment>
								);
							})}
						</tbody>
				</table>
			</Container>
		</>
	);
}
