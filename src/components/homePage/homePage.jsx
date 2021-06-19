import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BoxSektor, Search, SubmitButton, Kontainer, Image, Footer } from '../accountBox/common';
import $ from 'jquery';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../assets/logogetor.png';

const TopContainer = styled.div`
	position: fixed;
	top: 55px;
	z-index: 1;
	margin: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background: linear-gradient(50deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 20%, rgba(0, 212, 255, 1) 100%);
`;

const Info = styled.div`
	width: 100%;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-radius: 5px;
	font-size: 14px;
	margin: 2% 0 2% 0;
	background: #f1f1f1;
`;

const BoldLink = styled.li`
	font-size: 14px;
	color: rgba(9, 9, 121, 0.8);
	font-weight: bold;
	line-height: 100%;
	padding: 0.2rem;
`;

export default function HomePage() {
	const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(false);

	const [statePenatua, setStatepenatua] = useState(0);
	const [stateDiaken, setStatediaken] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			// setLoading(true);
			const res = await axios.get('http://localhost:3000/anggota');
			setData(res.data);
			// setLoading(false);
		};
		fetchData();
	}, []);

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
			let value = $(this).val().toLowerCase();
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		});
	});

	$(function () {
		$('.sektor').click(function (e) {
			let value = $(this).val();
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		});
	});

	$('.clear').on('click', function () {
		$('#myTable tr').filter(function () {
			return $(this).toggle($(this).text().toLowerCase().indexOf('') > -1);
		});
	});

	return (
		<>
			<Kontainer>
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="light"
					className="bg"
					fixed="top"
					variant="dark"
					style={{ margin: 0, padding: '0 0.5rem', borderRadius: '10px 10px 0 0' }}
				>
					<Navbar.Brand href="#home">
						<Image src={Logo} alt="" />
						DAFTAR CALON
					</Navbar.Brand>
					<Navbar.Toggle
						style={{ backgroundColor: 'rgb(21, 89, 190)' }}
						aria-controls="responsive-navbar-nav"
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<Nav>
							<Nav.Link className="text-light h5 " href="#deets">
								[Nama Pemilih]
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<TopContainer>
					<Info>
						<BoldLink>
							Penatua yang sudah dipilih: <span className="text-red">{statePenatua} Orang</span>
						</BoldLink>
						<BoldLink>
							Diaken yang sudah dipilih: <span className="text-red">{stateDiaken} Orang</span>
						</BoldLink>
					</Info>
					<Search className="" id="myInput" type="text" placeholder="Cari nama atau sektor calon.." />
					<BoxSektor>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="true"
							value="1"
						>
							1
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="2"
						>
							2
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="3"
						>
							3
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="4"
						>
							4
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="5"
						>
							5
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="6"
						>
							6
						</button>
						<button
							className="btn btn-outline-primary btn-sm sektor font-weight-bold"
							aria-pressed="false"
							value="7"
						>
							7
						</button>
						<button className="btn btn-outline-primary btn-sm clear font-weight-bold" aria-pressed="false">
							Semua
						</button>
					</BoxSektor>
				</TopContainer>
				<Container>
					<table className="table table-bordered table-striped table-sm custom">
						<thead>
							<tr style={{ fontSize: '16px' }}>
								{/* <th style={{ textAlign: 'center' }}>No</th> */}
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
											{/* <td style={{ width: '2%', textAlign: 'center' }}>{item.id}</td> */}
											<td style={{ width: '46%' }}>{item.name}</td>
											<td style={{ width: '2%', textAlign: 'center' }}>{item.sector}</td>
											<td style={{ width: '50%', alignItems: 'center', lineHeight: '100%' }}>
												<form className="custom2">
													<div>
														<input
															type="checkbox"
															name={`${item.id}a`}
															onChange={handleCheckbox}
															className={`${item.id}vote`}
															value="penatua"
														/>
														<label>&nbsp;Penatua</label>
													</div>
													<div>
														<input
															type="checkbox"
															name={`${item.id}b`}
															onChange={handleCheckbox}
															className={`${item.id}vote`}
															value="diaken"
														/>
														<label>&nbsp;Diaken</label>
													</div>
												</form>
											</td>
										</tr>
									</Fragment>
								);
							})}
						</tbody>
					</table>
				</Container>
				<Container>
					<SubmitButton>Vote</SubmitButton>
				</Container>
				<Footer>
					<p>salekoDe@2021</p>
				</Footer>
			</Kontainer>
		</>
	);
}
