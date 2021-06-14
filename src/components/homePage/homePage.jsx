import React, { useState } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components';
import $ from 'jquery';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin: auto;
`;

export default function HomePage() {
	const data = [
		{ id: 1, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 2, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 3, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 4, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
	];

	const [jabatan, setJabatan] = useState({
		checkPenatua: 0,
		checkDiaken: 0,
	});
	const handleCheckbox = (even) => {
		if(even.target.value==='penatua' && even.target.checked){
			console.log(even.target.value);
		}
		if(even.target.value==='diaken' && even.target.checked){
			console.log(even.target.value);
		}
	};
	data.map((d) => {
		$(function () {
			$(`.${d.id}vote`).click(function (e) {
				$(`.${d.id}vote`).not(this).prop('checked', false);
			});
		});
	});
	return (
		<>
			<Container>
				<MaterialTable
					title=""
					columns={[
						{
							title: 'No',
							field: 'id',
							headerStyle: { boxSizing: 'border-box', maxWidth: 10 },
						},
						{
							title: 'Nama Lengkap',
							field: 'name',
							headerStyle: { maxWidth: 50 },
							cellStyle: { maxWidth: 50 },
						},
						{
							title: 'Sektor',
							field: 'sector',
							type: 'numeric',
							headerStyle: { width: 20 },
						},
						{
							title: 'Vote',
							field: 'vote',
							headerStyle: { width: 20 },
							render: (rowData) => (
								<form>
									<input
										type="checkbox"
										name={`${rowData.id}a`}
										onChange={handleCheckbox}
										className={`${rowData.id}vote`}
										value="penatua"
									/>
									<label>Panatua</label>
									<br />
									<input
										type="checkbox"
										name={`${rowData.id}b`}
										onChange={handleCheckbox}
										className={`${rowData.id}vote`}
										value="diaken"
									/>
									<label>Diaken</label>
								</form>
							),
						},
					]}
					data={data}
					options={{
						tableLayout: 'fixed',
					}}
				/>
				<span>{jabatan.checkPenatua}</span>
				<span>{jabatan.checkDiaken}</span>
			</Container>
		</>
	);
}
