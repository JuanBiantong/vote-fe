import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SubmitButton, Kontainer, Image, Footer } from '../accountBox/common';
import {} from 'react-icons/bs';
import Logo from '../../assets/logogetor.png';

export default function landingPage() {
	return (
		<Kontainer>
			<div className="col-md-8 mx-auto">
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
				<div className="mt-4">
					<br />
					<br />
					<div className="col-md-12">
						<p>
							Data pilihan majelis (Penatua dan Diaken) pilihan anda, sudah kami terima. Terima kasih
							sudah berpartisipasi dalam pemilihan ini
						</p>
						<p>
							Setelah bakal calon ditetapkan yaitu 2 kali dari jumlah komposisi majelis yang dibutuhkan
							yakni sebanyak 72 orang yang terdiri dari 42 Penatua dan 30 Diaken, maka akan dilaksanakan
							pemilihan majelis pada tanggal ... 2021, setelah ibadah hari minggu. Harap bapak/ibu bisa
							mengikuti kembali.
						</p>
						<p>Mari kita mendoakan agar proses ini bisa berjalan dengan baik dan berkenan bagi Tuhan.</p>
					</div>
					<hr className="mb-3" />
					<div className="col-6 col-md-2 mx-auto">
						<SubmitButton className="">Tutup Aplikasi</SubmitButton>
					</div>
				</div>
			</div>
			<Footer>
				<p>salekoDe@2021</p>
			</Footer>
		</Kontainer>
	);
}
