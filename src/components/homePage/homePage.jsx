import React, { useState } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components';
import $ from 'jquery';
import { Checkbox } from '@material-ui/core';

const Container = styled.div`
	width: 80%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
`;

export default function HomePage() {
	const data = [
		{ id: 1, name: 'Juan Biantong', sector: 4, penatua: 0, diaken: 0 },
		{ id: 2, name: 'Michael Daud Toda', sector: 4, penatua: 0, diaken: 0 },
		{ id: 3, name: 'Nataniel Rantetampang', sector: 2, penatua: 0, diaken: 0 },
		{ id: 4, name: 'Pryanza Putra Sampeurang', sector: 1, penatua: 0, diaken: 0 },
	];
	

	let [isChecked, setChecked] = useState({
		checked: false,
	});
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
		console.log(data)
	};

	const handleSubmit = (even) => {
		even.prevenDefault();
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
				<button type="submit" onSubmit={handleSubmit} color="">
					Pilih
				</button>
			</Container>
		</>
	);
}
