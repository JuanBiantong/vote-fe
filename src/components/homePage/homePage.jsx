import React, { useState } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components';

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
// [even.target.name]: even.target.checked
	const handleCheckbox = (even) => {
		let getId = data.map((el)=>{
			if(even.target.name === `${el.id}a`){
				console.log(even.target.name);
			}
			if(even.target.name === `${el.id}b`){
				console.log(even.target.name);
			}
		})
		setJabatan({ 
			...jabatan, getId: even.target.checked
			 });
	};
	console.log(jabatan);

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
									<input type="checkbox" name={`${rowData.id}a`} onChange={handleCheckbox} />
									<label>Panatua</label>
									<br />
									<input type="checkbox" name={`${rowData.id}b`} onChange={handleCheckbox} />
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