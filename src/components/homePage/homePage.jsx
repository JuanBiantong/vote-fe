import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitButton } from '../accountBox/common';
import $ from 'jquery';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	padding: 2%;
	font-size: 12px;
`;

const TopContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background: linear-gradient(50deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 20%, rgba(0, 212, 255, 1) 100%);
`;

const HeaderText = styled.h5`
	/* font-size: 30px; */
	font-weight: bolder;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
	margin: 0 auto;
`;

const Info = styled.div`
	width: 100%;
	/* outline: none; */
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-radius: 5px;
	font-size: 14px;
	margin-bottom: 2%;
	background: #f1f1f1;
`;

export const BoldLink = styled.li`
	font-size: 14px;
	color: rgba(9, 9, 121, 0.8);
	font-weight: bold;
	line-height: 100%;
	padding: 0.2rem;
`;

export const MutedLink = styled.span`
	font-size: 11px;
	color: #f1f1f1;
	font-weight: 500;
	font-style: italic;
	margin: 0;
	padding-bottom: 1em;
`;
export default function HomePage() {
	const backend = [
		{ id: 1, name: 'Benny Mathius Lotte', sector: 1, penatua: 0, diaken: 0 },
		{ id: 2, name: 'Nunuk Soraya', sector: 1, penatua: 0, diaken: 0 },
		{ id: 3, name: 'Benyamin Rande', sector: 1, penatua: 0, diaken: 0 },
		{ id: 4, name: 'Paulina Dwi Astuti M.', sector: 1, penatua: 0, diaken: 0 },
		{ id: 5, name: 'Bisara Keka', sector: 1, penatua: 0, diaken: 0 },
		{ id: 6, name: 'Ratte Datu', sector: 1, penatua: 0, diaken: 0 },
		{ id: 7, name: 'Christyani Rannu', sector: 1, penatua: 0, diaken: 0 },
		{ id: 8, name: 'Friska Febriyani', sector: 1, penatua: 0, diaken: 0 },
		{ id: 9, name: 'Daud K. Pirade', sector: 1, penatua: 0, diaken: 0 },
		{ id: 10, name: 'Dety D. Palimbong', sector: 1, penatua: 0, diaken: 0 },
		{ id: 11, name: 'Frederik Lolo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 12, name: 'Diana Papayungan', sector: 1, penatua: 0, diaken: 0 },
		{ id: 13, name: 'Krisna Perdana Lolo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 14, name: 'Chrys Adrian Lolo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 15, name: 'Maega Hartini', sector: 1, penatua: 0, diaken: 0 },
		{ id: 16, name: 'Abednego B.S.', sector: 1, penatua: 0, diaken: 0 },
		{ id: 17, name: 'Santi Jayani', sector: 1, penatua: 0, diaken: 0 },
		{ id: 18, name: 'Marthen Bulo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 19, name: 'Theodora S', sector: 1, penatua: 0, diaken: 0 },
		{ id: 20, name: 'Yessy Permata Bulo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 21, name: 'Mariliana Berlian Bulo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 22, name: 'Mariliana Berlian Bulo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 23, name: 'Yulin Tonapa', sector: 1, penatua: 0, diaken: 0 },
		{ id: 24, name: 'Mayfry Membia', sector: 1, penatua: 0, diaken: 0 },
		{ id: 25, name: 'Yohana Payung', sector: 1, penatua: 0, diaken: 0 },
		{ id: 26, name: 'Milky Y. Palimbong', sector: 1, penatua: 0, diaken: 0 },
		{ id: 27, name: 'Nikolas Manuk Allo', sector: 1, penatua: 0, diaken: 0 },
		{ id: 28, name: 'Otniel Omu Sumbung', sector: 1, penatua: 0, diaken: 0 },
		{ id: 29, name: 'Kurnielti Palisuan', sector: 1, penatua: 0, diaken: 0 },
		{ id: 30, name: 'Nielda Kezia Sumbung', sector: 1, penatua: 0, diaken: 0 },
		{ id: 31, name: 'Nielda Kezia Sumbung', sector: 1, penatua: 0, diaken: 0 },
		{ id: 32, name: 'Ny. Martha Paruru Salenda', sector: 1, penatua: 0, diaken: 0 },
	];
	const [data, setData] = useState(backend);

	let [statePenatua, setStatepenatua] = useState(0);
	let [stateDiaken, setStatediaken] = useState(0);

	const handleCheckbox = (even) => {
		data.map((d, index) => {
			if (`${d.id}a` === even.target.name) {
				let tmp_array = data;
				if (even.target.value === 'penatua' && even.target.checked) {
					// d.penatua = 1;
					// d.diaken = 0;
					tmp_array[index].penatua = 1;
					tmp_array[index].diaken = 0;
					setData(tmp_array);
				} else {
					// d.penatua = 0;
					tmp_array[index].penatua = 0;
					setData(tmp_array);
				}
				// console.log('Total Penatua', statePenatua)
			}
			if (`${d.id}b` === even.target.name) {
				let tmp_array = data;
				if (even.target.value === 'diaken' && even.target.checked) {
					// d.diaken = 1;
					// d.penatua = 0;
					tmp_array[index].diaken = 1;
					tmp_array[index].penatua = 0;
					setData(tmp_array);
				} else {
					// d.diaken = 0;
					tmp_array[index].diaken = 0;
					setData(tmp_array);
				}
			}
			return d;
		});
		setStatepenatua(
			data.filter((item) => {
				return item.penatua;
			}).length
		);
		setStatediaken(
			data.filter((item) => {
				return item.diaken;
			}).length
		);
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
				<TopContainer>
					<HeaderText>DAFTAR CALON</HeaderText>
					<MutedLink>
						Silahkan memperhatikan daftar nama, dan mencentang posisi Bakal Calon Penatua 42 orang dan Bakal
						Calon Diaken 32 orang yang anda rekomendasikan!
					</MutedLink>
					<Info>
						<BoldLink>
							Penatua yang sudah dipilih: <span className="text-danger">{statePenatua} Orang</span> 
						</BoldLink>
						<BoldLink>
							Diaken yang sudah dipilih: <span className="text-danger">{stateDiaken} Orang</span>
						</BoldLink>
					</Info>
					<Input className="" id="myInput" type="text" placeholder="Cari nama atau sektor calon.." />
				</TopContainer>

				<table className="table table-bordered table-striped table-sm custom">
					<thead>
						<tr style={{ fontSize: '16px' }}>
							<th style={{ textAlign: 'center' }}>No</th>
							<th>Nama Lengkap</th>
							<th style={{ textAlign: 'center' }}>Skt</th>
							<th style={{ textAlign: 'center' }}>Jabatan</th>
						</tr>
					</thead>
					<tbody id="myTable">
						{data.map((item, i) => {
							return (
								<Fragment key={i}>
									<tr>
										<td style={{ width: '2%', textAlign: 'center' }}>{item.id}</td>
										<td style={{ width: '46%' }}>{item.name}</td>
										<td style={{ width: '2%', textAlign: 'center' }}>{item.sector}</td>
										<td style={{ width: '50%', alignItems: 'center', lineHeight: "100%"}}>
											<form className="custom2">
												<div>
													<input
														type="checkbox"
														name={`${item.id}a`}
														onChange={handleCheckbox}
														className={`${item.id}vote`}
														value="penatua"
													/>
													<label>&nbsp;Pnt</label>
												</div>
												<div>
													<input
														type="checkbox"
														name={`${item.id}b`}
														onChange={handleCheckbox}
														className={`${item.id}vote`}
														value="diaken"
													/>
													<label>&nbsp;Dkn</label>
												</div>
											</form>
										</td>
									</tr>
								</Fragment>
							);
						})}
					</tbody>
				</table>
				<SubmitButton>Vote</SubmitButton>
			</Container>
		</>
	);
}
